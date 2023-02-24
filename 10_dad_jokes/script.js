const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

// ASOLUTION USING async/await

async function generateJoke() {
  const config = {
    headers: {
      Accept: "Application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com", config);

  const data = await res.json();

  jokeEl.innerHTML = data.joke;
}

// ALTERNATIVE SOLUTION USING .then()

// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: "Application/json",
//     },
//   };

//   fetch("https://icanhazdadjoke.com", config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke;
//     });
// }
