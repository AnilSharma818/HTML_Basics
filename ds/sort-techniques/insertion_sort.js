var arr = [4,2,6,37,3,3,83,73,7,2,7,3];

function insertionSort(list){
    var len = list.length;
    var sortedList = [];
    for(var j=0;j<len-1;j++){
        if(sortedList.length === 0){
            sortedList.push(list[j]);
        }else{
            console.log(sortedList + '  ::  '+ list[j]);
            var inserted = false;
            for(var i=0;i<sortedList.length;i++){               
                if(list[j] < sortedList[i]){
                    sortedList.splice(i, 0, list[j]);
                    inserted = true;
                    break;
                }
                
            }
            if(!inserted){
                sortedList.push(list[i]);
            }
        }  
    }
    return sortedList;
}

var sortedList = insertionSort(arr);
console.log(sortedList);