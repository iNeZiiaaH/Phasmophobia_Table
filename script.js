const EVIDENCE_TRANSLATIONS = {
    "EMF 5": "EMF niveau 5",
    "Spirit Box": "Spirit Box",
    "Writing": "Écriture fantomatique",
    "DOTS": "Projecteur D.O.T.S.",
    "Fingerprints": "Ultraviolet",
    "Freezing": "Températures glaciales",
    "Ghost Orb": "Orbe fantomatique"
};

const GHOST_NAMES_TRANSLATIONS = {
    "Spirit": "Esprit",
    "Wraith": "Spectre",
    "Phantom": "Fantôme",
    "Poltergeist": "Poltergeist",
    "Banshee": "Banshee",
    "Jinn": "Djinn",
    "Mare": "Cauchemar",
    "Revenant": "Revenant",
    "Shade": "Ombre",
    "Demon": "Démon",
    "Yurei": "Yurei",
    "Oni": "Oni",
    "Yokai": "Yokai",
    "Hantu": "Hantu",
    "Goryo": "Goryo",
    "Myling": "Myling",
    "Onryo": "Onryo",
    "The Twins": "Les Jumeaux",
    "Raiju": "Raiju",
    "Obake": "Obake",
    "The Mimic": "Le Mimique",
    "Moroi": "Moroi",
    "Deogen": "Deogen",
    "Thaye": "Thaye"
};

