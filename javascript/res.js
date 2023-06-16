let results = JSON.parse(localStorage.getItem("rounds"));

let counter = 0;

for (res of results) {
    if (res.success == true) counter++;
}

document.getElementById("ress")
.innerText = counter
