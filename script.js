const GHOSTS = [
    {name: 'Esprit', evidence: 'EMF 5, Spirit Box, Écriture', traits: 'Aucune capacité spéciale, encens efficace longtemps', hints: 'Encens repousse plus longtemps → Esprit'},
    {name: 'Spectre', evidence: 'EMF 5, Spirit Box, D.O.T.S', traits: "Peut traverser murs/portes, ne laisse pas d'empreintes dans le sel", hints: "Pas d'empreintes sur le sel → Spectre"},
    {name: 'Poltergeist', evidence: 'Spirit Box, Empreintes, Écriture', traits: "Lance beaucoup d'objets à la fois", hints: 'Objets projetés fréquemment → Poltergeist'},
    {name: 'Banshee', evidence: 'Orbes, Empreintes, D.O.T.S', traits: 'Cible une seule personne, cri distinct au micro parabolique', hints: 'Un joueur constamment ciblé → Banshee'},
    {name: 'Jinn', evidence: 'EMF 5, Empreintes, Températures glaciales', traits: 'Rapide si joueur loin, aime le courant', hints: 'Rapide quand courant allumé → Jinn'},
    {name: 'Mare', evidence: 'Spirit Box, Orbes, Écriture', traits: "Plus agressif dans l'obscurité, éteint souvent les lumières", hints: 'Lumières éteintes souvent → Mare'},
    {name: 'Revenant', evidence: 'Orbes, Écriture, Températures glaciales', traits: "Lent hors chasse, très rapide s'il te voit", hints: 'Vitesse changeante pendant chasse → Revenant'},
    {name: 'Ombre', evidence: 'EMF 5, Écriture, Températures glaciales', traits: 'Moins actif en groupe', hints: "Peu d'activité en multi → Ombre"},
    {name: 'Démon', evidence: 'Empreintes, Écriture, Températures glaciales', traits: "Peut attaquer très tôt, crucifix efficace", hints: 'Attaques précoces → Démon'},
    {name: 'Yurei', evidence: 'Orbes, Températures glaciales, D.O.T.S', traits: 'Vide la santé mentale rapidement, ferme les portes', hints: 'Sanité chute vite, portes claquent → Yurei'},
    {name: 'Oni', evidence: 'EMF 5, Empreintes, D.O.T.S', traits: 'Très actif, visible longtemps', hints: 'Apparitions fréquentes → Oni'},
    {name: 'Yokai', evidence: 'Spirit Box, Orbes, D.O.T.S', traits: 'Déclenche chasses si on parle près de lui', hints: 'Micro provoque attaque → Yokai'},
    {name: 'Hantu', evidence: 'Orbes, Empreintes, Températures glaciales', traits: 'Plus rapide dans le froid', hints: 'Chasse rapide en zones froides → Hantu'},
    {name: 'Goryo', evidence: 'EMF 5, Empreintes, D.O.T.S', traits: 'D.O.T.S visibles seulement via caméra', hints: 'D.O.T.S uniquement caméra → Goryo'},
    {name: 'Myling', evidence: 'EMF 5, Empreintes, Écriture', traits: 'Bruits de pas faibles/absents pendant chasse', hints: 'Silence en chasse → Myling'},
    {name: 'Onryo', evidence: 'Spirit Box, Orbes, Températures glaciales', traits: "Attiré par le feu, éteint bougies", hints: "Bougies qui s'éteignent → Onryo"},
    {name: 'Les Jumeaux', evidence: 'EMF 5, Spirit Box, Températures glaciales', traits: "Activité à deux endroits", hints: 'Interactions doubles → Jumeaux'},
    {name: 'Raiju', evidence: 'EMF 5, Orbes, D.O.T.S', traits: "Plus actif près des appareils électriques", hints: 'Chasse rapide avec appareils allumés → Raiju'},
    {name: 'Obake', evidence: 'EMF 5, Empreintes, Orbes', traits: 'Empreintes particulières (6 doigts)', hints: 'Empreintes inhabituelles → Obake'},
    {name: 'Mimic', evidence: 'Spirit Box, Empreintes, Températures glaciales, Orbes', traits: "Imite d'autres fantômes (peut avoir 4 preuves)", hints: 'Toujours 4 preuves possibles → Mimic'},
    {name: 'Moroi', evidence: 'Spirit Box, Écriture, Températures glaciales', traits: 'Fait baisser la sanité après Spirit Box', hints: 'Sanité chute rapide après Spirit Box → Moroi'},
    {name: 'Deogen', evidence: 'Spirit Box, Écriture, D.O.T.S', traits: 'Te trouve souvent, ralentit proche', hints: 'Trouve toujours un joueur → Deogen'},
    {name: 'Thaye', evidence: 'Orbes, Écriture, D.O.T.S', traits: 'Très actif au début puis moins', hints: "Beaucoup d'activité puis baisse → Thaye"}
];

