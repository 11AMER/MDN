let myImage = document.querySelector("img");

myImage.onclick = () => {
  if (myImage.getAttribute("src") === "images/firefox-icon1.png")
    myImage.setAttribute("src", "images/firefox-icon2.png");
  else myImage.setAttribute("src", "images/firefox-icon1.png");
};

let userName = document.querySelector("span");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (myName) {
    localStorage.setItem("name", myName);
    userName.textContent = `, ${myName}`;  
  } else setUserName();
}

const storedName = localStorage.getItem("name");
storedName ? userName.textContent = `, ${storedName}` : setUserName();

document.querySelector("button").onclick = setUserName;