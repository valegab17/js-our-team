const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

//mostro in pagina le cards dei membri del team 
const output = document.querySelector(".team-container");

//richiamo la funzione per far spuntare le cards membri 
teamCards()

//selezione form 

const form = document.getElementById("member-form");
const newName = document.getElementById('name');
const newRole = document.getElementById('role');
const newEmail = document.getElementById('email');
const newImage = document.getElementById('image');


//aggiungo submit al form per aggiungere nuovo membro 
form.addEventListener("submit", addMember);

//Mostro le cards in pagina 

function teamCards(){ //mi richiamo team cards
  let cards = "";
  //ciclo l'array dei membri 
  for (let i = 0; i < teamMembers.length; i++){
    const { name, role , email, img } = teamMembers[i];
  //Genero HTML aggiungendola all'output finale ad ogni interazione 
cards += `
  <div class="col-md-4 col-12">
    <div class="team-card bg-dark text-white d-flex gap-3 p-3 h-100">
      <div class="card-image">
        <img src="${img}" alt="${name}" class="img-fluid" style="width:100px; height:100px">
      </div>
      <div class="card-text">
        <h3 class="h5 mb-1">${name}</h3>
        <p class="mb-1">${role}</p>
        <p class="mb-0">${email}</p>
      </div>
    </div>
  </div>
`;
  }
//output
output.innerHTML = cards; 
};

// funzione per aggiungere nuovo membro
function addMember(e) {
  e.preventDefault();

  // prendo valori input **senza trim**
  const name = newName.value;
  const role = newRole.value;
  const email = newEmail.value;
  const img = newImage.value;

  // creo oggetto nuovo membro
  const newMember = { name, role, email, img };

  // aggiungo all'array
  teamMembers.push(newMember);

    // aggiorno le card in pagina
  teamCards();

    // resetto il form
  form.reset();

}