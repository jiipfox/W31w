import "./styles.css";

if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}

function initializeCode() {
  //document.getElementById("app").innerHTML = "<h1>Holoa!</h1>";
  addElement("H1", "Para1");
  addElement("H2", "Para2");
  addElement("H3", "Para3");
}

function addElement(h1t, pt, imgsrc) {
  const newDiv = document.createElement("div");
  newDiv.setAttribute("class", "wiki-item");

  const header = document.createElement("h1");
  header.setAttribute("class", "wiki-header");
  header.textContent = h1t;

  const para = document.createElement("P");
  para.setAttribute("class", "wiki-text");
  para.textContent = pt;

  const img = document.createElement("img");
  img.setAttribute("class", "wiki-img");
  img.src = imgsrc;

  newDiv.appendChild(header);
  newDiv.appendChild(para);
  newDiv.appendChild(img);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("container");
  document.body.insertBefore(newDiv, currentDiv);
}
/**
  <div class="" >
  <h1 class="wiki-header">Breed X</h1>
  <div class="wiki-content">
    <p class="wiki-text">
      Some text about this breed.
    </p>
    <div class="img-container">
      <img class="wiki-img" src="">
    </div>
  </div>
</div> 
*/
