declare module 'FirstModules' {                                                         // Modules
    export function unToggle(str: string): string;
}

export function toggleAgain(str: string): string

declare namespace modulesNamespace {                                                    // Global augmentation
    interface global {
        myGlobalFunction(): void;
    }
}