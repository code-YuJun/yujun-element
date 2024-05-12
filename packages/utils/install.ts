import type { App, Plugin } from "vue";
import { each } from "lodash-es";

type SFCWithInstall<T> = T & Plugin;

export function makeInstaller(components: Plugin[]) {
    const install = (app: App) =>
        each(components, (c) => {
            // use 方法会调用每一个组件的 install 方法
            app.use(c);
        });
    return install;
}

export const withInstall = <T>(component: T) => {
    (component as SFCWithInstall<T>).install = (app: App) => {
        const name = (component as any)?.name || "UnnamedComponent";
        // 全局注册组件
        app.component(name, component as SFCWithInstall<T>);
    };
    return component as SFCWithInstall<T>;
};