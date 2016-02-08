var arr = [4,2,6,37,3,3,83,73,7,2,7,3];

function quickSort(list){
    var len = list.length;
    
    var pivotIndex = Math.round(Math.random()*len);
    console.log("Generated Pivot Index  : " + pivotIndex);
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

var sortedList = quickSort(arr);
console.log(sortedList);