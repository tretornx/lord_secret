// Fonction pour afficher la section Vidéosurveillance avec vérification d'accès
function showVideosurveillance() {
  document.getElementById("content").innerHTML = `
    <h2>Vérification d'accès</h2>
    <form id="access-form" onsubmit="checkAccess(event)">
      <label for="brand">Marque :</label>
      <input type="text" id="brand" placeholder="Entrez la marque" required>

      <label for="serial-number">Numéro de série :</label>
      <input type="text" id="serial-number" placeholder="Entrez le numéro de série" required>

      <button type="submit">Valider</button>
    </form>

    <!-- Zone d'affichage des vidéos, masquée par défaut -->
    <div id="video-section" style="display: none;">
      <h3>Vidéos</h3>
      <video controls width="400">
        <source src="media/LS-Couloir-2.mp4" type="video/mp4">
        Votre navigateur ne supporte pas la lecture de cette vidéo.
      </video>
      <video controls width="400">
        <source src="media/LS-Porte-Cave-2.mp4" type="video/mp4">
        Votre navigateur ne supporte pas la lecture de cette vidéo.
      </video>
      <video controls width="400">
        <source src="media/LS-Porte-Cave.mp4" type="video/mp4">
        Votre navigateur ne supporte pas la lecture de cette vidéo.
      </video>
    </div>
  `;
}

// Fonction pour vérifier la marque et le numéro de série pour la page Vidéosurveillance
function checkAccess(event) {
  event.preventDefault(); // Empêche le rechargement de la page

  // Récupération des valeurs des champs
  const brand = document.getElementById('brand').value.trim();
  const serialNumber = document.getElementById('serial-number').value.trim();

  // Vérification de la marque et du numéro de série
  if (brand.toLowerCase() === 'samsung' && serialNumber === '12345') {
    // Affiche la section des vidéos si les informations sont correctes
    document.getElementById('video-section').style.display = 'block';
  } else {
    // Affiche un message d'erreur sinon
    alert("Marque ou numéro de série incorrect. Accès refusé.");
    document.getElementById('video-section').style.display = 'none';
  }
}

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

// Fonction pour afficher le contenu des Menus Divers
function showMenusDivers() {
  // Effacer le contenu précédent
  document.getElementById("content").innerHTML = `
        <h2>Menus Divers</h2>
        <!-- Contenu des menus divers -->
    `;
}

document.addEventListener("DOMContentLoaded", function() {
  const page = document.body.getAttribute("data-page");
  const menu = document.getElementById("menu");

  // Crée un menu de base avec "Accueil", "Localiser", "Vidéosurveillance", et "Menus divers"
  let menuContent = `
    <ul>
      <li><a href="dashboard.html">Accueil</a></li>
      <li><a href="localisation.html">Localiser</a></li>
      <li><a href="videosurveillance.html">Vidéosurveillance</a></li>
      <li><a href="dashboard.html">Menus divers</a></li> <!-- Lien Menus divers inclus -->
    </ul>
  `;

  // Injecte ce menu de base dans l'élément #menu de toutes les pages
  menu.innerHTML = menuContent;
});


