//challenge//
const challenge = document.querySelector(".challengebox");

function evenNumbers() {
    for (let i = 1; i < 100; i++) {
        if (i % 2 === 0) {
            let span = document.createElement("span");
            span.innerText = " " + i + " ";
            challenge.appendChild(span);
            span.style.lineHeight = i * 2 + "px";
            span.style.height = "100px";
            span.style.marginRight = "5px";
            span.style.color = "white";
            span.style.fontSize = "19px";
            span.style.fontWeight = "bold";
        }
    }
}
function dot() {
    for (i = 0; i <= 4; i++) {
        let dot = document.createElement("div");

        challenge.appendChild(dot);
        let height = dot.style.height = "50px";
        let width = dot.style.width = "50px";
        dot.style.borderRadius = "50%";
        dot.style.backgroundColor = "white";
        dot.style.position = "absolute";
        dot.style.marginTop = "70px";
        console.log(`${"dot:nth-child(3)"}`);

        dot.addEventListener("click", function ripple() {
            dot.style.position = "absolute";
            dot.style.animation = "ripple 5s infinite";
            dot.style.borderRadius = "100%";
            dot.style.border = "none";
            dot.style.boxShadow = "inset 10px 10px 20px #a5a7a9, inset -10px -10px 20px black";
            dot.style.transition = "0.33s ease-in all";
            dot.style.opacity = "0.5";
        })
    }
}


dot();
evenNumbers()

//styling//
challenge.style.backgroundImage = "url(../img/challenge.jpg)";
challenge.style.color = "black";
challenge.style.borderColor = "black";
challenge.style.display = "flex";

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




