* 排序的稳定性
    排序关键字 ki=kj，且在排序前的序列ri领先于rj,排序后应该也是领先的 ——稳定的排序
* 内排序与外排序
    内排序：排序过程中，待排序的记录全被放置在内存中
    外排序：排序记录数太多，不能同时放置在内存，整个排序过程中需要在内外存之间多次交换数据才行

---
* 稳定：
    冒泡、选择、插入、归并
* 不稳定
    希尔排序、堆排序、快速排序