const randomBtn = document.getElementById("random-btn");
const chooseBtn = document.getElementById("choose-btn");
const backBtn = document.getElementById("back-btn");
const pickBtn = document.getElementById("pick-btn");
const cuisineGrid = document.getElementById("cuisine-grid");

function getRandomItem(list) {
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
}

function createCuisineGrid() {
    cuisineGrid.textContent = "";
    cuisines.forEach(cuisine => {
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = cuisine;
        button.addEventListener("click", () => {
            button.classList.toggle("selected");
        });
        cuisineGrid.appendChild(button);
    });
}

function getSelectedCuisines() {
    return Array.from(cuisineGrid.querySelectorAll(".selected")).map(btn => btn.textContent);
}

randomBtn.addEventListener("click", () => {
    showResult(result, "You should try ", getRandomItem(cuisines), " cuisine!");
});

chooseBtn.addEventListener("click", () => {
    createCuisineGrid();
    showScreen("choose");
});

backBtn.addEventListener("click", () => {
    result.textContent = "";
    chooseResult.textContent = "";
    showScreen("home");
});

pickBtn.addEventListener("click", () => {
    const selectedCuisines = getSelectedCuisines();
    if (selectedCuisines.length === 0) {
        chooseResult.textContent = "You didn't select any cuisines!";
    } else if (selectedCuisines.length === 1) {
        showResult(chooseResult, "You only selected ", selectedCuisines[0], " cuisine!");
    } else {
        showResult(chooseResult, "We have chosen ", getRandomItem(selectedCuisines), " cuisine for you!");
    }
});
