
const qrCodeSuccessCallback = message => { 
    console.log(message);
    if (message.includes("https://tobies.github.io/IDF-QR-THINGY/index.html#data=")) {
        location.href("./orders-manager/index.html#data=" + message.replace("https://tobies.github.io/IDF-QR-THINGY/index.html#data=", ""));

    }
}
const config = { fps: 10, qrbox: 250 };


function findButton(context) {
    elements = document.getElementsByTagName("button")
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].textContent == context) {
            return elements[i];
        }
    }
    return null;
}

function startScan() {
    html5QrcodeScanner.html5Qrcode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback);
    document.getElementById("start-btn").onclick = stopScan;
    document.getElementById("start-btn").textContent = "הפסק לסרוק"
}

function stopScan() {
    html5QrcodeScanner.html5Qrcode.stop();
    document.getElementById("start-btn").onclick = startScan;
    document.getElementById("start-btn").textContent = "התחל לסרוק"
}

function applyStyle() {
    document.getElementById("qr-reader").style="width:80vw;height:80vw;margin-left: 10vw;margin-top:50px;border-radius: 25px;background-color: #1C1C1C;border:0px transparent;padding: 0px;";
    document.getElementById("qr-reader__dashboard_section_csr").style="display:none;"
    document.getElementById("start-btn").style="border-radius: 25px 25px 0px 0px; border-color: transparent; background-color: #60C8D9; position:fixed; bottom:0px; width:100vw; left:0px; padding-bottom:30px; padding-top:30px; font-family: 'Rubik', sans-serif; font-size:5vw; color:#121212; text-align: center";
    document.getElementById("start-btn").onclick = startScan;
}



var html5QrcodeScanner = new Html5QrcodeScanner("qr-reader", config);
html5QrcodeScanner.render(qrCodeSuccessCallback);
document.getElementById("qr-reader").style="width:80vw;height:80vw;margin-left: 10vw;margin-top:50px;border-radius: 25px;background-color: #1C1C1C;border:0px transparent;padding: 0px;";
document.getElementById("qr-reader__status_span").hidden = true;
document.getElementById("qr-reader__scan_region").style="width: 100%;min-height: 20vw;text-align: center;"
findButton("Request Camera Permissions").style="border-radius: 25px 25px 0px 0px; border-color: transparent; padding:5px; background-color: #60C8D9; position:fixed; bottom:0px; width:100vw; left:0px; padding-bottom:30px; padding-top:30px; font-family: 'Rubik', sans-serif; font-size:5vw; color:#121212"
findButton("Request Camera Permissions").onclick = applyStyle;
findButton("Request Camera Permissions").textContent = "בקש גישה לשימוש במצלמה"
html5QrcodeScanner.cameraScanImage.style = "opacity:0.1; width:100%; height:100%;"
html5QrcodeScanner.cameraScanImage.src = "https://freefrontend.com/assets/img/css-arrows/simple-arrow-animation.gif"
document.getElementById("qr-reader__dashboard_section").style="";
