/** 
* @Author DGT
* @desc 判断当前值是否能够呗JSON.stringify识别
* @param data 需要判断的值
* @returns 前参数是否可以string化
*/
export function hasStringify(data: any): boolean {
    if (data === undefined) {
        return false
    }
    if (data instanceof Function) {
        return false
    }
    if (isSymbol(data)) {
        return false
    }
    return true
}
/**
* @Author DGT
* @desc 判断当前类型是否是Symbol
* @param val 需要判断的值
* @returns 当前参数是否是symbol
*/
export function isSymbol(val: any): boolean {
    return typeof val === 'symbol'
}
/**
* @Author DGT
* @desc 输出错误信息
* @param val 需要输出的信息
* @returns 
*/
export function throwErrorMessage(val: any): void {
    throw new Error(val)
}

