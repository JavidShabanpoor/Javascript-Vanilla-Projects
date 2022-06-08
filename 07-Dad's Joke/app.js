const jokeWrapper = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", jokeGenerator);

jokeGenerator();

//!USING .THEN
// function jokeGenerator() {
//     const config = {
//         headers: {
//             Accept: "application/json",
//         },
//     };

//     fetch("https://icanhazdadjoke.com", config)
//         .then((res) => res.json())
//         .then((data) => {
//             jokeWrapper.innerText = data.joke;
//         });
// }

//!USING ASYNC/AWAIT
async function jokeGenerator() {
    const config = {
        headers: {
            Accept: "application/json",
        },
    };

    const res = await fetch("https://icanhazdadjoke.com", config);

    const data = await res.json();

    jokeWrapper.innerText = data.joke;
}
