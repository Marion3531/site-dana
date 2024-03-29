// document.addEventListener("DOMContentLoaded", () => { });
const originalImagePaths = [
  //VRAC SANS DESCRIPTION
  "../images/ok.png",
  "../images/2.png",
  "../images/D1pe0me 6.png",
  "../images/FOND_ MEM 7.png",
  "../images/IMG_2219.PNG",
  //ATLAS OBSCURA
  "../images/12.png",
  "../images/atlas-obscura.1.png",
  "../images/atlas-obscura.2.png",
  "../images/atlas-obscura.3.png",
  "../images/Capture d’écran 2023-06-23 à 19.01.24.png",
  "../images/carré.png",
  "../images/img2.jpeg",
  "../images/img3.png",
  "../images/P1011659.jpeg",
  "../images/SMOL_POSTER-ATLAS_JOUR.png",
  "../images/SMOL_POSTER-ATLAS_NUIT.png",
  //KIDSCORE
  "../images/kidscore.jpeg",
  "../images/kidscore2.jpg",
  //EL HOUB
  "../images/gif/el-houb.gif",
  "../images/gif/el-houb2.gif",
  //PETIT BAIN Manifesto
  "../images/post-soirée.png",
  //Vjing Tentacular
  "../images/gif/boys.gif",
  "../images/gif/velo.gif",
  //Photos tentacular
  "../images/tentacular1.png",
  "../images/tentacular2.png",
  "../images/tentacular3.png",
  //Archives départementales de l’Aude
  "../images/marquepage.JPG",
  "../images/marquepage-femme1.PNG",
  "../images/marquepage-femme2.png",
  //HARDCOEUR
  "../images/affiche-complete2.png",
  "../images/CARROUSSEL2.png",
  "../images/Illustration_sans_titre2_nomaison.png",
  "../images/img1.png",
  //Gen Z
  "../images/LOGO1-D.png",
  "../images/LOGO3-D.png",
  //Never not raving
  "../images/post-gen.png",
  "../images/post-jeudi.png",
  "../images/post-vendredi.png",
  "../images/post-samedi.png",
  //Lesbiennes au coin du feu
  "../images/Illustration_finale.png",
  "../images/visuel-podcast.png",
  //Vjing Alexi Shell
  "../images/vj_08-06_1.png",
  "../images/gif/vj_08-06_2.gif",
  "../images/gif/vj_08-06_3.gif",
  "../images/vj_08-06_4.png",
  //Single SHA
  "../images/sha.jpg",
  //MIDJOURNEY
  "../images/midjourney1.png",
  "../images/midjourney2.png",
  "../images/midjourney3.png",
  "../images/midjourney4.png",
  //PARACOSMOS
  "../images/IMG_2270f.png",
  "../images/IMG_2285a.png",
  "../images/IMG_2285b.png",
  "../images/logo-noir.png",
  "../images/monogramme-noir.png",
  //Manifesto XXI
  "../images/flou_0002_4.png",
  "../images/flou_0004_2.png",
  "../images/flou_0005_1.png",
  "../images/flou_0006_Calque-0.png",
  //photo argentique
  "../images/NB1.jpg",
  "../images/NB2.jpg",
  "../images/NB3.JPG",
  //TouchDesigner
  "../images/gif/TDMovieOut.2.gif",
  //PTVA
  "../images/ptva.png",
  "../images/ptva2.png",
  "../images/ptva3.png",
  "../images/ptva4.png",
  //SCARF
  "../images/scarf1.png",
  "../images/scarf2.png",
];

