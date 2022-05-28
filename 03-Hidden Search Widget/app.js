const searchBar = document.querySelector(".search");
const searchBtn = document.querySelector(".btn");
const searchInput = document.querySelector(".input");
searchBtn.addEventListener("click", () => {
    searchBar.classList.toggle("active");
    searchInput.focus();
});
