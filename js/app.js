// Importation du style CSS (si nécessaire selon votre configuration Webpack)
// import '../css/style.css';

// Fonction pour gérer la connexion
function login() {
  // Récupération des valeurs des champs email et password
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Vérification si les identifiants correspondent à ceux attendus
  if (email === "jackjeff31@gmail.com" && password === "Mycroft2005") {
    // Affichage d'un message de succès
    alert("Connexion réussie !");
    // Redirection vers la page du tableau de bord
    window.location.href = "dashboard.html";
  } else {
    // Affichage d'un message d'erreur
    alert("Email ou mot de passe incorrect !");
  }
}

// Fonction pour afficher l'indice du mot de passe
function showHint() {
  var email = document.getElementById("email").value;
  // Vérifie si l'email saisi est correct
  if (email === "coucou@gmail.com") {
    // Affiche l'indice du mot de passe
    alert("Indice : le nom de ton fidèle compagnon.");
  } else {
    // Invite l'utilisateur à saisir le bon email pour obtenir l'indice
    alert("Veuillez entrer l'email 'coucou@gmail.com' pour voir l'indice.");
  }
}

// Ajout des écouteurs d'événements après le chargement du DOM
document.addEventListener('DOMContentLoaded', function() {
  // Écouteur pour le bouton de connexion
  document.getElementById('login-button').addEventListener('click', login);
  // Écouteur pour le lien 'Mot de passe oublié ?'
  document.getElementById('hint-link').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    showHint();
  });
});
