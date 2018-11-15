import getArrayItemByValue from "@panhezeng/utils/dist/get-array-item-by-value";

/**
 * @param array 需要遍历的数组
 * @param value 返回与value相等的项
 * @param key 如果有key，则表示数组项是对象，则取该对象命名为此key的属性值和value比较
 */
export function getOptionByValue(array, value, key) {
  const item = getArrayItemByValue(array, value, key);
  if (Object.prototype.toString.call(item) === "[object Object]") {
    return item;
  }
  return {};
}

/**
 * @param array 需要遍历的数组
 * @param value 返回与value相等的项
 * @param key 如果有key，则表示数组项是对象，则取该对象命名为此key的属性值和value比较
 */
export function getTextByValue(array, value, key) {
  const item = getOptionByValue(array, value, key);
  return item.text || "";
}

/**
 * @param array 需要遍历的数组
 * @param key 取树节点对象命名为此key的属性值和value比较
 * @param value 返回与value相等的项
 * @param childrenKey 获得子树的节点名
 */
export function getTreeOptionByValue(
  array,
  key,
  value,
  childrenKey = "children"
) {
  function recursive(data) {
    for (let i = data.length; i--; ) {
      const item = data[i];
      if (Object.prototype.toString.call(item) === "[object Object]") {
        if (item[key] === value) {
          return item;
        } else {
          const children = item[childrenKey];
          if (
            Object.prototype.toString.call(children) === "[object Array]" &&
            children.length
          ) {
            return recursive(children);
          } else {
            return {};
          }
        }
      } else {
        return {};
      }
    }
  }

  if (
    Object.prototype.toString.call(array) === "[object Array]" &&
    array.length
  ) {
    return recursive(array);
  }
  return {};
}
