if (
  window.location.href.substring(window.location.href.length - 10) ==
  "home2.html"
) {
  window.location.href += "?id=0";
}

let rounds = JSON.parse(localStorage.getItem("rounds2"));
let number_rounds = 10;

console.log(rounds);
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const round_id = urlParams.get("id");


for (let i = 0; i < 10; i++) {
  let div = document.createElement("div");
  div.setAttribute("class", "rnd");
  div.setAttribute("id", `${i}`);
  if (rounds[i].success === null) {
    div.innerText = "?"
  } else if (rounds[i].success === true) {
    div.style.background = "lightgreen";
    div.innerText = "✔"
    div.style.color = "green";

} else {
      div.style.background = "tomato";
      div.style.color = "white";
      div.innerText = "×"
  }
  div.addEventListener("click", () => {
    window.location.href = window.location.href.slice(0, -1) + div.id;
  });
  document.getElementById("rounds").appendChild(div);
}
let user_ans = 0;
document.getElementById("ans")
.addEventListener("keyup", (e) => {
    e.preventDefault();
    if (e.keyCode === 13) {
        user_ans = document.getElementById("ans").value;

        if (user_ans == rounds[Number(round_id)].n_1 * rounds[Number(round_id)].n_2) {
            rounds[Number(round_id)].success = true
            window.localStorage.setItem("rounds2", JSON.stringify(rounds));
            window.location.reload();
        } else {
            rounds[Number(round_id)].success = false
            window.localStorage.setItem("rounds2", JSON.stringify(rounds));
            window.location.reload();
        }


    }
})


document.getElementById(round_id).style.transform = "scale(1.3)";
if (rounds[Number(round_id)].success == null) {
    document.getElementById("n1").innerText = rounds[Number(round_id)].n_1;
    document.getElementById("n2").innerText = rounds[Number(round_id)].n_2;
} else if (rounds[Number(round_id)].success == true) {
  document.getElementById("bobo").innerHTML = "SUCCESS";
  document.getElementById("ans").style.display = "none";

} else if (rounds[Number(round_id)].success == false) {
    document.getElementById("bobo").innerHTML =
    "FAILURE, answer was " +rounds[Number(round_id)].n_1 * rounds[Number(round_id)].n_2;
  document.getElementById("ans").style.display = "none";

    rounds[Number(round_id)].n_1 * rounds[Number(round_id)].n_2;
}


if (rounds[Number(round_id)].success == null) {

    let seconds = 23;
    let timer = setInterval(function() {
        document.getElementById("time")
        .innerText = seconds

        if (seconds === 0) {
          clearInterval(timer); // Stop the timer
          rounds[Number(round_id)].success = false
                window.localStorage.setItem("rounds2", JSON.stringify(rounds));
                window.location.reload();    }

        seconds--;
      }, 1000);
}

let n_o = 0;
for (let i = 0; i < rounds.length; i++) {
    if (rounds[i].success == null) n_o++;
}

if (n_o == 0) {
    window.location.href = "bye2.html"
}

