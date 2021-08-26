if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("worker.js").then(registration => {
        console.log("worker registered!");

    }).catch(error => {
        console.log("worker error!");
        console.log(error)
    })
}


function indexerClick() {
    location.href = "./scanner/index.html"
}

function scannerClick() {

}

function mapClick() {

}

document.getElementById("BTN-INDEXER").onclick = indexerClick;
document.getElementById("BTN-SCANNER").onclick = scannerClick;
document.getElementById("BTN-MAP").onclick = mapClick;
