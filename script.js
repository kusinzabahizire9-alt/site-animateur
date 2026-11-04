/* Réinitialisation de base pour alléger le navigateur */
* {
    margin: 0;
    padding: 0;
    box- sizing: border - box;
font - family: 'Segoe UI', Tahoma, Geneva, Verdana, sans - serif;
}

body {
    background - color: #f9f9f9;
    color: #333;
    line - height: 1.6;
}

/* En-tête */
header {
    background - color: #1a1a1a;
    color: white;
    padding: 15px 20px;
    display: flex;
    justify - content: space - between;
    align - items: center;
    position: sticky;
    top: 0;
    z - index: 1000;
}

.logo {
    font - size: 24px;
    font - weight: bold;
    color: #f39c12;
}

nav ul {
    list - style: none;
    display: flex;
    gap: 15px;
}

nav a {
    color: white;
    text - decoration: none;
    font - weight: 500;
}

.btn - reserver {
    background - color: #f39c12;
    padding: 5px 10px;
    border - radius: 5px;
}

/* Sections */
section {
    padding: 50px 20px;
    text - align: center;
}

/* Hero Section (Accueil) */
.hero {
    background - color: #2c3e50;
    color: white;
    padding: 80px 20px;
}

.hero h1 {
    font - size: 2.5rem;
    margin - bottom: 15px;
}

.hero p {
    font - size: 1.2rem;
    margin - bottom: 25px;
}

.btn - principal {
    display: inline - block;
    background - color: #f39c12;
    color: white;
    padding: 10px 20px;
    text - decoration: none;
    border: none;
    border - radius: 5px;
    font - size: 1.1rem;
    cursor: pointer;
    font - weight: bold;
}

/* Services */
.services - container {
    display: flex;
    justify - content: center;
    gap: 20px;
    margin - top: 30px;
    flex - wrap: wrap;
}

.service - box {
    background: white;
    padding: 20px;
    border - radius: 8px;
    box - shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 300px;
}

.service - box h3 {
    color: #f39c12;
    margin - bottom: 10px;
}

/* Réservation */
.reservation {
    background - color: #ecf0f1;
}

form {
    max - width: 500px;
    margin: 30px auto 0;
    background: white;
    padding: 30px;
    border - radius: 8px;
    box - shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text - align: left;
}

.form - groupe {
    margin - bottom: 15px;
}

.form - groupe label {
    display: block;
    margin - bottom: 5px;
    font - weight: bold;
}

.form - groupe input, .form - groupe select {
    width: 100 %;
    padding: 10px;
    border: 1px solid #ccc;
    border - radius: 5px;
}

.cache {
    display: none;
}

#message - succes {
    color: green;
    margin - top: 15px;
    font - weight: bold;
    text - align: center;
}

/* Footer */
footer {
    background - color: #1a1a1a;
    color: white;
    text - align: center;
    padding: 15px 0;
}

/* Responsive pour les petits téléphones */
@media(max - width: 600px) {
    header {
        flex - direction: column;
        gap: 10px;
    }
    .hero h1 {
        font - size: 2rem;
    }
} document.addEventListener("DOMContentLoaded", function () {
    const formulaire = document.getElementById("form-reservation");

    formulaire.addEventListener("submit", function (e) {
        e.preventDefault();

        // Récupération des données du formulaire
        const nom = document.getElementById("nom").value;
        const tel = document.getElementById("telephone").value;
        const date = document.getElementById("date").value;
        const event = document.getElementById("type-event").value;

        // Ton numéro de téléphone (Format international sans le +)
        // EXEMPLE pour la RDC : 243XXXXXXXXX
        const monNumero = "243XXXXXXXXX";

        // Création du message WhatsApp
        const message = `Bonjour MC FLORENTIN, je souhaite faire une réservation :
- Nom : ${nom}
- Téléphone : ${tel}
- Date : ${date}
- Type d'événement : ${event}`;

        // Encodage du message pour l'URL
        const messageEncode = encodeURIComponent(message);

        // Ouverture de WhatsApp (Lien universel)
        window.open(`https://wa.me/${monNumero}?text=${messageEncode}`, '_blank');

        alert("Vous allez être redirigé vers WhatsApp pour finaliser la réservation !");
    });
});
document.addEventListener("DOMContentLoaded", function () {

    // --- PARTIE RÉSERVATION ---
    const formReserver = document.getElementById("form-reservation");

    formReserver.addEventListener("submit", function (e) {
        e.preventDefault();

        const nom = document.getElementById("nom").value;
        const tel = document.getElementById("telephone").value;
        const date = document.getElementById("date").value;
        const event = document.getElementById("type-event").value;

        const monNumero = "243XXXXXXXXX"; // REMPLACE PAR TON NUMÉRO ICI

        const message = `Salut MC FLORENTIN, je réserve pour :\n- Nom : ${nom}\n- Date : ${date}\n- Événement : ${event}\n- Contact : ${tel}`;

        const url = `https://wa.me/${monNumero}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    });

    // --- PARTIE TÉMOIGNAGE ---
    const formAvis = document.getElementById("form-temoignage");

    formAvis.addEventListener("submit", function (e) {
        e.preventDefault();

        const nomAvis = document.getElementById("nom-avis").value;
        const texteAvis = document.getElementById("texte-avis").value;

        const monNumero = "243XXXXXXXXX"; // TON NUMÉRO ICI AUSSI

        const messageAvis = `Nouveau Témoignage pour mon site !\n- De : ${nomAvis}\n- Avis : ${texteAvis}`;

        const urlAvis = `https://wa.me/${monNumero}?text=${encodeURIComponent(messageAvis)}`;
        window.open(urlAvis, '_blank');

        alert("Merci ! Votre témoignage m'a été envoyé.");
        formAvis.reset();
    });
});
