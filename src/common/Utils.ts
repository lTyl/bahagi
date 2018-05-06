import { IComponent, IEntity } from "./";
import * as fast from 'fast.js';

export class Utils {
	/**
	 * From https://github.com/mreinstein/remove-array-items
	 * A faster implementation of splice that generates minimal garbage
	 * @param arr
	 * @param startIdx
	 * @param removeCount
	 */
	public static fastSplice(arr: any[], startIdx: number, removeCount: number){
		let i, length = arr.length;

		if (startIdx >= length || removeCount === 0) {return}

		removeCount = (startIdx + removeCount > length ? length - startIdx : removeCount);

		let len = length - removeCount;

		for (i = startIdx; i < len; ++i) {
			arr[i] = arr[i + removeCount]
		}

		arr.length = len
	}

	public static getComponentType(component: IComponent<any>|IEntity): string {
		return component.constructor.name
	}

	public static getConstructorType(ctor: any): string {
		return ctor.name
	}

	public static cleanCache(list: IComponent<any>[]|IEntity[], component: IComponent<any>|IEntity): void {
		let idxMatch = -1;
		fast.forEach(list, (cacheComponent: IComponent<any>|IEntity, idx: number) => {
			if (cacheComponent === component && idxMatch < 0){
				idxMatch = idx;
			}
		}, null);

		if (idxMatch >= 0){
			Utils.fastSplice(list, idxMatch, 1);
		}
	}
}