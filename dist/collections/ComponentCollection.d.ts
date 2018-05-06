import { IComponent } from "../common";
import { EventEmitter } from "eventemitter3";
export declare class ComponentCollection extends EventEmitter {
    private _allComponents;
    private _componentsByType;
    private _componentsByTag;
    private _count;
    constructor();
    add(...components: any[]): void;
    remove(component: any): void;
    getAll(): IComponent<any>[];
    getByType<T>(component: IComponent<T>): IComponent<T>[] | null | any;
    getFirstByType<T>(component: IComponent<T>): IComponent<T> | null;
    getByTag(tag: string): IComponent<any>[] | null;
    getFirstByTag(tag: string): IComponent<any> | null;
    contains<T>(component: IComponent<T>): IComponent<T>[] | null;
    destroy(): void;
}