const GHOSTS = [
    {
        name: "Spirit",
        evidence: ["EMF 5", "Spirit Box", "Writing"],
        traits: ["Aucune capacité spéciale", "Très agressif", "Peut chasser tôt"],
        hints: [
            "💀 Chasse tôt : Il peut te chasser dès 50% de santé mentale",
            "⚡ Super agressif : Il chasse plus souvent que les autres",
            "🔍 Détection : Utilise le Spirit Box pour le confirmer",
            "📝 Écriture : Regarde dans le livre d'écriture pour des messages",
            "📡 EMF 5 : Le détecteur EMF doit montrer 5 pour confirmer"
        ]
    },
    {
        name: "Wraith",
        evidence: ["EMF 5", "Spirit Box", "DOTS"],
        traits: ["Ne laisse pas d'empreintes", "Peut traverser les murs", "Téléportation"],
        hints: [
            "👻 Téléportation : Il peut apparaître n'importe où sur la carte",
            "🚫 Pas d'empreintes : Il ne laisse pas d'empreintes dans le sel",
            "🧱 Traverse les murs : Il peut passer à travers les obstacles",
            "📡 EMF 5 : Confirme avec le détecteur EMF",
            "📺 DOTS : Utilise la caméra DOTS pour le voir bouger"
        ]
    },
    {
        name: "Phantom",
        evidence: ["Spirit Box", "Fingerprints", "DOTS"],
        traits: ["Disparaît quand photographié", "Réduit la santé mentale", "Invisible"],
        hints: [
            "📸 Photo: Il disparaît quand tu le prends en photo",
            "🧠 Santé mentale: Il fait chuter ta santé mentale plus vite",
            "👁️ Invisible: Il est plus dur à voir pendant les chasses",
            "🔍 Spirit Box: Utilise-le pour confirmer sa présence",
            "👆 Empreintes: Il laisse des empreintes sur les surfaces"
        ]
    },
    {
        name: "Poltergeist",
        evidence: ["Spirit Box", "Fingerprints", "Writing"],
        traits: ["Lance des objets", "Plus d'activité avec objets", "Chasse si objets manquants"],
        hints: [
            "🎯 Objets: Il lance des objets pour créer de l'activité",
            "📦 Plus d'objets = plus d'activité: Mets des objets dans la pièce",
            "⚠️ Objets manquants: Il peut chasser si tu retires des objets",
            "🔍 Spirit Box: Il répond aux questions que tu poses",
            "📝 Écriture: Il laisse des messages dans le livre"
        ]
    },
    {
        name: "Banshee",
        evidence: ["Ghost Orb", "Fingerprints", "DOTS"],
        traits: ["Cible une personne", "Cri perçant", "Chasse à 50% santé mentale"],
        hints: [
            "🎯 Cible unique: Il se concentre sur un seul joueur",
            "😱 Cri: Il pousse un cri perçant qu'on entend de loin",
            "💀 Chasse tôt: Il peut te chasser dès 50% de santé mentale",
            "📡 EMF 5: Le détecteur EMF confirme sa présence",
            "👆 Empreintes: Il laisse des traces sur les surfaces"
        ]
    },
    {
        name: "Jinn",
        evidence: ["EMF 5", "Fingerprints", "Freezing"],
        traits: ["Vitesse normale si fusible allumé", "Vitesse rapide si fusible éteint", "Peut couper l'électricité"],
        hints: [
            "⚡ Fusible: Il est plus rapide si le fusible est éteint",
            "🔌 Électricité: Il peut couper l'électricité",
            "🏃 Vitesse: Regarde l'état du fusible pour prédire sa vitesse",
            "❄️ Gel: La température descend en dessous de 0°C",
            "📡 EMF 5: Confirme avec le détecteur EMF"
        ]
    },
    {
        name: "Mare",
        evidence: ["Spirit Box", "Writing", "Ghost Orb"],
        traits: ["Plus d'activité dans l'obscurité", "Moins d'activité avec lumière", "Peut éteindre les lumières"],
        hints: [
            "🌙 Obscurité: Il est plus actif quand les lumières sont éteintes",
            "💡 Lumière: Il est moins actif avec les lumières allumées",
            "🔌 Éteint les lumières: Il peut éteindre les interrupteurs",
            "🔍 Spirit Box: Utilise-le dans l'obscurité",
            "❄️ Gel: Il fait très froid dans sa pièce"
        ]
    },
    {
        name: "Revenant",
        evidence: ["Ghost Orb", "Writing", "Freezing"],
        traits: ["Vitesse lente si personne visible", "Vitesse rapide si personne visible", "Chasse fréquente"],
        hints: [
            "👁️ Vision: Il est plus rapide quand il te voit",
            "🐌 Lent: Il est très lent quand personne n'est visible",
            "🏃 Rapide: Il est ultra-rapide quand il voit quelqu'un",
            "💀 Chasse souvent: Il chasse plus souvent que les autres",
            "📝 Écriture: Il laisse des messages dans le livre"
        ]
    },
    {
        name: "Shade",
        evidence: ["EMF 5", "Writing", "Freezing"],
        traits: ["Timide", "Moins d'activité avec plusieurs personnes", "Chasse rare"],
        hints: [
            "😰 Timide: Il est moins actif quand vous êtes plusieurs",
            "👥 Groupe: Reste seul dans la pièce pour plus d'activité",
            "💀 Chasse rare: Il chasse moins souvent que les autres",
            "📡 EMF 5: Confirme avec le détecteur EMF",
            "❄️ Gel: Il fait très froid dans sa pièce"
        ]
    },
    {
        name: "Demon",
        evidence: ["Fingerprints", "Writing", "Freezing"],
        traits: ["Chasse très agressive", "Peut chasser à 70% santé mentale", "Moins de temps entre chasses"],
        hints: [
            "😈 Super agressif: Il chasse très agressivement",
            "💀 Chasse tôt: Il peut te chasser dès 70% de santé mentale",
            "⏱️ Chasse souvent: Il y a moins de temps entre les chasses",
            "👆 Empreintes: Il laisse des traces sur les surfaces",
            "📝 Écriture: Il laisse des messages dans le livre"
        ]
    },
    {
        name: "Yurei",
        evidence: ["Ghost Orb", "DOTS", "Freezing"],
        traits: ["Réduit la santé mentale", "Ferme les portes", "Moins d'activité"],
        hints: [
            "🧠 Santé mentale: Il fait chuter ta santé mentale plus vite",
            "🚪 Portes: Il peut fermer les portes tout seul",
            "😴 Moins d'activité: Il génère moins d'événements paranormaux",
            "🔍 Spirit Box: Utilise-le pour confirmer sa présence",
            "❄️ Gel: Il fait très froid dans sa pièce"
        ]
    },
    {
        name: "Oni",
        evidence: ["EMF 5", "Freezing", "DOTS"],
        traits: ["Plus d'activité", "Lance des objets plus loin", "Visible pendant les chasses"],
        hints: [
            "⚡ Hyper actif: Il génère beaucoup d'événements paranormaux",
            "🎯 Objets: Il lance des objets plus loin que les autres",
            "👁️ Visible: Il est plus facile à voir pendant les chasses",
            "📡 EMF 5: Le détecteur EMF confirme sa présence",
            "📺 DOTS: Utilise la caméra DOTS pour le voir"
        ]
    },
    {
        name: "Yokai",
        evidence: ["Spirit Box", "Ghost Orb", "DOTS"],
        traits: ["Entend les conversations", "Moins d'activité si on parle", "Chasse si on parle près de lui"],
        hints: [
            "👂 Audition: Il entend vos conversations",
            "🤫 Silence: Il est moins actif si tu parles près de lui",
            "💀 Chasse: Il peut chasser si tu parles trop près",
            "🔍 Spirit Box: Utilise-le pour confirmer sa présence",
            "📺 DOTS: Utilise la caméra DOTS pour le voir"
        ]
    },
    {
        name: "Hantu",
        evidence: ["Fingerprints", "Freezing", "Ghost Orb"],
        traits: ["Plus rapide dans le froid", "Plus lent dans la chaleur", "Peut geler les pièces"],
        hints: [
            "❄️ Froid: Il est plus rapide dans les pièces froides",
            "🔥 Chaleur: Il est plus lent dans les pièces chaudes",
            "🌡️ Température: Il peut geler les pièces qu'il traverse",
            "👆 Empreintes: Il laisse des traces sur les surfaces",
            "📺 DOTS: Utilise la caméra DOTS pour le voir"
        ]
    },
    {
        name: "Goryo",
        evidence: ["EMF 5", "Fingerprints", "DOTS"],
        traits: ["Ne sort pas de sa pièce", "Visible seulement via DOTS", "Rare"],
        hints: [
            "🏠 Pièce: Il ne quitte jamais sa pièce d'origine",
            "📺 DOTS uniquement: Il est visible seulement via la caméra DOTS",
            "📡 EMF 5: Le détecteur EMF confirme sa présence",
            "👆 Empreintes: Il laisse des traces dans sa pièce",
            "🔍 Rare: Il est très difficile à identifier"
        ]
    },
    {
        name: "Myling",
        evidence: ["EMF 5", "Writing", "Fingerprints"],
        traits: ["Chuchotements silencieux", "Chasse silencieuse", "Plus d'activité audio"],
        hints: [
            "🤫 Silencieux: Il chuchote très silencieusement",
            "👻 Chasse silencieuse: Il chasse sans faire de bruit",
            "🔊 Audio: Il génère plus d'événements audio",
            "📡 EMF 5: Le détecteur EMF confirme sa présence",
            "❄️ Gel: Il fait très froid dans sa pièce"
        ]
    },
    {
        name: "Onryo",
        evidence: ["Spirit Box", "Freezing", "Ghost Orb"],
        traits: ["Chasse si flamme éteinte", "Moins d'activité avec flamme", "Peut éteindre les flammes"],
        hints: [
            "🕯️ Flamme: Chasse si une flamme est éteinte",
            "🔥 Protection: Moins d'activité avec une flamme allumée",
            "💨 Éteint: Peut éteindre les bougies et allumettes",
            "🔍 Spirit Box: Utilisez-le pour confirmer sa présence",
            "📺 DOTS: Utilisez la caméra DOTS pour le voir"
        ]
    },
    {
        name: "The Twins",
        evidence: ["EMF 5", "Spirit Box", "Freezing"],
        traits: ["Deux entités", "Interactions différentes", "Vitesse variable"],
        hints: [
            "👥 Deux fantômes: Deux entités qui agissent ensemble",
            "⚡ Interactions: Réagit différemment aux interactions",
            "🏃 Vitesse: Vitesse de chasse variable",
            "📡 EMF 5: Le détecteur EMF confirme sa présence",
            "🔍 Spirit Box: Utilisez-le pour confirmer sa présence"
        ]
    },
    {
        name: "Raiju",
        evidence: ["EMF 5", "DOTS", "Ghost Orb"],
        traits: ["Vitesse rapide près d'électronique", "Vitesse normale loin d'électronique", "Peut couper l'électricité"],
        hints: [
            "📱 Électronique: Plus rapide près des appareils électroniques",
            "🔌 Électricité: Peut couper l'alimentation électrique",
            "🏃 Vitesse: Vitesse variable selon la proximité d'électronique",
            "📡 EMF 5: Le détecteur EMF confirme sa présence",
            "📺 DOTS: Utilisez la caméra DOTS pour le voir"
        ]
    },
    {
        name: "Obake",
        evidence: ["EMF 5", "Fingerprints", "Ghost Orb"],
        traits: ["Change de forme", "Empreintes qui disparaissent", "Six doigts"],
        hints: [
            "🔄 Forme: Change de forme et d'apparence",
            "👆 Empreintes: Les empreintes peuvent disparaître rapidement",
            "🖐️ Six doigts: Peut laisser des empreintes à six doigts",
            "📡 EMF 5: Le détecteur EMF confirme sa présence",
            "📺 DOTS: Utilisez la caméra DOTS pour le voir"
        ]
    },
    {
        name: "The Mimic",
        evidence: ["Spirit Box", "Fingerprints", "Freezing"],
        traits: ["Copie d'autres fantômes", "Preuve fantôme", "Comportement changeant"],
        hints: [
            "🔄 Copie: Copie le comportement d'autres fantômes",
            "👻 Preuve fantôme: Peut montrer des preuves d'autres fantômes",
            "🎭 Changeant: Son comportement change constamment",
            "🔍 Spirit Box: Utilisez-le pour confirmer sa présence",
            "👆 Empreintes: Laisse des traces sur les surfaces"
        ]
    },
    {
        name: "Moroi",
        evidence: ["Spirit Box", "Writing", "Freezing"],
        traits: ["Santé mentale réduite", "Vitesse rapide si santé mentale basse", "Chasse fréquente"],
        hints: [
            "🧠 Santé mentale: Réduit la santé mentale plus rapidement",
            "🏃 Vitesse: Plus rapide si la santé mentale est basse",
            "💀 Chasse fréquente: Chasse plus souvent que les autres",
            "🔍 Spirit Box: Utilisez-le pour confirmer sa présence",
            "📝 Écriture: Laisse des messages dans le livre"
        ]
    },
    {
        name: "Deogen",
        evidence: ["Spirit Box", "Writing", "DOTS"],
        traits: ["Toujours sait où vous êtes", "Vitesse lente", "Chasse fréquente"],
        hints: [
            "👁️ Omniscient: Sait toujours où se trouvent les joueurs",
            "🐌 Lent: Très lent pendant les chasses",
            "💀 Chasse fréquente: Chasse plus souvent que les autres",
            "🔍 Spirit Box: Utilisez-le pour confirmer sa présence",
            "📺 DOTS: Utilisez la caméra DOTS pour le voir"
        ]
    },
    {
        name: "Thaye",
        evidence: ["Writing", "Ghost Orb", "DOTS"],
        traits: ["Vieillit avec le temps", "Moins d'activité avec l'âge", "Vitesse réduite avec l'âge"],
        hints: [
            "⏰ Vieillit: Devient moins actif avec le temps",
            "😴 Moins d'activité: Génère moins d'événements en vieillissant",
            "🐌 Vitesse: Devient plus lent avec l'âge",
            "📝 Écriture: Laisse des messages dans le livre",
            "📺 DOTS: Utilisez la caméra DOTS pour le voir"
        ]
    }
];

