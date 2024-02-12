function displayPoem(response) {
  console.log("poem generated");

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 40,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  // let poemElement = document.querySelector("#poem");
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "01c14dcf0dc6te3ab9c3fo9f900f34e9";

  let context =
    "You are a devouted christian and love God with all your life. Your mission to to generate 4 lines poem in basic HTML and seperate each line with a <br/>. Make sure to follow the user instructions. Do not include a title. Sign the poem with <strong>SheCodes AI</strong> always at the end of the poem.";
  let prompt = `User instructions: Generate a catholic poem dedicated to God about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  console.log("Generating Poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
