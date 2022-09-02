function generateQR() {
    let qrimage = document.querySelector("#qr-image").style.display = "block";
    let qrText = document.querySelector("#text").value;
    let image = document.querySelector("img");
    let err= document.querySelector("#qr-image .error");
    
    if (qrText.trim().length ==0) {
        err.innerHTML = "Please enter text";
        image.style.display = "none";
    } else {
        image.style.display = "block";
        err.innerHTML = "";
        image.src = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=" + qrText;
    }
}