import "./styles.css";

window.addEventListener(
  "DOMContentLoaded",
  changeBackgroundColor("Contenido cargado"),
  true
);

function changeBackgroundColor(objet) {
  document.body.style.backgroundColor = "blue";
  console.log(objet);
}

// Function to change the content of t2
function modifyText() {
  setTimeout(function () {
    var t1 = document.getElementById("t1");
    var t2 = document.getElementById("t2");
    t1.firstChild.nodeValue = "three";
    t2.firstChild.nodeValue = "four";
    document.body.style.backgroundColor = "red";
    console.log("::Iniciando:: ");
  }, 5000);
}

// Function to add event listener to t
function load() {
  var tabla = document.getElementById("t");
  tabla.addEventListener("click", modifyText(), true);
  /* var theBody = document.getElementsByClassName("the-body");
  theBody.addEventListener("click", modifyText(), false); */
}

document.addEventListener("DOMContentLoaded", load(), true);

/* setTimeout(showText(), 5000);

function showText(data) {
  document.getElementById("app").innerHTML = `
    <h1>Hello Vanilla!</h1>
    <div>
    We use the same configuration as Parcel to bundle this sandbox, you can find more
    info about Parcel 
    <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
    </div>
  `;
  return data;
}
 */
