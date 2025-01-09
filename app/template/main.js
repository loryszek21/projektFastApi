const url  = "http://192.168.100.54:8000/"

async function getData() {
const url1 = url+"generate-qr";
try{
    const response = await fetch(url1);
    if(!response.ok){
        throw Error("Response status"+ response.status)

    }
    const data = await response.json();
    console.log("UUID: ", data.uuid);
    generateQr(data.uuid)

    verify()


}catch(error){
    console.error(error.message);
};
}

async function  verify(){
    const url1  = url+"verify-qr"
    try{
        const response = await fetch(url1);
        if(!response.ok){
            throw Error("Response status "+ response.status)
        }
        const data = await response.json();
        console.log(data.info)
    }catch(error){
        console.error(error.message)
    }
}

function generateQr(uuid){
    const qrDiv = document.getElementById("qrcode");
    qrDiv.innerHTML = ""
    let qrcode = new QRCode("qrcode", uuid);
        console.log("Wygenerowano kod QR")
}

function move(){
    const elem = document.getElementById("progresBar");
    var width = 100;
    var id = setInterval(frame, 10);
    function frame() {
      if (width <= 0) {
        clearInterval(id);
      } else {
        width--; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width * 1  + '%';

    }
    }
    function sleep(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
      }
}