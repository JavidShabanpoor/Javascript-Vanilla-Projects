const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBox);

checkBox();

function checkBox() {
    const trigger = (window.innerHeight / 5) * 4;
    boxes.forEach((box) => {
        const topBox = box.getBoundingClientRect().top;

        if (topBox < trigger) {
            box.classList.add("show");
        } else {
            box.classList.remove("show");
        }
    });
}
