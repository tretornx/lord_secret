// Fonction pour afficher la nouvelle section "Localiser"
function showLocaliser() {
  // Effacer le contenu précédent
  document.getElementById("content").innerHTML = "";

  // Supprimer le bouton "Retour en haut" existant s'il y en a un
  let existingBackToTop = document.querySelector('.back-to-top');
  if (existingBackToTop) {
    existingBackToTop.remove();
  }

  // Titre de la section Localisation
  let title = document.createElement('h1');
  title.textContent = 'Localisation';
  document.getElementById("content").appendChild(title);

  // Créer les sections parallax
  for (let i = 1; i <= 5; i++) {
    let section = document.createElement('div');
    section.className = 'parallax-section';
    section.style.backgroundImage = `url('img/image${i}.jpg')`;
    document.getElementById("content").appendChild(section);
  }

  // Ajouter le bouton pour accéder à la triangulation
  let accessSection = document.createElement('section');
  accessSection.id = 'access-triangulation';
  let button = document.createElement('button');
  button.id = 'triangulation-button';
  button.textContent = 'Accéder à la triangulation';
  button.onclick = function() {
    window.location.href = 'triangulation.html';
  };
  accessSection.appendChild(button);
  document.getElementById("content").appendChild(accessSection);

  // Ajouter le bouton "Retour en haut" s'il n'existe pas déjà
  if (!document.querySelector('.back-to-top')) {
    let backToTop = document.createElement('div');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '&uarr;';
    backToTop.onclick = scrollToTop;
    document.body.appendChild(backToTop);

    // Afficher le bouton "Retour en haut" lors du défilement
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTop.style.display = 'block';
      } else {
        backToTop.style.display = 'none';
      }
    });
  }
}

// Fonction pour remonter en haut de la page
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Fonctions pour les autres menus
function showVideosurveillance() {
  // Effacer le contenu précédent
  document.getElementById("content").innerHTML = "";

  // Titre de la section
  var title = document.createElement('h2');
  title.textContent = 'Vidéosurveillance';
  document.getElementById("content").appendChild(title);

  // Formulaire de saisie
  var form = document.createElement('form');
  form.id = 'videosurveillance-form';
  form.onsubmit = function(event) {
    event.preventDefault();
    displayCameraVideo();
  };

  // Champ pour la marque
  var brandGroup = createInputGroup('brand', 'Marque de la caméra', 'img/brand_icon.svg');
  form.appendChild(brandGroup);

  // Champ pour le numéro de série
  var serialGroup = createInputGroup('serial', 'Numéro de série', 'img/serial_icon.svg');
  form.appendChild(serialGroup);

  // Champ pour la position géographique
  var positionGroup = createInputGroup('position', 'Position géographique', 'img/location_icon.svg');
  form.appendChild(positionGroup);

  // Bouton de soumission
  var submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.className = 'ok-button';
  submitButton.innerHTML = `
        <img src="img/search_icon.svg" alt="Rechercher" class="button-icon">
        Accéder à la caméra
    `;
  form.appendChild(submitButton);

  document.getElementById("content").appendChild(form);

  // Zone pour afficher la vidéo
  var videoContainer = document.createElement('div');
  videoContainer.id = 'video-container';
  document.getElementById("content").appendChild(videoContainer);
}

// Fonction pour créer un groupe de saisie avec icône
function createInputGroup(id, placeholder, iconSrc) {
  var group = document.createElement('div');
  group.className = 'form-with-icon';

  var input = document.createElement('input');
  input.type = 'text';
  input.id = id;
  input.placeholder = placeholder;

  var icon = document.createElement('img');
  icon.src = iconSrc;
  icon.alt = placeholder;

  group.appendChild(input);
  group.appendChild(icon);

  return group;
}

// Fonction pour afficher la vidéo correspondante
function displayCameraVideo() {
  var brand = document.getElementById('brand').value.trim().toLowerCase();
  var serial = document.getElementById('serial').value.trim();
  var position = document.getElementById('position').value.trim().toLowerCase();

  var videoContainer = document.getElementById('video-container');
  videoContainer.innerHTML = '';

  // Logique pour déterminer quelle vidéo afficher
  var videoId = getVideoId(brand, serial, position);

  if (videoId) {
    // Afficher la vidéo YouTube correspondante
    var iframe = document.createElement('iframe');
    iframe.width = '560';
    iframe.height = '315';
    iframe.src = 'https://www.youtube.com/embed/' + videoId;
    iframe.title = 'Caméra de vidéosurveillance';
    iframe.frameBorder = '0';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;

    videoContainer.appendChild(iframe);
  } else {
    // Afficher un message d'erreur
    var errorMessage = document.createElement('p');
    errorMessage.textContent = 'Aucune caméra ne correspond aux informations saisies.';
    videoContainer.appendChild(errorMessage);
  }
}

// Fonction pour déterminer le code vidéo en fonction des entrées
function getVideoId(brand, serial, position) {
  // Exemple de mappage entre les entrées et les vidéos YouTube
  var cameras = [
    {
      brand: 'sony',
      serial: '123456',
      position: 'paris',
      videoId: 'dQw4w9WgXcQ' // Remplacez par un vrai ID de vidéo YouTube
    },
    {
      brand: 'canon',
      serial: '654321',
      position: 'lyon',
      videoId: 'eY52Zsg-KVI' // Remplacez par un vrai ID de vidéo YouTube
    },
    // Ajoutez d'autres caméras ici
  ];

  // Rechercher la caméra correspondante
  for (var i = 0; i < cameras.length; i++) {
    if (
      cameras[i].brand === brand &&
      cameras[i].serial === serial &&
      cameras[i].position === position
    ) {
      return cameras[i].videoId;
    }
  }

  // Si aucune correspondance trouvée
  return null;
}


function showMenusDivers() {
  // Effacer le contenu précédent
  document.getElementById("content").innerHTML = `
        <h2>Menus Divers</h2>
        <!-- Contenu des menus divers -->
    `;
}
