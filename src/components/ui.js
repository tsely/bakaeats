const screens = document.querySelectorAll(".screen");
const result = document.getElementById("result");
const chooseResult = document.getElementById("choose-result");

function showScreen(screenId) {
    screens.forEach((section) => {
        section.classList.toggle("hidden", section.id !== screenId);
    });
}

function showResult(element, before, cuisine, after) {
    element.textContent = "";
    const span = document.createElement("span");
    span.textContent = cuisine;
    span.classList.add("cuisine-name");
    element.append(before, span, after);
}
