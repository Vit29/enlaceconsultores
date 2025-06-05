const menu = document.getElementById("open-menu");
const inputCard = document.getElementById("input-card");
const inputCardConsejo = document.getElementById("input-card-consejo");
const inputCardServices = document.getElementById("input-card-services");
const sectionNosotros = document.getElementById("quienes-somos");
const sectionImgMuestra = document.getElementById("img-muestra");
const sectionNustrosServicios = document.getElementById("nuestros-servicios");
const sectionVideoInfo = document.getElementById("video-info");
const sectionContact = document.getElementById("contac");

let more = document.querySelectorAll(".more");
const sizeMobile = 766;

function handleResponsiveVideo() {
  if (!sectionVideoInfo) return;
  sectionVideoInfo.innerHTML = "";

  const video = document.createElement("video");
  video.className = "size";
  video.controls = true;
  video.autoplay = true;
  video.muted = true;
  video.playsInline = true;

  video.src =
    window.innerWidth > sizeMobile
      ? "./video/promo-video-pc.mp4"
      : "./video/promo-video-mobile.mp4";

  sectionVideoInfo.appendChild(video);
}

// BOTON MENU
menu.addEventListener("click", () => {
  document.getElementById("header-toggle").classList.toggle("active");
});

// INPUTS-CARDS ABRIR Y CERAR / TEXTO NO HIDDEN**********
inputCardServices.addEventListener("click", () => {
  document
    .getElementById("span-card-input-services")
    .classList.toggle("span-hidden");
  document.getElementById("list-services").classList.toggle("input-open-card");
});

inputCard.addEventListener("click", () => {
  document
    .getElementById("span-card-input-nosotros")
    .classList.toggle("span-hidden");
  document
    .getElementById("confia-en-nosotros")
    .classList.toggle("input-open-card");
});

inputCardConsejo.addEventListener("click", () => {
  document
    .getElementById("span-card-input-consejo")
    .classList.toggle("span-hidden");
  document.getElementById("un-consejo").classList.toggle("input-open-card");
});

// BOTOM CAMBIO DE COLOR / CAMBIAR TEXTO ********
for (let i = 0; i < more.length; i++) {
  more[i].addEventListener("click", function () {
    more[i].classList.toggle("more-bg");
    more[i].classList.toggle("active_card");
  });
}

const sizeHeight = window.innerHeight;
const sizeWidth = window.innerWidth;

window.addEventListener("scroll", () => {
  const section = Math.round(scrollY / sizeHeight);

  if (section == 1) sectionNosotros.classList.add("show");
  if (section == 2) sectionImgMuestra.classList.add("show");
  if (section == 3) sectionNustrosServicios.classList.add("show");
  if (section == 4) sectionVideoInfo.classList.add("show");
  if (section == 5) sectionContact.classList.add("show");
});

handleResponsiveVideo();
