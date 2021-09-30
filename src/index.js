import "./styles.css";

if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}

async function initializeCode() {
  const addr = "https://dog.ceo/api/breed/haukku/images/random";
  const summAddr = "https://en.wikipedia.org/api/rest_v1/page/summary/";

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

  let summary = await getDogeSummary(b1, summAddr);
  let dogJson = await whoLetTheDogsOut(b1Addr);
  let srcOfImg = parseImgSrc(dogJson);
  addElement(b1, summary, srcOfImg);

  summary = await getDogeSummary(b2, summAddr);
  dogJson = await whoLetTheDogsOut(b2Addr);
  srcOfImg = parseImgSrc(dogJson);
  addElement(b2, summary, srcOfImg);

  summary = await getDogeSummary(b3, summAddr);
  dogJson = await whoLetTheDogsOut(b3Addr);
  srcOfImg = parseImgSrc(dogJson);
  addElement(b3, summary, srcOfImg);

  summary = await getDogeSummary(b4, summAddr);
  dogJson = await whoLetTheDogsOut(b4Addr);
  srcOfImg = parseImgSrc(dogJson);
  addElement(b4, summary, srcOfImg);

  summary = await getDogeSummary(b5, summAddr);
  dogJson = await whoLetTheDogsOut(b5Addr);
  srcOfImg = parseImgSrc(dogJson);
  addElement(b5, summary, srcOfImg);
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

async function getDogeSummary(breed, addr) {
  let summary = "jes";
  let url = addr + breed;
  let jsonMsg = await fetch(url);
  summary = await jsonMsg.json();
  summary = summary.extract;
  return summary;
}

function parseImgSrc(givenJson) {
  let imgSrc = givenJson.message;
  return imgSrc;
}

function createSuperAddress(addr, breed) {
  let addrr = addr.replace("haukku", breed.toLowerCase());
  return addrr;
}
