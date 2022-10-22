/*for (let i = 0; i < 100; i++) {
    count += 1
} */

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    /*let countLog = count + " - "
    saveEl.textContent += countLog.slice(0, - 1);
    count = 0
    countEl.textContent = count*/

    var savedCount = document.createElement("p");
    savedCount.setAttribute("id", "count");

    var countDisplay = document.createTextNode(count);
    savedCount.appendChild(countDisplay);

    var element = document.getElementById("saver");
    element.appendChild(savedCount);

    count = 0
    countEl.textContent = count
}


