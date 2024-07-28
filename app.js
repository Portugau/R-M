const options = {method: 'GET', Headers: {accept: 'application/json'}};
const container = document.getElementById('personajes');

const pedirDatos = () => {
    fetch('https://rickandmortyapi.com/api/character', options)
        .then(response => response.json())
        .then(response => {
            response.results.map((personaje) => {
                const article = document.createElement('article');
                article.setAttribute('class', 'character');
                article.innerHTML = `
                <img src="${personaje.image}" alt="${personaje.name}">
                <h2>${personaje.name}</h2>
                <div class="container-space">
                <p>${personaje.species}</p>
                </div>`;
                container.appendChild(article);
            });
        })
        .catch(err => console.error(err));
}

pedirDatos();