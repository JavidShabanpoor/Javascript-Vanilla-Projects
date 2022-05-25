const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circle = document.querySelectorAll(".circle");

let currentCircle = 1;

next.addEventListener("click", () => {
    currentCircle++;
    if (currentCircle > circle.length) {
        currentCircle = circle.length;
    }

    update();
});

prev.addEventListener("click", () => {
    currentCircle--;
    if (currentCircle < 1) {
        currentCircle = 1;
    }

    update();
});

function update() {
    circle.forEach((circle, index) => {
        if (index < currentCircle) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    });

    const active = document.querySelectorAll(".active");

    progress.style.width =
        ((active.length - 1) / (circle.length - 1)) * 100 + "%";

    if (active.length === circle.length) {
        next.disabled = true;
    } else if (active.length === 1) {
        prev.disabled = true;
    } else {
        next.disabled = false;
        prev.disabled = false;
    }
}
