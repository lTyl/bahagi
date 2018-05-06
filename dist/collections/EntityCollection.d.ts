import { IEntity } from "../common";
import { EventEmitter } from "eventemitter3";
export declare class EntityCollection extends EventEmitter {
    entities: IEntity[];
    private _entitiesByTag;
    private _count;
    constructor();
    add(...entities: IEntity[]): void;
    remove(entity: IEntity): void;
    getAll(): IEntity[];
    getByTag(tag: string): IEntity[] | null;
    getFirstByTag(tag: string): IEntity | null;
    getByComponent<T>(component: any): IEntity[];
    destroy(): void;
}
