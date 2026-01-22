let darkMode = localStorage.getItem('darkMode');
const toggleMode = document.getElementById('change-theme-btn');

// Activation du mode sombre
function enableDarkMode() {

    // Ajout de la classe 'dark-mode' à la balise body
    document.body.classList.add("dark-mode");

    // Mise à jour de la valeur de la clé "darkMode" dans le localStorage
    window.localStorage.setItem("darkMode", 'active');
};

// Désactivation du mode sombre
function disableDarkMode() {

    document.body.classList.remove("dark-mode"); // Suppression de la classe 'dark-mode' de la balise body
    window.localStorage.setItem("darkMode", null); // Mise à jour de la valeur de la clé "darkMode" dans le localStorage
}

// Si l'utilisateur a déjà visité le site et a activé le mode sombre
if (darkMode === 'active') {
    enableDarkMode(); // J'appelle la fonction enableDarkMode()
} else {
    disableDarkMode(); // Sinon, j'appelle la fonction disableDarkMode()
}

// Ajout d'un écouteur d'événement au bouton qui change le thème de la page
toggleMode.addEventListener('click', function () {

    // Récupération de la clé "darkMode" stocké dans localStorage
    darkMode = localStorage.getItem('darkMode');

    // Vérification de sa valeur
    if (darkMode !== 'active') {
        enableDarkMode(); // Si la valeur n'est pas 'active', je donne la possibilité d'activer le mode sombre
    } else {
        disableDarkMode(); // Sinon, je donne la possibilité de le désactiver
    }
});