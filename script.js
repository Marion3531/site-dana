// document.addEventListener("DOMContentLoaded", () => { });
const originalImagePaths = [
  "../images/2.png",
  "../images/affiche-complete2.png",
  "../images/Capture d’écran 2023-06-23 à 19.01.24.png",
  "../images/carré.png",
  "../images/CARROUSSEL2.png",
  "../images/débat.png",
  "../images/fiction.png",
  // "./images/flou_0002_4.png",
  // "./images/flou_0003_3.png",
  // "./images/flou_0004_2.png",
  // "./images/flou_0005_1.png",
  // "./images/flou_0006_Calque-0.png",
  // "./images/Illustration_finale.png",
  // "./images/Illustration_sans_titre2_nomaison.png",
  // "./images/IMG_2270f.png",
  // "./images/IMG_2285a.png",
  // "./images/IMG_2285b.png",
  // "./images/img1.png",
  // "./images/img2.jpeg",
  // "./images/img3.png",
  // "./images/LOGO1-D.png",
  // "./images/LOGO2-A.png",
  // "./images/LOGO3-D.png",
  // "./images/logo-noir.png",
  // "./images/logotype-noir.png",
  // "./images/monogramme-noir.png",
  // "./images/P1011659.jpeg",
  // "./images/post-gen.png",
  // "./images/post-jeudi.png",
  // "./images/post-samedi.png",
  // "./images/post-soirée.png",
  // "./images/post-vendredi.png",
  // "./images/ptva.png",
  // "./images/ptva2.png",
  // "./images/ptva3.png",
  // "./images/ptva4.png",
  // "./images/SMOL_POSTER-ATLAS_JOUR.png",
  // "./images/SMOL_POSTER-ATLAS_NUIT.png",
  // "./images/témoignage.png",
  // "./images/visuel-podcast.png",
];

function getDescriptionForImage(imagePath) {
  const imageDescriptions = { //asso key-value image-description
    "../images/2.png": "Description de l'image 2",
    "../images/affiche-complete2.png": "Description de l'affiche",
    "../images/Capture d’écran 2023-06-23 à 19.01.24.png":
      "Description de la capture d'écran",
    "../images/carré.png": "blablabla",
    "../images/CARROUSSEL2.png": "coucou",
    "../images/débat.png": "helloooooooooo",
    "../images/fiction.png": "ça va ?",
    // ... Ajoutez d'autres descriptions ici
  };

  return imageDescriptions[imagePath] || "Description par défaut";
}

let imagePaths = [...originalImagePaths];

const maxDisplayedImages = 3;
const displayedImages = [];

document.addEventListener("click", (event) => {
  if (!event.target.classList.contains("display")) {
    return; // Si le clic n'est pas dans le cadre "display", ne rien faire
  }

  // si tableau vide, réinitialiser avec valeurs du tableau d'origine
  if (imagePaths.length === 0) {
    imagePaths = [...originalImagePaths];
  }

  //
  const randomImageIndex = Math.floor(Math.random() * imagePaths.length);
  const randomImagePath = imagePaths[randomImageIndex];

  const image = new Image();
  image.src = randomImagePath;
  image.style.position = "absolute";
  //image.style.zIndex = "-1"; // Empilement en arrière-plan
  image.dataset.description = getDescriptionForImage(randomImagePath);

  image.onload = () => {

    // ajustement taille image
    const maxWidth = 350; 
    const maxHeight = 250;
    const aspectRatio = image.width / image.height;

    if (image.width > maxWidth) {
      image.width = maxWidth;
      image.height = maxWidth / aspectRatio;
    }

    if (image.height > maxHeight) {
      image.height = maxHeight;
      image.width = maxHeight * aspectRatio;
    }

    //centrer image au clic de souris
    const x = event.clientX - image.width / 2;
    const y = event.clientY - image.height / 2;
    image.style.left = `${x}px`;
    image.style.top = `${y}px`;

    const displayContainer = document.querySelector(".display");
    displayContainer.appendChild(image);

    displayedImages.push(image);
    if (displayedImages.length > maxDisplayedImages) {
      const firstImage = displayedImages.shift();
      firstImage.classList.add("fade-out");
      firstImage.addEventListener("transitionend", () => {
        firstImage.remove();
      });
    }

    imagePaths.splice(randomImageIndex, 1);

  };
});

