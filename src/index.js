import "./styles.css";

if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}

async function initializeCode() {
  //document.getElementById("app").innerHTML = "<h1>Holoa!</h1>";
  const addr = "https://dog.ceo/api/breed/haukku/images/random";
  const b1 = "Hound";
  const b2 = "Puggle";
  const b3 = "Retriever";
  const b4 = "Shiba";
  const b5 = "Terrier";

  let b1Addr = createSuperAddress(addr, b1);
  let b2Addr = createSuperAddress(addr, b2);
  let b3Addr = createSuperAddress(addr, b3);
  let b4Addr = createSuperAddress(addr, b4);
  let b5Addr = createSuperAddress(addr, b5);

  let dogJson = await whoLetTheDogsOut(b1Addr);
  let srcOfImg = parseImgSrc(dogJson);
  addElement(b1, "Para1", srcOfImg);

  dogJson = await whoLetTheDogsOut(b2Addr);
  srcOfImg = parseImgSrc(dogJson);
  addElement(b2, "Para2", srcOfImg);

  dogJson = await whoLetTheDogsOut(b3Addr);
  srcOfImg = parseImgSrc(dogJson);
  addElement(b3, "Para3", srcOfImg);

  dogJson = await whoLetTheDogsOut(b4Addr);
  srcOfImg = parseImgSrc(dogJson);
  addElement(b4, "Para4", srcOfImg);

  dogJson = await whoLetTheDogsOut(b5Addr);
  srcOfImg = parseImgSrc(dogJson);
  addElement(b5, "Para5", srcOfImg);
}

function addElement(h1t, pt, imgsrc) {
  const newDiv = document.createElement("div");
  const contentDiv = document.createElement("div");
  const imgContDiv = document.createElement("div");

  newDiv.setAttribute("class", "wiki-item");
  contentDiv.setAttribute("class", "wiki-content");
  imgContDiv.setAttribute("class", "img-container");

  // Header
  const header = document.createElement("h1");
  header.setAttribute("class", "wiki-header");
  header.textContent = h1t;

  // Contents (p + img)
  const para = document.createElement("P");
  para.setAttribute("class", "wiki-text");
  para.textContent = pt;

  const img = document.createElement("img");
  img.setAttribute("class", "wiki-img");
  img.src = imgsrc;

  // Append to divs
  contentDiv.appendChild(para);
  imgContDiv.appendChild(img);
  contentDiv.appendChild(imgContDiv);

  // and to main div
  newDiv.appendChild(header);
  newDiv.appendChild(contentDiv);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("container");
  currentDiv.appendChild(newDiv);
}

async function whoLetTheDogsOut(addr) {
  let response = await fetch(addr);
  let dogs = await response.json();
  return dogs;
}

function parseImgSrc(givenJson) {
  let imgSrc = givenJson.message;
  return imgSrc;
}

function createSuperAddress(addr, breed) {
  let addrr = addr.replace("haukku", breed.toLowerCase());
  return addrr;
}
