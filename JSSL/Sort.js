
function sort(){

    function comparator(a, b) {
        return a < b;
    }

    // 分类 -------------- 内部比较排序
    // 数据结构 ---------- 数组
    // 最差时间复杂度 ---- O(n^2)
    // 最优时间复杂度 ---- 如果能在内部循环第一次运行时,使用一个旗标来表示有无需要交换的可能,可以把最优时间复杂度降低到O(n)
    // 平均时间复杂度 ---- O(n^2)
    // 所需辅助空间 ------ O(1)
    // 稳定性 ------------ 稳定
    //比较相邻的元素，如果前一个比后一个大，就把它们两个调换位置。
    //对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数。
    //针对所有的元素重复以上的步骤，除了最后一个。
    //持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。

    this.bubbleSort = function(items){
        var account = 0;
        var compare = 0;
        for (var i = 0; i < items.length ; i++){
            var exchange = 0;
            for (var j = 0; j < items.length - 1 - i; j++){
                if (comparator(items[j+1],items[j]))
                {
                    var temp = items[j];
                    items[j] = items[j+1];
                    items[j+1] = temp;
                    exchange = 1;
                    compare ++;
                }
                //console.log("Temp in sort [" + items + "]." + "Account is " + account);
                account ++;
            }
            if(!exchange) return items;
            console.log("Temp sort [" + items + "]." + "Account is " + account + " and Compare is " + compare);
            account ++;
        }
        return items;
    }

    this.bubbleSortA = function(items){
        for (var i = 0 ; i < items.length ; i++) {
            for (var j = i ; j > 0 ; j--) {
                if (comparator(items[j],items[j-1])) {
                    var temp = items[j];
                    items[j] = items[j-1];
                    items[j-1] = temp;
                }
            }
            console.log("Temp sort [" + items + "].");
        }
        return items;
    }

    this.bubbleSortB = function(items){
        for (var i = 0 ; i < items.length ; i++) {
            for (var j = items.length - 1 ; j > i ; j--) {
                if (comparator(items[j],items[j-1])) {
                    var temp = items[j-1];
                    items[j-1] = items[j];
                    items[j] = temp;
                }
            }
            console.log("Temp sort [" + items + "].");
        }
        return items;
    }

    // 分类 ------------- 内部比较排序
    // 数据结构 ---------- 数组
    // 最差时间复杂度 ---- 最坏情况为输入序列是降序排列的,此时时间复杂度O(n^2)
    // 最优时间复杂度 ---- 最好情况为输入序列是升序排列的,此时时间复杂度O(n)
    // 平均时间复杂度 ---- O(n^2)
    // 所需辅助空间 ------ O(1)
    // 稳定性 ------------ 稳定
    //1-从第一个元素开始，该元素可以认为已经被排序
    //2-取出下一个元素，在已经排序的元素序列中从后向前扫描
    //3-如果该元素（已排序）大于新元素，将该元素移到下一位置
    //4-重复步骤3，直到找到已排序的元素小于或者等于新元素的位置
    //5-将新元素插入到该位置后
    //6-重复步骤2~5
    this.insertSort = function(items){
        for(i = 1; i < items.length; i++){
            var temp = items[i];
            var j = i - 1;
            while(j >= 0 && comparator(temp,items[j])){
            //while(j >= 0 && temp < items[j]){
                items[j+1] = items[j];
                j--;
            }
            items[j+1] = temp;
            console.log("Temp sort [" + items + "]. And the insert item is [" + temp + "]. ");
        }
        return items;
    }

    this.binaryInsertSort = function(items){
        for(var i = 1; i < items.length; i++){
            temp = items[i];
            left = 0;
            right = i - 1;
            while(left <= right){
                var middle = parseInt((left + right) / 2);
                if(comparator(temp, items[middle])) {
                    right = middle - 1;
                }
                else {
                    left = middle + 1;
                }
            }
            for(var j = i-1; j >= right+1; j--){
                items[j+1] = items[j];
            }
            items[j+1] = temp;
            console.log("Temp sort [" + items + "].");
        }
        return items;
    }
}

var demo = new sort();
var items =[7,5,2,0,8,3,6,9,1,4];
//console.log("Before bubble sort  [" + items + "].");
console.log("After bubble sort [" + demo.bubbleSort(items) + "].");
//console.log("After bubble A sort [" + demo.bubbleSortA(items) + "].");
//console.log("After bubble B sort [" + demo.bubbleSortB(items) + "].");
//console.log("After Insert sort [" + demo.insertSort(items) + "].");
//console.log("After Binary Insert sort [" + demo.binaryInsertSort(items) + "].");


