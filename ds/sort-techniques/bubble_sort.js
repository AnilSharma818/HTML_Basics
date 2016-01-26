var arr = [4,2,6,37,3,3,83,73,7,2,7,3];

function bubbleSort(list){
    var len = list.length;
    
    for(var j=1;j<len;j++){
        for(var i=0;i<len-j;i++){
            if(list[i] > list[i+1]){
                list[i] = list[i] + list[i+1];
                list[i+1] = list[i] - list[i+1];
                list[i] = list[i] - list[i+1];
            }   
        }
    }
    return list;
}

var sortedList = bubbleSort(arr);
console.log(sortedList);