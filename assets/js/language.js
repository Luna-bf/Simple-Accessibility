let languageSelector = document.querySelector("select");
let select = document.getElementById("select-lang")
let firstPar = document.getElementById("firstPar");
let secondPar = document.getElementById("secondPar");
let thirdPar = document.getElementById("thirdPar");
let source = document.getElementById("source");

// Objet contenant le texte dans différentes langues
const translations = {
    fr: {
        increment: "Augmenter le texte",
        decrement: "Diminuer le texte",
        changeTheme: "Changer le thème",
        resetAll: "Réinitialiser",
        select: "-- Sélectionnez une langue --",
        firstPar : "Le chat domestique (Felis catus ou Felis silvestris catus) est la forme domestique du chat sauvage Felis silvestris, une espèce de mammifères carnivores, de la famille des Félidés. Selon les résultats de travaux menés en 2006 et 2007, le chat domestique est une sous-espèce du chat sauvage issue d'ancêtres appartenant à la sous-espèce du chat sauvage d'Afrique (Felis silvestris lybica). Les premières domestications ont probablement lieu au Néolithique, entre 6000 et 8000 av. J.-C., dans le Croissant fertile, époque correspondant au début de la culture de céréales et à l'engrangement de réserves susceptibles d'être attaquées par des rongeurs, le chat devenant alors pour l'Homme un auxiliaire utile se prêtant à la domestication.",
        secondPar: "Le chat domestique est l'un des principaux animaux de compagnie et compte aujourd'hui une cinquantaine de races différentes reconnues par les instances de certification. Dans de très nombreux pays, le chat entre dans le cadre de la législation sur les carnivores domestiques à l'instar du chien et du furet. Essentiellement territorial, le chat est un prédateur de petites proies comme les rongeurs ou les oiseaux. Les chats ont diverses vocalisations dont les ronronnements, les miaulements, les feulements ou les grognements, bien qu'ils communiquent principalement par des positions faciales et corporelles et des phéromones.",
        thirdPar: "Tout d'abord vénéré par les Égyptiens, il est diabolisé en Europe au Moyen Âge et ne retrouve ses lettres de noblesse qu'au XVIIIe siècle. En Asie, le chat reste synonyme de chance, de richesse ou de longévité. Ce félin laisse son empreinte dans la culture populaire et artistique, tant au travers d'expressions populaires que de représentations diverses au sein de la littérature, de la peinture ou encore de la musique. À partir de la fin du XXe siècle, les dommages qu'il occasionne à la biodiversité sont mieux compris, et il fait partie des cent espèces envahissantes parmi les plus nuisibles du monde.",
        source: "Wikipédia",
    },
    en: {
        increment: "Increase text",
        decrement: "Reduce text",
        changeTheme: "Change theme",
        resetAll: "Reset all",
        select: "-- Select a language --",
        firstPar : "The domestic cat (Felis catus or Felis silvestris catus) is the domesticated form of the wildcat (Felis silvestris), a species of carnivorous mammal in the Felidae family. According to research conducted in 2006 and 2007, the domestic cat is a subspecies of the wildcat descended from ancestors belonging to the African wildcat subspecies (Felis silvestris lybica). The first domestications likely occurred during the Neolithic period, between 6000 and 8000 BC, in the Fertile Crescent. This period coincided with the beginnings of cereal cultivation and the storage of food reserves susceptible to rodent infestation, making the cat a useful ally for humans and thus amenable to domestication.",
        secondPar: "The domestic cat is one of the most popular pets and today boasts around fifty different breeds recognized by certification bodies. In many countries, cats fall under the legislation governing domestic carnivores, like dogs and ferrets. Primarily territorial, cats are predators of small prey such as rodents and birds. Cats have a variety of vocalizations, including purring, meowing, hissing, and growling, although they mainly communicate through facial and body postures and pheromones.",
        thirdPar: "Initially revered by the Egyptians, the cat was demonized in Europe during the Middle Ages and only regained its prestige in the 18th century. In Asia, the cat remains a symbol of luck, wealth, and longevity. This feline has left its mark on popular and artistic culture, both through popular expressions and diverse representations in literature, painting, and music. From the late 20th century onward, the damage it inflicts on biodiversity has become better understood, and it is now considered one of the world's one hundred most harmful invasive species.",
        source: "Wikipedia",
    }
}

languageSelector.addEventListener("change", (event) => {
    setLanguage(event.target.value);
});

function setLanguage(language) {
    if(language === "fr") {
        increment.innerText = translations.fr.increment;
        decrement.innerText = translations.fr.decrement;
        changeTheme.innerText = translations.fr.changeTheme;
        resetAll.innerText = translations.fr.resetAll;
        select.innerText = translations.fr.select;
        firstPar.innerText = translations.fr.firstPar;
        secondPar.innerText = translations.fr.secondPar;
        thirdPar.innerText = translations.fr.thirdPar;
        fourthPar.innerText = translations.fr.fourthPar;
        fifthPar.innerText = translations.fr.fifthPar;
        source.innerText = translations.fr.source;
    } else if(language === "en") {
        increment.innerText = translations.en.increment;
        decrement.innerText = translations.en.decrement;
        changeTheme.innerText = translations.en.changeTheme;
        resetAll.innerText = translations.en.resetAll;
        select.innerText = translations.en.select;
        firstPar.innerText = translations.en.firstPar;
        secondPar.innerText = translations.en.secondPar;
        thirdPar.innerText = translations.en.thirdPar;
        fourthPar.innerText = translations.en.fourthPar;
        fifthPar.innerText = translations.en.fifthPar;
        source.innerText = translations.en.source;
    }
};