if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("worker.js").then(registration => {
        console.log("worker registered!");

    }).catch(error => {
        console.log("worker error!");
        console.log(error)
    })
}


function indexerClick() {
    location.href = "./indexer/index.html"
}

function scannerClick() {
    location.href = "./scanner/index.html"
}

function mapClick() {
    document.getElementById("map-container").style = "position:fixed;padding:10px;padding-bottom: 1vh;border-radius: 15px;background-color:#1f1f1f;top:1vh;text-align: center;width:91vw;"
}
function closeMap() {
    document.getElementById("map-container").style = "visibility: hidden;position:fixed;padding:10px;padding-bottom: 1vh;border-radius: 15px;background-color:#1f1f1f;top:1vh;text-align: center;width:91vw;"
    
}

document.getElementById("BTN-INDEXER").onclick = indexerClick;
document.getElementById("BTN-SCANNER").onclick = scannerClick;
document.getElementById("BTN-MAP").onclick = mapClick;
document.getElementById("map-btn").onclick = closeMap;
