import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject, ConnectableObservable, Subscription, of, from } from "rxjs";
import { flatMap, last, catchError, shareReplay, first, publish, filter } from "rxjs/operators";
import { Kinvey, InvalidCredentialsError, NoActiveUserError } from "kinvey-nativescript-sdk";
import { setTimeout } from "tns-core-modules/timer";
import { config } from "../../core/config";
import { NavigationService } from "./navigation.service";
import { NetworkMonitoringService } from "./network-monitoring.service";

@Injectable()
export class BackendService {
    private loggedInChangedObservable: Observable<boolean>;
    private findResult: { [key: string]: BehaviorSubject<any> } = {};
    private syncCollection: { [key: string]: Subscription } = {};

    constructor(private navigationService: NavigationService,
        private networkMonitoringService: NetworkMonitoringService) {
        Kinvey.init(<Kinvey.ClientConfig>config.backendConfig);
    }

    setLoggedInChangedObservable(value: Observable<boolean>) {
        this.loggedInChangedObservable = value;
    }

    login(username: string, password: string) {
        return Kinvey.User.login(username, password)
            .catch((e) => this.handlePromiseError(e));
    }

    loginWithMIC(redirectUri: string, authorizationGrant?: Kinvey.AuthorizationGrant, options?: Kinvey.RequestOptions) {
        return Kinvey.User.loginWithMIC(redirectUri, authorizationGrant, options)
            .catch((e) => this.handlePromiseError(e));
    }

    logout() {
        return Kinvey.User.logout()
            .catch((e) => this.handlePromiseError(e));
    }

    signup(username: string, password: string, email: string) {
        return Kinvey.User.signup({ username, password, email })
            .catch((e) => this.handlePromiseError(e));
    }

    getActiveUser() {
        return Kinvey.User.getActiveUser();
    }

    resetPassword(email: string, options?: Kinvey.RequestOptions) {
        return Kinvey.User.resetPassword(email, options)
            .catch((e) => this.handlePromiseError(e));
    }

    save(collectionName: string, item: any, dataStoreType?: Kinvey.DataStoreType, options?: Kinvey.RequestOptions) {
        const savePromise = this.getDataStoreCollection(collectionName, dataStoreType)
            .save(item, options)
            .then(() => this.refreshFind(collectionName))
            .catch((e) => this.handlePromiseError(e));

        return this.networkMonitoringService.isOnline ? savePromise : Promise.resolve()
            .then(() => { setTimeout(() => this.refreshFind(collectionName), 200) });
    }

    refresh(collectionName: string, items: Observable<any>): Promise<void> {
        if (!this.findResult[collectionName] || !items) {
            return Promise.resolve();
        }

        const connectableObservable = items.pipe(publish()) as ConnectableObservable<any>;
        connectableObservable.connect();
        this.refreshFind(collectionName);

        return connectableObservable.pipe(first()).toPromise();
    }

    filesUpload(file: {}, metadata?: Kinvey.FileMetadata, options?: Kinvey.RequestOptions) {
        return Kinvey.Files.upload(file, metadata, options)
            .catch((e) => this.handlePromiseError(e));
    }

    find(collectionName: string, dataStoreType?: Kinvey.DataStoreType, query?: Kinvey.Query, options?: Kinvey.RequestOptions) {
        const observableResult = this.getDataStoreCollection(collectionName, dataStoreType)
            .find(query, options);
        return this.cacheLast(observableResult, collectionName);
    }

    findById(collectionName: string, id: string, dataStoreType?: Kinvey.DataStoreType, options?: Kinvey.RequestOptions) {
        const observableResult = this.getDataStoreCollection(collectionName, dataStoreType)
            .findById(id, options);
        return this.cacheLast(observableResult, collectionName);
    }

    remove(collectionName: string, dataStoreType?: Kinvey.DataStoreType, query?: Kinvey.Query, options?: Kinvey.RequestOptions) {
        return this.getDataStoreCollection(collectionName, dataStoreType)
            .remove(query, options)
            .then(() => this.refreshFind(collectionName))
            .catch((e) => this.handlePromiseError(e));
    }

    removeById(collectionName: string, id: string, dataStoreType?: Kinvey.DataStoreType, options?: Kinvey.RequestOptions) {
        return this.getDataStoreCollection(collectionName, dataStoreType)
            .removeById(id, options)
            .then(() => this.refreshFind(collectionName))
            .catch((e) => this.handlePromiseError(e));
    }

    private getDataStoreCollection(collectionName, dataStoreType) {
        const dataStoreCollection = Kinvey.DataStore.collection(collectionName, dataStoreType);
        this.sync(collectionName, dataStoreCollection);
        return dataStoreCollection;
    }

    private refreshFind(collectionName) {
        if (this.findResult[collectionName]) {
            this.findResult[collectionName].next({});
        }
    }

    private sync(collectionName: string, dataStoreCollection: Kinvey.CacheStore<Kinvey.Entity>) {
        if (this.syncCollection[collectionName] || !dataStoreCollection.pendingSyncCount) return;

        this.syncCollection[collectionName] = this.networkMonitoringService.connectionObservable
            .pipe(
                filter(isOnline => isOnline),
                flatMap(() => from(dataStoreCollection.pendingSyncCount())),
                filter((count: any) => count > 0),
                flatMap(() => from(dataStoreCollection.sync())),
            ).subscribe(
                () => this.refreshFind(collectionName),
                (e) => !this.handleError(e) && console.error(e.toString()));
    }

    private cacheLast(observable: Observable<any>, collectionName: string) {
        this.findResult[collectionName] = this.findResult[collectionName] || new BehaviorSubject<any>({});

        const handleError = () => catchError((e) => {
            if (!this.handleError(e)) console.error(e.toString());
            return of(null);
        });

        return this.findResult[collectionName].pipe(
            flatMap(() => this.loggedInChangedObservable.pipe(handleError())),
            flatMap((isLoggedIn) => isLoggedIn ? observable.pipe(handleError(), last(value => !!value)) : of(null)),
            shareReplay(1)
        );
    }

    private handlePromiseError(error) {
        this.handleError(error);
        throw error;
    }

    private handleError(error) {
        if (error instanceof InvalidCredentialsError || error instanceof NoActiveUserError) {
            this.navigationService.navigateToModal("login");
            return true;
        }

        return false;
    }
}
