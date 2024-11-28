
async function getData() {
const url = "http://127.0.0.1:8000/qr";
try{
    const response = await fetch(url);
    if(!response.ok){
        throw Error("Response status"+ response.status)

    }
    const data = await response.json();
    console.log("UUID: ", data.uuid);
    generateQr(data.uuid)
}catch(error){
    console.error(error.message);
};
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