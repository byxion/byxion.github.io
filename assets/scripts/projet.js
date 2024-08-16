const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  const img = card.getAttribute('data-img');
  card.style.backgroundImage = `url(${img})`;
});

// Récupérez tous les boutons "En savoir plus" et le modal
const btns = document.querySelectorAll('.project-btn');
const modal = document.getElementById('modal');

// Récupérez les éléments dans le modal pour afficher les informations de chaque projet
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');

// Ajoutez un gestionnaire d'événements à chaque bouton "En savoir plus"
btns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Récupérez les informations du projet à partir des attributs de données
    const title = btn.dataset.title;
    const body = btn.dataset.body;

    // Mettez à jour le contenu du modal avec les informations du projet
    modalTitle.innerText = title;
    modalBody.innerText = body;

    // Get the link from data-link attribute and put it in the href with id = link-github
    const link = btn.dataset.link;
    const linkGithub = document.getElementById('link-github');

    linkGithub.href = link;

    // Affichez le modal
    modal.classList.add('show');
  });
});

// Ajoutez un gestionnaire d'événements pour fermer le modal lorsque l'utilisateur clique sur la croix ou en dehors du modal
modal.addEventListener('click', e => {
  if (e.target.classList.contains('close') || e.target === modal) {
    modal.classList.remove('show');
  }
});
