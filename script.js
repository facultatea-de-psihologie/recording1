const button = document.querySelector("button");
const isButtonDisabled = localStorage.getItem("buttonDisabled");

if(isButtonDisabled){
    button.disabled = "true";
}

button.addEventListener("click", () =>{
    const audio = new Audio("./audio/words1.mp3");
    audio.play();
    button.disabled = "true";

    localStorage.setItem("buttonDisabled", true);
    
})







