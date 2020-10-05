onmessage = function(e){
    console.log("Recibido");
    var workerResult = "Result: " + (e.data[0] * e.data[1]);
    console.log("Posteando mensaje en back main script");
    postMessage(workerResult);
}