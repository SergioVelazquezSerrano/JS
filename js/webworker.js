var myWorker = new Worker("./js/webworkerback.js");
var res =0;

myWorker.postMessage([4,14]);

myWorker.onmessage = function(e){
    res=e.data;
    console.log("Resultado" + res);
    myWorker.terminate();
}
