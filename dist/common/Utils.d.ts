import { IComponent, IEntity } from "./";
export declare class Utils {
    /**
     * From https://github.com/mreinstein/remove-array-items
     * A faster implementation of splice that generates minimal garbage
     * @param arr
     * @param startIdx
     * @param removeCount
     */
    static fastSplice(arr: any[], startIdx: number, removeCount: number): void;
    static getComponentType(component: IComponent<any> | IEntity): string;
    static getConstructorType(ctor: any): string;
    static cleanCache(list: IComponent<any>[] | IEntity[], component: IComponent<any> | IEntity): void;
}
