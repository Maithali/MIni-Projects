const containerE1 = document.querySelector(".container");

const careers = [ "Youtuber", "Web Developer", "Freelancer", "Blockchain Developer", "Crypto Expert", "Blogger"];

let careerIndex = 0;

let characterIndex = 0;
updateText();

function updateText() {
        characterIndex++;
    containerE1.innerHTML = `
        <h1>I am a ${careers[careerIndex].slice(0,characterIndex)}</h1>
 `;
 if(characterIndex === careers[careerIndex].length){
    careerIndex++;
    characterIndex = 0;
 }
if(careerIndex === careerIndex.length){
    careerIndex = 0;
 }
 setTimeout(updateText, 150);
    
}