function getDescriptionForImage(imagePath) {
  const imageDescriptions = {
    //asso key-value image-description

    //identité visuelle de l’exposition Atlas Obscura au 6B, février 2022
    "../images/Capture d’écran 2023-06-23 à 19.01.24.png":
      "identité visuelle de l’exposition Atlas Obscura au 6B, février 2022",
    "../images/carré.png":
      "identité visuelle de l’exposition Atlas Obscura au 6B, février 2022",
    "../images/img2.jpeg":
      "identité visuelle de l’exposition Atlas Obscura au 6B, février 2022",
    "../images/img3.png":
      "identité visuelle de l’exposition Atlas Obscura au 6B, février 2022",
    "../images/P1011659.jpeg":
      "identité visuelle de l’exposition Atlas Obscura au 6B, février 2022",
    "../images/SMOL_POSTER-ATLAS_JOUR.png":
      "identité visuelle de l’exposition Atlas Obscura au 6B, février 2022",
    "../images/SMOL_POSTER-ATLAS_NUIT.png":
      "identité visuelle de l’exposition Atlas Obscura au 6B, février 2022",
    "../images/atlas-obscura.1.png":
      "identité visuelle de l’exposition Atlas Obscura au 6B, février 2022",
    "../images/atlas-obscura.2.png":
      "identité visuelle de l’exposition Atlas Obscura au 6B, février 2022",
    "../images/atlas-obscura.3.png":
      "identité visuelle de l’exposition Atlas Obscura au 6B, février 2022",
    "../images/12.png":
      "identité visuelle de l’exposition Atlas Obscura au 6B, février 2022",

    //couverture de l’album ‘kidscore’ de Talita Otović, 2022
    "../images/kidscore.jpeg":
      "couverture de l’album ‘kidscore’ de Talita Otović, 2022",
    "../images/kidscore2.jpg":
      "couverture de l’album ‘kidscore’ de Talita Otović, 2022",

    //logo animé pour El Houb, 2023
    "../images/gif/el-houb.gif": "logo animé pour El Houb, 2023",
    "../images/gif/el-houb2.gif": "logo animé pour El Houb, 2023",

    //vjing pour la soirée ‘Tentacular’ au Point Éphémère, 2022
    "../images/gif/boys.gif":
      "vjing pour la soirée ‘Tentacular’ au Point Éphémère, 2022",
    "../images/gif/velo.gif":
      "vjing pour la soirée ‘Tentacular’ au Point Éphémère, 2022",

    //expérimentations vidéo sur TouchDesigner, 2023
    "../images/gif/TDMovieOut.2.gif":
      "expérimentations vidéo sur TouchDesigner, 2023",

    //identité visuelle du festival ‘Hardcoeur’, 2023
    "../images/affiche-complete2.png":
      "identité visuelle du festival ‘Hardcoeur’, 2023",
    "../images/CARROUSSEL2.png":
      "identité visuelle du festival ‘Hardcoeur’, 2023",
    "../images/Illustration_sans_titre2_nomaison.png":
      "identité visuelle du festival ‘Hardcoeur’, 2023",
    "../images/img1.png": "identité visuelle du festival ‘Hardcoeur’, 2023",

    //visuel pour la soirée organisée par Manifesto XXI au Petit Bain, 2023
    "../images/post-soirée.png":
      "visuel pour la soirée organisée par Manifesto XXI au Petit Bain, 2023",

    //identité visuelle du festival ‘Never not raving’ curaté par Jennifer Cardini au Badaboum
    "../images/post-gen.png":
      "identité visuelle du festival ‘Never not raving’ curaté par Jennifer Cardini au Badaboum",
    "../images/post-jeudi.png":
      "identité visuelle du festival ‘Never not raving’ curaté par Jennifer Cardini au Badaboum",
    "../images/post-samedi.png":
      "identité visuelle du festival ‘Never not raving’ curaté par Jennifer Cardini au Badaboum",
    "../images/post-vendredi.png":
      "identité visuelle du festival ‘Never not raving’ curaté par Jennifer Cardini au Badaboum",

    //identité visuelle du collectif ‘Paracosmos’, 2023
    "../images/IMG_2270f.png":
      "identité visuelle du collectif ‘Paracosmos’, 2023",
    "../images/IMG_2285a.png":
      "identité visuelle du collectif ‘Paracosmos’, 2023",
    "../images/IMG_2285b.png":
      "identité visuelle du collectif ‘Paracosmos’, 2023",
    "../images/logo-noir.png":
      "identité visuelle du collectif ‘Paracosmos’, 2023",
    "../images/monogramme-noir.png":
      "identité visuelle du collectif ‘Paracosmos’, 2023",

    //illustrations et identité visuelle du podcast ‘Lesbiennes au coin du feu’, 2022
    "../images/Illustration_finale.png":
      "illustrations et identité visuelle du podcast ‘Lesbiennes au coin du feu’, 2022",
    "../images/visuel-podcast.png":
      "illustrations et identité visuelle du podcast ‘Lesbiennes au coin du feu’, 2022",

    //fonds réalisés pour l’identité visuelle de Manifesto XXI
    "../images/flou_0002_4.png":
      "fonds réalisés pour l’identité visuelle de Manifesto XXI",
    "../images/flou_0004_2.png":
      "fonds réalisés pour l’identité visuelle de Manifesto XXI",
    "../images/flou_0005_1.png":
      "fonds réalisés pour l’identité visuelle de Manifesto XXI",
    "../images/flou_0006_Calque-0.png":
      "fonds réalisés pour l’identité visuelle de Manifesto XXI",

    //visuels et logo pour le podcast GenZ Dialogues de Cartier, 2022
    "../images/LOGO1-D.png":
      "visuels et logo pour le podcast GenZ Dialogues de Cartier, 2022",
    "../images/LOGO3-D.png":
      "visuels et logo pour le podcast GenZ Dialogues de Cartier, 2022",

    //posts instagram réalisés pour le podcast ‘Paye ta vie d’artiste’, 2023
    "../images/ptva.png":
      "posts instagram réalisés pour le podcast ‘Paye ta vie d’artiste’, 2023",
    "../images/ptva2.png":
      "posts instagram réalisés pour le podcast ‘Paye ta vie d’artiste’, 2023",
    "../images/ptva3.png":
      "posts instagram réalisés pour le podcast ‘Paye ta vie d’artiste’, 2023",
    "../images/ptva4.png":
      "posts instagram réalisés pour le podcast ‘Paye ta vie d’artiste’, 2023",

    //série photo argentique, été 2022
    "../images/NB1.jpg": "série photo argentique, été 2022",
    "../images/NB2.jpg": "série photo argentique, été 2022",
    "../images/NB3.JPG": "série photo argentique, été 2022",

    //série photo argentique, procédé chimique d’altération de l’image, 2021
    "../images/tentacular1.png":
      "série photo argentique, procédé chimique d’altération de l’image, 2021",
    "../images/tentacular2.png":
      "série photo argentique, procédé chimique d’altération de l’image, 2021",
    "../images/tentacular3.png":
      "série photo argentique, procédé chimique d’altération de l’image, 2021",

    //série d’images réalisées avec une intelligence artificielle, 2023
    "../images/midjourney1.png":
      "série d’images réalisées avec une intelligence artificielle, 2023",
    "../images/midjourney2.png":
      "série d’images réalisées avec une intelligence artificielle, 2023",
    "../images/midjourney3.png":
      "série d’images réalisées avec une intelligence artificielle, 2023",
    "../images/midjourney4.png":
      "série d’images réalisées avec une intelligence artificielle, 2023",

    //écharpe designée et mise à la vente sur mon site web, 2022
    "../images/scarf1.png":
      "écharpe designée et mise à la vente sur mon site web, 2022",
    "../images/scarf2.png":
      "écharpe designée et mise à la vente sur mon site web, 2022",

    //couverture de single pour s.h.a, 2023
    "../images/sha.jpg": "couverture de single pour s.h.a, 2023",

    //identité visuelle des archives départementales de l’Aude, images d’archives, 2022
    "../images/marquepage.JPG":
      "identité visuelle des archives départementales de l’Aude, images d’archives, 2022",
    "../images/marquepage-femme1.PNG":
      "identité visuelle des archives départementales de l’Aude, images d’archives, 2022",
    "../images/marquepage-femme2.png":
      "identité visuelle des archives départementales de l’Aude, images d’archives, 2022",

    //performance vjing live avec Alexi Shell à la Cité de l’Agriculture, 2023
    "../images/gif/vj_08-06_1.png":
      "performance vjing live avec Alexi Shell à la Cité de l’Agriculture, 2023",
    "../images/gif/vj_08-06_2.gif":
      "performance vjing live avec Alexi Shell à la Cité de l’Agriculture, 2023",
    "../images/gif/vj_08-06_3.gif":
      "performance vjing live avec Alexi Shell à la Cité de l’Agriculture, 2023",
    "../images/gif/vj_08-06_4.png":
      "performance vjing live avec Alexi Shell à la Cité de l’Agriculture, 2023",

    // "../images/2.png",
    // "../images/D1pe0me 6.png";
    // "../images/FOND_ MEM 7.png",
    // "../images/ok.png",
    //"../images/IMG_2219.PNG" : "logo exgirlfriend",
  };

  return imageDescriptions[imagePath] || ""; //si pas de description correspondante, return rien
}

