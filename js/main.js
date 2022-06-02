const challenge = document.querySelector(".challengebox");
function evenNumbers() {
    for (let i = 1; i < 100; i++) {
        if (i % 2 === 0) {
            let span = document.createElement("span");
            span.innerText = " " + i + " ";
            challenge.appendChild(span);
            span.style.lineHeight = i * 2 + "px";
            span.style.height= "100px";
            span.style.marginRight = "5px";
        }
    }
}
evenNumbers()
const challengeBox = document.querySelector(".challengebox");
challengeBox.style.background = "white";
challengeBox.style.color = "black";
challengeBox.style.borderColor = "black";
challengeBox.style.display= "flex";

const header = document.getElementById("top");
header.style.backgroundColor = "black";
header.style.color = "white";
header.style.fontSize = "30px";

const description = document.querySelector(".description");
description.style.color = "black";

const img = document.querySelector("img");
img.style.borderColor = "black";
img.style.borderRadius = "0px";
img.addEventListener("mouseover", () => {
    img.style.transform = "rotate(360deg)";
});


const funFacts = document.querySelector(".funfacts");
funFacts.style.backgroundColor = "black";
funFacts.style.color = "white";
funFacts.style.border = "black";

const td = document.querySelectorAll("td");
td.forEach((tile) => {
    tile.style.borderColor = "white";
})
td[1].innerText = "Green";
td[3].innerText = "Monkey";
td[5].innerText = "Aqua-spinning";
td[7].innerText = "Speedy Gonzales";
td[9].innerText = "Not really a favorite";

const table = document.querySelector("table");
table.style.border = "white";
table.style.backgroundColor = "black";

const body = document.querySelector("body");
body.style.color = "white";
body.style.backgroundColor = "green";
body.style.backgroundImage = "none";

const footer = document.querySelector("footer");
footer.style.backgroundColor = "black";
footer.style.color = "white";

const challengeText = document.querySelector(".challenge");
challengeText.style.color = "white";