let currentList = [];
let sortConfig = {key: null, direction: 'asc'};

function render(ghosts) {
    const tbody = document.querySelector('#ghostTable tbody');
    tbody.innerHTML = '';

    ghosts.forEach((ghost, index) => {
        const row = document.createElement('tr');
        row.className = 'fade-in';
        row.style.animationDelay = `${index * 0.1}s`;

        row.innerHTML = `
            <td><strong>${GHOST_NAMES_TRANSLATIONS[ghost.name] || ghost.name}</strong></td>
            <td>${ghost.evidence.map(evidence => `<span class="badge">${EVIDENCE_TRANSLATIONS[evidence] || evidence}</span>`).join('')}</td>
            <td>${ghost.traits.join(', ')}</td>
            <td>${formatHints(ghost.hints)}</td>
        `;

        tbody.appendChild(row);
    });
}

function formatHints(hints) {
    return hints.map(hint => `<div class="hint-item">${hint}</div>`).join('');
}

function filterGhosts() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const selectedEvidence = Array.from(document.querySelectorAll('#evidenceFilters input:checked'))
        .map(checkbox => checkbox.value);

    let filtered = GHOSTS.filter(ghost => {
        const ghostNameFrench = GHOST_NAMES_TRANSLATIONS[ghost.name] || ghost.name;
        const matchesSearch = ghost.name.toLowerCase().includes(searchTerm) ||
            ghostNameFrench.toLowerCase().includes(searchTerm) ||
            ghost.evidence.some(evidence => evidence.toLowerCase().includes(searchTerm)) ||
            ghost.traits.some(trait => trait.toLowerCase().includes(searchTerm)) ||
            ghost.hints.some(hint => hint.toLowerCase().includes(searchTerm));

        const matchesEvidence = selectedEvidence.length === 0 ||
            selectedEvidence.every(evidence => ghost.evidence.includes(evidence));

        return matchesSearch && matchesEvidence;
    });

    currentList = filtered;
    render(filtered);
}

