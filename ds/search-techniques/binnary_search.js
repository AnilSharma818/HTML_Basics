var arr = [2,5,38,6,3,7,36];


function binnarySearch(element, arr){
    
    if(arr.length == 0){
        return false;
    }
    if(arr.length === 1){
        if(arr[0] === element){
            return true;
        }
        return false;
    }
    var mid = (arr.length%2 === 0)?(arr.length/2): ((arr.length+1)/2);
    var midElement = arr[mid];
        
    console.log('mid is '+ mid + '  :  ' + midElement);
    
    if(midElement === element){
        return true;
    }else{
        if(element < midElement){
            console.log('search in left part');
            return binnarySearch(element, arr.splice(0, mid));
        }else{
            console.log('search in right part');
            return binnarySearch(element, arr.splice(mid+1));
        }
    }
    return false;
}

var found = binnarySearch(6, arr);
console.log(found);