const tbody = document.querySelector('#ghostTable tbody');
const searchInput = document.getElementById('search');
const evidenceFilters = document.getElementById('evidenceFilters');

// Génère la liste de toutes les preuves disponibles
const evidenceSet = new Set();
GHOSTS.forEach(g => g.evidence.split(',').map(x => x.trim()).forEach(e => evidenceSet.add(e)));

// Crée les cases à cocher
Array.from(evidenceSet).sort().forEach(e => {
    const label = document.createElement('label');
    label.innerHTML = `<input type="checkbox" value="${e}"> ${e}`;
    evidenceFilters.appendChild(label);
});

function escapeHtml(str) {
    return (str || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function formatBadges(evid) {
    return evid.split(',').map(x => '<span class="badge">' + escapeHtml(x.trim()) + '</span>').join(' ');
}

function render(list) {
    tbody.innerHTML = '';
    list.forEach(g => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td><strong>${escapeHtml(g.name)}</strong></td><td>${formatBadges(g.evidence)}</td><td>${escapeHtml(g.traits)}</td><td class="small">${escapeHtml(g.hints)}</td>`;
        tbody.appendChild(tr);
    });
}

function applyFilters() {
    const q = searchInput.value.trim().toLowerCase();

    // Récupère toutes les preuves cochées
    const selected = Array.from(evidenceFilters.querySelectorAll('input:checked')).map(cb => cb.value);

    let filtered = GHOSTS.filter(g => {
        const hay = (g.name + ' ' + g.evidence + ' ' + g.traits + ' ' + g.hints).toLowerCase();

        // Le fantôme doit contenir toutes les preuves cochées
        if (selected.length && !selected.every(ev => g.evidence.includes(ev))) return false;

        if (!q) return true;
        return hay.includes(q);
    });

    render(filtered);
    currentList = filtered;
}

let sortKey = null;
let sortDir = 1;
let currentList = GHOSTS.slice();

document.querySelectorAll('th.sortable').forEach(th => {
    th.addEventListener('click', () => {
        const key = th.dataset.key;
        if (sortKey === key) {
            sortDir = -sortDir;
        } else {
            sortKey = key;
            sortDir = 1;
        }
        document.querySelectorAll('th.sortable').forEach(x => x.classList.remove('asc', 'desc'));
        th.classList.add(sortDir === 1 ? 'asc' : 'desc');
        currentList.sort((a, b) => {
            const A = (a[key] || '').toLowerCase();
            const B = (b[key] || '').toLowerCase();
            return A.localeCompare(B) * sortDir;
        });
        render(currentList);
    });
});

function toCSV(list) {
    const rows = [["Fantôme", "Preuves", "Caractéristiques", "Indices pratiques"]];
    list.forEach(g => rows.push([g.name, g.evidence, g.traits, g.hints]));
    return rows.map(r => r.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(',')).join('\n');
}

document.getElementById('export').addEventListener('click', () => {
    const csv = toCSV(currentList);
    const blob = new Blob([csv], {type: 'text/csv;charset=utf-8;'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Phasmophobia_Fantomes.csv';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
});

document.getElementById('print').addEventListener('click', () => {
    window.print();
});

document.getElementById('reset').addEventListener('click', () => {
    searchInput.value = '';
    evidenceFilters.querySelectorAll('input:checked').forEach(cb => cb.checked = false);
    render(GHOSTS);
    currentList = GHOSTS.slice();
    document.querySelectorAll('th.sortable').forEach(x => x.classList.remove('asc', 'desc'));
    sortKey = null;
    sortDir = 1;
});

searchInput.addEventListener('input', applyFilters);
evidenceFilters.addEventListener('change', applyFilters);

// Initialisation
render(GHOSTS);
currentList = GHOSTS.slice();
