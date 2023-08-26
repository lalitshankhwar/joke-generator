let button = document.getElementById("button");
let loader = document.getElementById("loader");
let joke = document.querySelector(".joke span");

// onclick handler to handle get a joke button
button.addEventListener('click', () => {
  fetchJoke();
}); 

//function to fetch joke
const fetchJoke = async () => {
  joke.innerHTML = "";
  loader.classList.remove("hidden");
  try {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });
    const data = await response.json();
    loader.classList.add("hidden");
    joke.innerHTML = data.joke;
  } catch (error) {
    loader.classList.add("hidden");
    joke.innerHTML = "Something went wrong!";
  }
};
