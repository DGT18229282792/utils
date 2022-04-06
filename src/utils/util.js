/*
 * @Author: DGT 
 * @Date: 2021-05-24 16:07:34 
 * 封装的工具类
 * @Last Modified by: DGT_
 * @Last Modified time: 2021-05-25 14:36:46
 */
/*
 *@Description: 判断数据类型
 *@MethodAuthor:  DGT
 *@param: {}
 *@Date: 2021-05-24 16:09:09
*/
let jdd_Type = (data) => {
  const template = {
    "[object Array]": "Array",
    "[object Object]": "Object",
    "[object Number]": "Number",
    "[object Boolean]": "Boolean",
    "[object String]": "String",
    "[object Null]": "Null",
    "[object Date]": "Date",
    "[object Function]": "Function",
    "[object RegExp]": "RegExp",
    "[object Symbol]": "Symbol",
    "[object BigInt]": 'BigInt'
  }
  let result = Object.prototype.toString.call(data);
  return template[result];
}
/*
 *@Description: 数组的排序
 *@MethodAuthor:  DGT
 *@param: {
     arr:待排序数组
     type:排序类型 up:从小到大、down：从大到小
 }
 *@Date: 2021-05-24 16:14:26
*/
let sortFun = (arr, type) => {
  if (type && type === `up`) return arr.sort((a, b) => a - b);
  if (type && type === `down`) return arr.sort((a, b) => b - a);
}
/*
 *@Description: 判断是否是图片类型
 *@MethodAuthor:  DGT
 *@param: {
     str:'路径字符串'
 }
 *@Date: 2021-05-24 16:31:16
*/
let isImgFun = (str) => {
  if (imgType.match(/.*?(gif|png|jpg)/gi)) {
    return true
  }
  return false
}
/*
 *@Description: 递归树返回最后一层数据
 *@MethodAuthor:  DGT
 *@param: {}
 *@Date: 2021-05-24 16:48:32
*/
let returnTreeData = (array: any) => {
  array.forEach((item: any) => {
    if (item.children) {
      returnTreeData(item.children);
    } else if (!item.children) {
      // 获得符合的 node
      // datas.value.push(item);
    }
  });
}
/*
 *@Description: 获取时间
 *@MethodAuthor:  DGT
 *@param: {
   format:精确度：1：天 2：分
 }
 *@Date: 2021-05-25 11:07:46
*/
let getNowTime = (format: any) => {
  const now = new Date();
  const year = now.getFullYear(); // 得到年份
  let month: any = now.getMonth(); // 得到月份
  let date: any = now.getDate(); // 得到日期
  const day: any = now.getDay(); // 得到周几
  let hour: any = now.getHours(); // 得到小时
  let minu: any = now.getMinutes(); // 得到分钟
  let sec: any = now.getSeconds(); // 得到秒
  month += 1;
  if (month < 10) {
    month = `0${month}`;
  }
  if (date < 10) date = `0${date}`;
  if (hour < 10) hour = `0${hour}`;
  if (minu < 10) minu = `0${minu}`;
  if (sec < 10) sec = `0${sec}`;
  let time = '';
  // 精确到天
  if (format == 1) {
    time = `${year}-${month}-${date}`;
  }
  // 精确到分
  else if (format == 2) {
    time = `${year}-${month}-${date} ${hour}:${minu}:${sec}`;
  }
  return time;
},
