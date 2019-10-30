/**
 * 二分查找的条件是必须是有序的线性表。
 * 和线性表的中点值进行比较，如果小就继续在小的序列中查找，如此递归直到找到相同的值。
 * @param {*} data 
 * @param {*} arr 
 * @param {*} start 
 * @param {*} end 
 */

function binarySearch(data, arr, start, end) {
    if (start > end) {
        return -1;
    }
    let middle = Math.floor((start + end) / 2);
    if (data == arr[middle]) {
        return middle;
    } else if (data < arr[middle]) {
        return binarySearch(data, arr, start, middle - 1);
    }else {
        return binarySearch(data, arr, middle + 1, end);
    }
}
const arr = [1, 1, 3, 4, 5, 6, 7, 7, 8];
const result = binarySearch(4, arr, 0, arr.length - 1);