function sortTable(key) {
    if (sortConfig.key === key) {
        sortConfig.direction = sortConfig.direction === 'asc' ? 'desc' : 'asc';
    } else {
        sortConfig.key = key;
        sortConfig.direction = 'asc';
    }

    currentList.sort((a, b) => {
        let aVal = a[key];
        let bVal = b[key];

        if (key === 'evidence' || key === 'traits' || key === 'hints') {
            aVal = Array.isArray(aVal) ? aVal.join(' ') : aVal;
            bVal = Array.isArray(bVal) ? bVal.join(' ') : bVal;
        }

        if (sortConfig.direction === 'asc') {
            return aVal > bVal ? 1 : -1;
        } else {
            return aVal < bVal ? 1 : -1;
        }
    });

    document.querySelectorAll('th.sortable').forEach(th => {
        th.classList.remove('asc', 'desc');
    });

    const activeTh = document.querySelector(`th[data-key="${key}"]`);
    activeTh.classList.add(sortConfig.direction);

    render(currentList);
}

function exportToCSV() {
    const headers = ['Fantôme', 'Preuves', 'Caractéristiques', 'Indices pratiques'];
    const csvContent = [
        headers.join(','),
        ...currentList.map(ghost => [
            GHOST_NAMES_TRANSLATIONS[ghost.name] || ghost.name,
            `"${ghost.evidence.map(evidence => EVIDENCE_TRANSLATIONS[evidence] || evidence).join('; ')}"`,
            `"${ghost.traits.join('; ')}"`,
            `"${ghost.hints.join('; ')}"`
        ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], {type: 'text/csv;charset=utf-8;'});
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'phantoms_guide.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


function resetFilters() {
    document.getElementById('search').value = '';
    document.querySelectorAll('#evidenceFilters input').forEach(checkbox => {
        checkbox.checked = false;
    });
    currentList = GHOSTS.slice();
    render(currentList);
}

function createEvidenceFilters() {
    const evidenceFilters = document.getElementById('evidenceFilters');
    const allEvidence = [...new Set(GHOSTS.flatMap(ghost => ghost.evidence))];

    allEvidence.forEach(evidence => {
        const label = document.createElement('label');
        const translatedEvidence = EVIDENCE_TRANSLATIONS[evidence] || evidence;
        label.innerHTML = `
            <input type="checkbox" value="${evidence}">
            ${translatedEvidence}
        `;
        evidenceFilters.appendChild(label);
    });
}

function loadExternalScripts() {
    const scripts = [
        "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js",
    ];

    scripts.forEach((src) => {
        const script = document.createElement("script");
        script.src = src;
        script.defer = true;
        document.head.appendChild(script);
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadExternalScripts);
} else {
    loadExternalScripts();
}

document.addEventListener("DOMContentLoaded", function () {
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
        mainContent.classList.remove("loading");
        mainContent.classList.add("loaded");
    }
});

document.addEventListener('DOMContentLoaded', function () {
    createEvidenceFilters();

    document.getElementById('search').addEventListener('input', filterGhosts);
    document.getElementById('evidenceFilters').addEventListener('change', filterGhosts);
    document.getElementById('reset').addEventListener('click', resetFilters);
    document.getElementById('export').addEventListener('click', exportToCSV);

    document.querySelectorAll('th.sortable').forEach(th => {
        th.addEventListener('click', () => sortTable(th.dataset.key));
    });

    document.getElementById('export').addEventListener('click', function () {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });


    document.getElementById('reset').addEventListener('click', function () {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });

    render(GHOSTS);
    currentList = GHOSTS.slice();
});
