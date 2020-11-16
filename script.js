
const condition  = document.getElementsByClassName("info")[0];
const gambar = document.getElementsByClassName("user");
const info = document.getElementsByClassName("info")[0];
const gambarKomputer = document.querySelector(".img-komputer")
var userInput = undefined;
var komputer = undefined;

for (let gmbar of gambar){
  gmbar.addEventListener("click", function(){
    userInput = gmbar.classList[1];
    setKomputer();
    putar();
    setTimeout(function(){
      gambarKomputer.setAttribute("src", "img/"+komputer+".png");
      info.innerText = kalahMenang();
    }, 1900);

  });
}

function kalahMenang(){
  if (userInput == komputer){
    return "Seri"
  }
  if (userInput == "gajah"){
    return (komputer == "orang") ? "Anda Menang" : "Anda Kalah";
  }
  if (userInput == "orang"){
    return (komputer == "semut") ? " Anda Menang" : "Anda Kalah";
  }
  if (userInput == "semut"){
    return (komputer == "gajah") ? "Anda Menang" : "Anda Kalah";
  }
}

function putar(){
  const start = new Date().getTime();
  let gambar2 = ["gajah","orang","semut"]
  let i = 0;
  setInterval(function(){
    if((new Date().getTime() - start) >= 1800){
      clearInterval;
      return;
    }
    gambarKomputer.setAttribute("src", "img/"+gambar2[i]+".png");
    i++;
    if(gambar2.length == i) i =0;

  }, 200);

}

function setKomputer(){
  rand = Math.random();
  if (rand < 0.34){
    komputer = "gajah";
  }
  else if (rand >= 0.34 && rand < 0.67) {
    komputer = "orang";
  }
  else{
    komputer = "semut";
  }
}

function setGambar(){

}
