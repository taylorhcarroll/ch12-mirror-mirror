let outPut1 = document.querySelector("#unique1")
let outPut2 = document.querySelector("#unique2")

document.querySelector("#message").addEventListener("keyup", event => {
    outPut1.innerHTML = event.target.value; 
    console.log("outPut1")
    outPut2.innerHTML = event.target.value;
});