let imagePaths = [...originalImagePaths];
const displayedImages = [];
let maxDisplayedImages = 7;
const screenWidth = window.screen.width;

//////////////////////////////////////////////////////////////////////////////

if (screenWidth >= 1200) {
  document.addEventListener("click", (event) => {
    if (!event.target.classList.contains("display")) {
      return; // Si le clic n'est pas dans le cadre "display", ne rien faire
    }

    // si tableau vide, réinitialiser avec valeurs du tableau d'origine
    if (imagePaths.length === 0) {
      imagePaths = [...originalImagePaths];
    }

    const randomImageIndex = Math.floor(Math.random() * imagePaths.length);
    const randomImagePath = imagePaths[randomImageIndex];

    const image = new Image();
    image.src = randomImagePath;
    image.style.position = "absolute";

    image.dataset.description = getDescriptionForImage(randomImagePath); //ajouter description à l'image

    image.onload = () => {
      // Definir valeurs maxWidth et maxHeight en fonction de la largeur de l'écran
      let maxWidth, maxHeight;

      maxWidth = 350;
      maxHeight = 250;

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

    //tooltip part

    const tooltip = document.createElement("div");
    tooltip.id = "tooltip";
    document.body.appendChild(tooltip);

    image.addEventListener("mouseover", (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      tooltip.style.left = mouseX + "px";
      tooltip.style.top = mouseY + "px";

      image.dataset.displayTooltip = "true"; // Définir l'attribut pour afficher le tooltip
      updateTooltipDisplay(); // Mettre à jour l'affichage du tooltip
    });

    image.addEventListener("mouseleave", () => {
      image.dataset.displayTooltip = "false"; // Définir l'attribut pour masquer le tooltip
      updateTooltipDisplay(); // Mettre à jour l'affichage du tooltip
    });

    document.addEventListener("mousemove", (event) => {
      if (image.dataset.displayTooltip === "true") {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        tooltip.style.left = mouseX + "px";
        tooltip.style.top = mouseY + "px";
      }
    });

    function updateTooltipDisplay() {
      const displayTooltip = image.dataset.displayTooltip === "true";
      if (displayTooltip) {
        tooltip.textContent = image.dataset.description; // Mettre à jour le contenu du tooltip
        tooltip.style.display = "block";
      } else {
        tooltip.style.display = "none";
      }
    }
  });
} else {
  const imageContainer = document.querySelector(".display");
  const flexContainer = document.querySelector(".flex-container");
  const descriptionContainer = document.createElement("div");
  descriptionContainer.classList.add("description-container");

  // Créez une nouvelle div pour englober display et description-container
  const containerDiv = document.createElement("div");
  containerDiv.classList.add("image-container"); // Ajoutez une classe au conteneur si nécessaire

  // Ajoutez la div de description dans le conteneur
  containerDiv.appendChild(imageContainer);
  containerDiv.appendChild(descriptionContainer);

  // Ajoutez le conteneur dans le parent node
  flexContainer.appendChild(containerDiv);

  let currentImageIndex = 0;
  let imageElements = []; // Tableau pour stocker les éléments image préchargés
  let touchstartX = 0;
  let touchendX = 0;
  let swipeDirection = null;

  // Préchargez toutes les images
  originalImagePaths.forEach((imagePath) => {
    const image = new Image();
    image.src = imagePath;
    image.style.display = "none"; // Masquez toutes les images par défaut
    image.classList.add("img-for-mobile");
    imageContainer.appendChild(image);
    imageElements.push(image);
  });

  function displayNextImage(changeIndex) {
    if (imageElements.length === 0) {
      return; // Aucune image préchargée
    }

    // Masquez l'image actuelle
    imageElements[currentImageIndex].style.display = "none";

    // Incrémentation ou décrémentation de l'index en fonction de l'argument
    if (changeIndex === "next") {
      currentImageIndex++;
    } else if (changeIndex === "prev") {
      currentImageIndex--;
    }

    // Gérez les bords (dernière image devient la première et vice versa)
    if (currentImageIndex < 0) {
      currentImageIndex = imageElements.length - 1;
    } else if (currentImageIndex >= imageElements.length) {
      currentImageIndex = 0;
    }

    // Affichez la nouvelle image
    imageElements[currentImageIndex].style.display = "block";

    // Mettez à jour la description en fonction de l'image actuelle
    const imagePath = originalImagePaths[currentImageIndex];
    const description = getDescriptionForImage(imagePath);

    // Affichez la description uniquement si elle existe
    if (description) {
      descriptionContainer.textContent = description;
      descriptionContainer.style.display = "block";
    } else {
      descriptionContainer.style.display = "none";
    }
  }

  // Gestionnaires d'événements tactiles (vous pouvez laisser les gestionnaires tels quels)
  imageContainer.addEventListener(
    "touchstart",
    (e) => {
      touchstartX = e.touches[0].clientX;
    },
    { passive: true }
  );

  imageContainer.addEventListener(
    "touchmove",
    (e) => {
      const touchCurrentX = e.touches[0].clientX;
      const deltaX = touchCurrentX - touchstartX;
      if (deltaX > 10) {
        swipeDirection = "right";
      } else if (deltaX < -10) {
        swipeDirection = "left";
      }
    },
    { passive: true }
  );

  imageContainer.addEventListener("touchend", (e) => {
    touchendX = e.changedTouches[0].clientX;

    const currentImage = imageElements[currentImageIndex];

    if (swipeDirection === "left" && imageElements.length > 0) {
      // Appliquez la transformation à l'image actuelle pour effectuer l'animation
      currentImage.style.transform = "translateX(-100%)";
      setTimeout(() => {
        // Mettez à jour l'image et réinitialisez sa position
        displayNextImage("next");

        // Réinitialisez la transformation de l'image pour annuler l'animation
        currentImage.style.transform = "translateX(0)";
      }, 250); // Attendre la fin de l'animation CSS
    } else if (swipeDirection === "right" && imageElements.length > 0) {
      // Appliquez la transformation à l'image actuelle pour effectuer l'animation
      currentImage.style.transform = "translateX(100%)";
      setTimeout(() => {
        // Mettez à jour l'image et réinitialisez sa position
        displayNextImage("prev");

        // Réinitialisez la transformation de l'image pour annuler l'animation
        currentImage.style.transform = "translateX(0)";
      }, 250);
    }

    swipeDirection = null;
  });

  // Initialisez l'affichage avec la première image
  displayNextImage("next");
}
