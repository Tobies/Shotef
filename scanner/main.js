
function onScanSuccess(decodedText, decodedResult) {
    if (decodedText.includes("https://tobies.github.io/IDF-QR-THINGY/index.html#data=")) {
        html5QrcodeScanner.clear();
        location.href = "./orders-manager/index.html#data=" + decodedText.replace("https://tobies.github.io/IDF-QR-THINGY/index.html#data=", "")
        
    } else {
        
        console.log("INVALID CODE! " + decodedText)
    }
}

function findButton(context) {
    elements = document.getElementsByTagName("button")
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].textContent == context) {
            return elements[i];
        }
    }
    return null;
}

function applyStyle() {
    console.log("style")
    document.getElementById("qr-reader").style="width:80vw;height:80vw;margin-left: 8vw;margin-top:50px;border-radius: 15px;background-color: #EEEEFF;border:0px transparent;padding: 0px;";
    document.getElementById("qr-reader__dashboard_section_csr").style = "display: block;text-align: center;background-color: #EEEEFF; border-radius: 0px 0px 15px 15px;";
}

var html5QrcodeScanner = new Html5QrcodeScanner("qr-reader", { fps: 10, qrbox: 250});
html5QrcodeScanner.render(onScanSuccess);
document.getElementById("qr-reader").style="width:80vw;height:80vw;margin-left: 8vw;margin-top:50px;border-radius: 25px;background-color: #1C1C1C;border:0px transparent;padding: 0px;";
document.getElementById("qr-reader__status_span").style="padding: 5px 7px;font-size: 14px;background: transparent none repeat scroll 0% 0%;border: 1px solid rgba(0, 0, 0, 0);color: rgb(17, 17, 17);float:left; color: white;";
document.getElementById("qr-reader__scan_region").style="width: 100%;min-height: 20vw;text-align: center;"
findButton("Request Camera Permissions").style="border-radius: 10px; border-color: transparent; padding:5px; background-color: #60C8D9; margin-top:25vw"
findButton("Request Camera Permissions").onclick = applyStyle;
document.getElementById("qr-reader__dashboard_section").style="";
