const listNumbers = document.querySelector(".rating__numbers");
const numbers = document.querySelectorAll("li");
let selected = "";

listNumbers.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        numbers.forEach((number) => {
            number.classList.remove("active");
        })

        e.target.classList.add("active");
        selected = e.target.textContent
    }
})


const button = document.querySelector(".rating__button");
const containerRating = document.querySelector(".rating");
const containerResult = document.querySelector(".result");
const selectedResult = document.querySelector(".result__selected");

button.addEventListener("click", () => {
    if (selected === "") {
        alert("Please select a score");
    } else {
        containerRating.classList.add("hidden");
        containerResult.classList.remove("hidden");
        selectedResult.textContent = `You selected ${selected} out of 5`
    }

})