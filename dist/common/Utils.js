"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fast = require("fast.js");
class Utils {
    /**
     * From https://github.com/mreinstein/remove-array-items
     * A faster implementation of splice that generates minimal garbage
     * @param arr
     * @param startIdx
     * @param removeCount
     */
    static fastSplice(arr, startIdx, removeCount) {
        let i, length = arr.length;
        if (startIdx >= length || removeCount === 0) {
            return;
        }
        removeCount = (startIdx + removeCount > length ? length - startIdx : removeCount);
        let len = length - removeCount;
        for (i = startIdx; i < len; ++i) {
            arr[i] = arr[i + removeCount];
        }
        arr.length = len;
    }
    static getComponentType(component) {
        return component.constructor.name;
    }
    static getConstructorType(ctor) {
        return ctor.name;
    }
    static cleanCache(list, component) {
        let idxMatch = -1;
        fast.forEach(list, (cacheComponent, idx) => {
            if (cacheComponent === component && idxMatch < 0) {
                idxMatch = idx;
            }
        }, null);
        if (idxMatch >= 0) {
            Utils.fastSplice(list, idxMatch, 1);
        }
    }
    static flatten(arr) {
        return arr.reduce((flat, toFlatten) => {
            return flat.concat(Array.isArray(toFlatten) ? Utils.flatten(toFlatten) : toFlatten);
        }, []);
    }
}
exports.Utils = Utils;
//# sourceMappingURL=Utils.js.map