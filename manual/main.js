function navigate() {
    var value =  document.getElementById("INPUT-FIELD").value;
    if (value.includes("https://tobies.github.io/IDF-QR-THINGY/index.html#data=")) {
        location.href = "../scanner/orders-manager/index.html#data=" + value.replace("https://tobies.github.io/IDF-QR-THINGY/index.html#data=", "");
    } else if (value.includes("https://tobies.github.io/Shotef/scanner/orders-manager/index.html#data=")) {
        location.href = "../scanner/orders-manager/index.html#data=" + value.replace("https://tobies.github.io/Shotef/scanner/orders-manager/index.html#data=", "");
    } else {
        alert("הקישור שהוזן לא תקין")
    }
}


document.getElementById("BTN-NAVIGATE").onclick = navigate
