var arr = [3,5,true, false, 2, "test", 6];


function calculate(arr){
  var sum = 0;
  var count = 0;
  var max = -Infinity;
  var min = Infinity;
  for(var i=0;i<arr.length;i++){
    if(typeof arr[i] === "number"){
      sum += arr[i];
      
      if(arr[i] < min){
        min = arr[i];
      }
      
      if(arr[i] > max){
        max = arr[i];
      }
      count++;
    }
  }
  
  console.log(sum);
  console.log(sum/count);
  console.log(min + ' : ' + max);
}

calculate(arr);
