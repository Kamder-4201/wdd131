// Code descriptions added with AI //

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5087-main.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
  templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
  templeName: "Cebu City Philippines",
    location: "Cebu City, Philippines",
    dedicated: "2010, June, 13",
    area: 29556,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/_temp/133-Cebu-City-Philippines-Temple.jpg"
  },
  {
  templeName: "Manila Philippines",
    location: "Quezon City, Philippines",
    dedicated: "1984, September, 25-27",
    area: 26683,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/_temp/029-Manila-Philippines-Temple.jpg"
  },
  {
  templeName: "Bacolod Philippines",
    location: "Bacolod City, Philippines",
    dedicated: "2026, May, 31",
    area: 27895,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/bacolod-philippines-temple/bacolod-philippines-temple-76238-main.jpg"
  },
  {
  templeName: "Davao Philippines",
    location: "Davao City, Philippines",
    dedicated: "2026, May, 3",
    area: 18450,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/davao-philippines-temple/davao-philippines-temple-69513-main.jpg"
  },
  {
  templeName: "Urdaneta Philippines",
    location: "Urdaneta City, Philippines",
    dedicated: "2024, April, 28",
    area: 32604,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/davao-philippines-temple/davao-philippines-temple-69513-main.jpg"
  },
  // Add more temple objects here...
];

const gallery = document.querySelector("#temple-gallery");

function createTempleCard(temple) {
  const card = document.createElement("section");
  card.classList.add("temple-card");

  card.innerHTML = `
    <h2>${temple.templeName}</h2>
    <p><span class="label">Location:</span> ${temple.location}</p>
    <p><span class="label">Dedicated:</span> ${temple.dedicated}</p>
    <p><span class="label">Size:</span> ${temple.area} sq ft</p>
    <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy" width="400" height="250">
  `;

  return card;
}

function displayTemples(templeList) {
  gallery.innerHTML = ""; // clear old cards first
  templeList.forEach((temple) => {
    gallery.appendChild(createTempleCard(temple));
  });
}

displayTemples(temples);

// Get the year from strings like "
function getYear(temple) {
  return parseInt(temple.dedicated);
}

const filters = {
  home:  () => temples,
  old:   () => temples.filter((t) => getYear(t) < 1900),
  new:   () => temples.filter((t) => getYear(t) > 2000),
  large: () => temples.filter((t) => t.area > 90000),
  small: () => temples.filter((t) => t.area < 10000),
};

const navLinks = document.querySelectorAll("nav a");
const pageTitle = document.querySelector("h1");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();                 // stop the "#" jump
    const type = link.dataset.filter;       // "old", "new", ...
    displayTemples(filters[type]());        // run that filter, then draw
    pageTitle.textContent = link.textContent;  // Home, Old, New, ...
  });
});