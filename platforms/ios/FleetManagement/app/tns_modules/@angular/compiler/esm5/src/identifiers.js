/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var CORE = '@angular/core';
var Identifiers = /** @class */ (function () {
    function Identifiers() {
    }
    Identifiers.ANALYZE_FOR_ENTRY_COMPONENTS = {
        name: 'ANALYZE_FOR_ENTRY_COMPONENTS',
        moduleName: CORE,
    };
    Identifiers.ElementRef = { name: 'ElementRef', moduleName: CORE };
    Identifiers.NgModuleRef = { name: 'NgModuleRef', moduleName: CORE };
    Identifiers.ViewContainerRef = { name: 'ViewContainerRef', moduleName: CORE };
    Identifiers.ChangeDetectorRef = {
        name: 'ChangeDetectorRef',
        moduleName: CORE,
    };
    Identifiers.QueryList = { name: 'QueryList', moduleName: CORE };
    Identifiers.TemplateRef = { name: 'TemplateRef', moduleName: CORE };
    Identifiers.CodegenComponentFactoryResolver = {
        name: 'ɵCodegenComponentFactoryResolver',
        moduleName: CORE,
    };
    Identifiers.ComponentFactoryResolver = {
        name: 'ComponentFactoryResolver',
        moduleName: CORE,
    };
    Identifiers.ComponentFactory = { name: 'ComponentFactory', moduleName: CORE };
    Identifiers.ComponentRef = { name: 'ComponentRef', moduleName: CORE };
    Identifiers.NgModuleFactory = { name: 'NgModuleFactory', moduleName: CORE };
    Identifiers.createModuleFactory = {
        name: 'ɵcmf',
        moduleName: CORE,
    };
    Identifiers.moduleDef = {
        name: 'ɵmod',
        moduleName: CORE,
    };
    Identifiers.moduleProviderDef = {
        name: 'ɵmpd',
        moduleName: CORE,
    };
    Identifiers.RegisterModuleFactoryFn = {
        name: 'ɵregisterModuleFactory',
        moduleName: CORE,
    };
    Identifiers.inject = { name: 'inject', moduleName: CORE };
    Identifiers.INJECTOR = { name: 'INJECTOR', moduleName: CORE };
    Identifiers.Injector = { name: 'Injector', moduleName: CORE };
    Identifiers.defineInjectable = { name: 'defineInjectable', moduleName: CORE };
    Identifiers.InjectableDef = { name: 'ɵInjectableDef', moduleName: CORE };
    Identifiers.ViewEncapsulation = {
        name: 'ViewEncapsulation',
        moduleName: CORE,
    };
    Identifiers.ChangeDetectionStrategy = {
        name: 'ChangeDetectionStrategy',
        moduleName: CORE,
    };
    Identifiers.SecurityContext = {
        name: 'SecurityContext',
        moduleName: CORE,
    };
    Identifiers.LOCALE_ID = { name: 'LOCALE_ID', moduleName: CORE };
    Identifiers.TRANSLATIONS_FORMAT = {
        name: 'TRANSLATIONS_FORMAT',
        moduleName: CORE,
    };
    Identifiers.inlineInterpolate = {
        name: 'ɵinlineInterpolate',
        moduleName: CORE,
    };
    Identifiers.interpolate = { name: 'ɵinterpolate', moduleName: CORE };
    Identifiers.EMPTY_ARRAY = { name: 'ɵEMPTY_ARRAY', moduleName: CORE };
    Identifiers.EMPTY_MAP = { name: 'ɵEMPTY_MAP', moduleName: CORE };
    Identifiers.Renderer = { name: 'Renderer', moduleName: CORE };
    Identifiers.viewDef = { name: 'ɵvid', moduleName: CORE };
    Identifiers.elementDef = { name: 'ɵeld', moduleName: CORE };
    Identifiers.anchorDef = { name: 'ɵand', moduleName: CORE };
    Identifiers.textDef = { name: 'ɵted', moduleName: CORE };
    Identifiers.directiveDef = { name: 'ɵdid', moduleName: CORE };
    Identifiers.providerDef = { name: 'ɵprd', moduleName: CORE };
    Identifiers.queryDef = { name: 'ɵqud', moduleName: CORE };
    Identifiers.pureArrayDef = { name: 'ɵpad', moduleName: CORE };
    Identifiers.pureObjectDef = { name: 'ɵpod', moduleName: CORE };
    Identifiers.purePipeDef = { name: 'ɵppd', moduleName: CORE };
    Identifiers.pipeDef = { name: 'ɵpid', moduleName: CORE };
    Identifiers.nodeValue = { name: 'ɵnov', moduleName: CORE };
    Identifiers.ngContentDef = { name: 'ɵncd', moduleName: CORE };
    Identifiers.unwrapValue = { name: 'ɵunv', moduleName: CORE };
    Identifiers.createRendererType2 = { name: 'ɵcrt', moduleName: CORE };
    // type only
    Identifiers.RendererType2 = {
        name: 'RendererType2',
        moduleName: CORE,
    };
    // type only
    Identifiers.ViewDefinition = {
        name: 'ɵViewDefinition',
        moduleName: CORE,
    };
    Identifiers.createComponentFactory = { name: 'ɵccf', moduleName: CORE };
    return Identifiers;
}());
export { Identifiers };
export function createTokenForReference(reference) {
    return { identifier: { reference: reference } };
}
export function createTokenForExternalReference(reflector, reference) {
    return createTokenForReference(reflector.resolveExternalReference(reference));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpZmllcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci9zcmMvaWRlbnRpZmllcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBTUgsSUFBTSxJQUFJLEdBQUcsZUFBZSxDQUFDO0FBRTdCO0lBQUE7SUE4R0EsQ0FBQztJQTdHUSx3Q0FBNEIsR0FBd0I7UUFDekQsSUFBSSxFQUFFLDhCQUE4QjtRQUNwQyxVQUFVLEVBQUUsSUFBSTtLQUVqQixDQUFDO0lBQ0ssc0JBQVUsR0FBd0IsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUMsQ0FBQztJQUN6RSx1QkFBVyxHQUF3QixFQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQyxDQUFDO0lBQzNFLDRCQUFnQixHQUF3QixFQUFDLElBQUksRUFBRSxrQkFBa0IsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDLENBQUM7SUFDckYsNkJBQWlCLEdBQXdCO1FBQzlDLElBQUksRUFBRSxtQkFBbUI7UUFDekIsVUFBVSxFQUFFLElBQUk7S0FFakIsQ0FBQztJQUNLLHFCQUFTLEdBQXdCLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDLENBQUM7SUFDdkUsdUJBQVcsR0FBd0IsRUFBQyxJQUFJLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUMsQ0FBQztJQUMzRSwyQ0FBK0IsR0FBd0I7UUFDNUQsSUFBSSxFQUFFLGtDQUFrQztRQUN4QyxVQUFVLEVBQUUsSUFBSTtLQUVqQixDQUFDO0lBQ0ssb0NBQXdCLEdBQXdCO1FBQ3JELElBQUksRUFBRSwwQkFBMEI7UUFDaEMsVUFBVSxFQUFFLElBQUk7S0FFakIsQ0FBQztJQUNLLDRCQUFnQixHQUF3QixFQUFDLElBQUksRUFBRSxrQkFBa0IsRUFB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QUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDLENBQUM7SUFDeEYsa0JBQUM7Q0FBQSxBQTlHRCxJQThHQztTQTlHWSxXQUFXO0FBZ0h4QixNQUFNLGtDQUFrQyxTQUFjO0lBQ3BELE1BQU0sQ0FBQyxFQUFDLFVBQVUsRUFBRSxFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUMsRUFBQyxDQUFDO0FBQzlDLENBQUM7QUFFRCxNQUFNLDBDQUNGLFNBQTJCLEVBQUUsU0FBOEI7SUFDN0QsTUFBTSxDQUFDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQ2hGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Q29tcGlsZVRva2VuTWV0YWRhdGF9IGZyb20gJy4vY29tcGlsZV9tZXRhZGF0YSc7XG5pbXBvcnQge0NvbXBpbGVSZWZsZWN0b3J9IGZyb20gJy4vY29tcGlsZV9yZWZsZWN0b3InO1xuaW1wb3J0ICogYXMgbyBmcm9tICcuL291dHB1dC9vdXRwdXRfYXN0JztcblxuY29uc3QgQ09SRSA9ICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNsYXNzIElkZW50aWZpZXJzIHtcbiAgc3RhdGljIEFOQUxZWkVfRk9SX0VOVFJZX0NPTVBPTkVOVFM6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7XG4gICAgbmFtZTogJ0FOQUxZWkVfRk9SX0VOVFJZX0NPTVBPTkVOVFMnLFxuICAgIG1vZHVsZU5hbWU6IENPUkUsXG5cbiAgfTtcbiAgc3RhdGljIEVsZW1lbnRSZWY6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ0VsZW1lbnRSZWYnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIE5nTW9kdWxlUmVmOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICdOZ01vZHVsZVJlZicsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgVmlld0NvbnRhaW5lclJlZjogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnVmlld0NvbnRhaW5lclJlZicsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgQ2hhbmdlRGV0ZWN0b3JSZWY6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7XG4gICAgbmFtZTogJ0NoYW5nZURldGVjdG9yUmVmJyxcbiAgICBtb2R1bGVOYW1lOiBDT1JFLFxuXG4gIH07XG4gIHN0YXRpYyBRdWVyeUxpc3Q6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ1F1ZXJ5TGlzdCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgVGVtcGxhdGVSZWY6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ1RlbXBsYXRlUmVmJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBDb2RlZ2VuQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge1xuICAgIG5hbWU6ICfJtUNvZGVnZW5Db21wb25lbnRGYWN0b3J5UmVzb2x2ZXInLFxuICAgIG1vZHVsZU5hbWU6IENPUkUsXG5cbiAgfTtcbiAgc3RhdGljIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtcbiAgICBuYW1lOiAnQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyJyxcbiAgICBtb2R1bGVOYW1lOiBDT1JFLFxuXG4gIH07XG4gIHN0YXRpYyBDb21wb25lbnRGYWN0b3J5OiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICdDb21wb25lbnRGYWN0b3J5JywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBDb21wb25lbnRSZWY6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ0NvbXBvbmVudFJlZicsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgTmdNb2R1bGVGYWN0b3J5OiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICdOZ01vZHVsZUZhY3RvcnknLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIGNyZWF0ZU1vZHVsZUZhY3Rvcnk6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7XG4gICAgbmFtZTogJ8m1Y21mJyxcbiAgICBtb2R1bGVOYW1lOiBDT1JFLFxuXG4gIH07XG4gIHN0YXRpYyBtb2R1bGVEZWY6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7XG4gICAgbmFtZTogJ8m1bW9kJyxcbiAgICBtb2R1bGVOYW1lOiBDT1JFLFxuXG4gIH07XG4gIHN0YXRpYyBtb2R1bGVQcm92aWRlckRlZjogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtcbiAgICBuYW1lOiAnybVtcGQnLFxuICAgIG1vZHVsZU5hbWU6IENPUkUsXG5cbiAgfTtcbiAgc3RhdGljIFJlZ2lzdGVyTW9kdWxlRmFjdG9yeUZuOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge1xuICAgIG5hbWU6ICfJtXJlZ2lzdGVyTW9kdWxlRmFjdG9yeScsXG4gICAgbW9kdWxlTmFtZTogQ09SRSxcblxuICB9O1xuICBzdGF0aWMgaW5qZWN0OiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICdpbmplY3QnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIElOSkVDVE9SOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICdJTkpFQ1RPUicsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgSW5qZWN0b3I6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ0luamVjdG9yJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBkZWZpbmVJbmplY3RhYmxlOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICdkZWZpbmVJbmplY3RhYmxlJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBJbmplY3RhYmxlRGVmOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtUluamVjdGFibGVEZWYnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIFZpZXdFbmNhcHN1bGF0aW9uOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge1xuICAgIG5hbWU6ICdWaWV3RW5jYXBzdWxhdGlvbicsXG4gICAgbW9kdWxlTmFtZTogQ09SRSxcblxuICB9O1xuICBzdGF0aWMgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3k6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7XG4gICAgbmFtZTogJ0NoYW5nZURldGVjdGlvblN0cmF0ZWd5JyxcbiAgICBtb2R1bGVOYW1lOiBDT1JFLFxuXG4gIH07XG4gIHN0YXRpYyBTZWN1cml0eUNvbnRleHQ6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7XG4gICAgbmFtZTogJ1NlY3VyaXR5Q29udGV4dCcsXG4gICAgbW9kdWxlTmFtZTogQ09SRSxcblxuICB9O1xuICBzdGF0aWMgTE9DQUxFX0lEOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICdMT0NBTEVfSUQnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIFRSQU5TTEFUSU9OU19GT1JNQVQ6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7XG4gICAgbmFtZTogJ1RSQU5TTEFUSU9OU19GT1JNQVQnLFxuICAgIG1vZHVsZU5hbWU6IENPUkUsXG5cbiAgfTtcbiAgc3RhdGljIGlubGluZUludGVycG9sYXRlOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge1xuICAgIG5hbWU6ICfJtWlubGluZUludGVycG9sYXRlJyxcbiAgICBtb2R1bGVOYW1lOiBDT1JFLFxuICB9O1xuICBzdGF0aWMgaW50ZXJwb2xhdGU6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1aW50ZXJwb2xhdGUnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIEVNUFRZX0FSUkFZOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtUVNUFRZX0FSUkFZJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBFTVBUWV9NQVA6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1RU1QVFlfTUFQJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBSZW5kZXJlcjogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnUmVuZGVyZXInLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIHZpZXdEZWY6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1dmlkJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBlbGVtZW50RGVmOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtWVsZCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgYW5jaG9yRGVmOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtWFuZCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgdGV4dERlZjogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybV0ZWQnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIGRpcmVjdGl2ZURlZjogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybVkaWQnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIHByb3ZpZGVyRGVmOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtXByZCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgcXVlcnlEZWY6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1cXVkJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBwdXJlQXJyYXlEZWY6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1cGFkJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBwdXJlT2JqZWN0RGVmOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtXBvZCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgcHVyZVBpcGVEZWY6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1cHBkJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBwaXBlRGVmOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtXBpZCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgbm9kZVZhbHVlOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtW5vdicsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgbmdDb250ZW50RGVmOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtW5jZCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgdW53cmFwVmFsdWU6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1dW52JywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBjcmVhdGVSZW5kZXJlclR5cGUyOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtWNydCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuICAvLyB0eXBlIG9ubHlcbiAgc3RhdGljIFJlbmRlcmVyVHlwZTI6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7XG4gICAgbmFtZTogJ1JlbmRlcmVyVHlwZTInLFxuICAgIG1vZHVsZU5hbWU6IENPUkUsXG5cbiAgfTtcbiAgLy8gdHlwZSBvbmx5XG4gIHN0YXRpYyBWaWV3RGVmaW5pdGlvbjogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtcbiAgICBuYW1lOiAnybVWaWV3RGVmaW5pdGlvbicsXG4gICAgbW9kdWxlTmFtZTogQ09SRSxcbiAgfTtcbiAgc3RhdGljIGNyZWF0ZUNvbXBvbmVudEZhY3Rvcnk6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1Y2NmJywgbW9kdWxlTmFtZTogQ09SRX07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb2tlbkZvclJlZmVyZW5jZShyZWZlcmVuY2U6IGFueSk6IENvbXBpbGVUb2tlbk1ldGFkYXRhIHtcbiAgcmV0dXJuIHtpZGVudGlmaWVyOiB7cmVmZXJlbmNlOiByZWZlcmVuY2V9fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRva2VuRm9yRXh0ZXJuYWxSZWZlcmVuY2UoXG4gICAgcmVmbGVjdG9yOiBDb21waWxlUmVmbGVjdG9yLCByZWZlcmVuY2U6IG8uRXh0ZXJuYWxSZWZlcmVuY2UpOiBDb21waWxlVG9rZW5NZXRhZGF0YSB7XG4gIHJldHVybiBjcmVhdGVUb2tlbkZvclJlZmVyZW5jZShyZWZsZWN0b3IucmVzb2x2ZUV4dGVybmFsUmVmZXJlbmNlKHJlZmVyZW5jZSkpO1xufVxuIl19