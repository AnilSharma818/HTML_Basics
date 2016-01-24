self.addEventListener('message', function(e) {
    
    if(e.data === 'STOP'){
        self.postMessage("WORKER STOPED");
        self.close();
    }else{
        self.postMessage("FROM WORKER: " + e.data);
    }
  
}, false);