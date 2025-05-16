const url = 'data/members.json';
const container = document.querySelector('#directory');
const gridBtn = document.querySelector('#gridBtn');
const listBtn = document.querySelector('#listBtn');

async function getMembers() {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Network response was not ok');
    const members = await response.json();
    displayMembers(members);
  } catch (error) {
    container.innerHTML = `<p>Erreur lors du chargement des données : ${error.message}</p>`;
  }
}

const displayMembers = (members) => {
  container.innerHTML = '';

  members.forEach(member => {
    const card = document.createElement('section');
    card.classList.add('card');

    const name = document.createElement('h2');
    name.textContent = member.name;

    const logo = document.createElement('img');
    logo.src = `images/${member.image}`;
    logo.alt = `${member.name} logo`;
    logo.loading = 'lazy';

    const description = document.createElement('p');
    description.textContent = member.description || '';

    const address = document.createElement('p');
    address.textContent = member.address;

    const phone = document.createElement('p');
    phone.textContent = `📞 ${member.phone}`;

    const website = document.createElement('a');
    website.href = member.website;
    website.target = '_blank';
    website.textContent = 'Visit Website';

    const level = document.createElement('p');
    const levels = ["", "Member", "Silver", "Gold"];
    level.textContent = `Level: ${levels[member.membershipLevel] || "Unknown"}`;

    card.append(name, logo, description, address, phone, website, level);
    container.appendChild(card);
  });
};

gridBtn.addEventListener('click', () => {
  container.classList.add('grid');
  container.classList.remove('list');
});

listBtn.addEventListener('click', () => {
  container.classList.add('list');
  container.classList.remove('grid');
});

getMembers();
