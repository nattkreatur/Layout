let sectionRef;

function init() {
    sectionRef = document.getElementById("section");
    fetchData();
}

async function fetchData() {
    try{
        const response = await fetch('produkter.json')
        console.log(response);
        const data = await response.json();
        console.log(data);
        createArticles(data);
    }catch(error)
    {
        console.error("Error fetching data:", error);
    }
}

function createArticles(data) {
    data.produkter.forEach(produkt =>{
        const articleElement = document.createElement("article");

        const titleElement = document.createElement("h2");
        titleElement.textContent = produkt.namn;

        const contentElement = document.createElement("p");
        contentElement.textContent = produkt.beskrivning;

        const imageElement = document.createElement("img");
        imageElement.src = produkt.bild;

        const priceElement = document.createElement("p");
        priceElement.textContent = produkt.pris + ":-";
        
        articleElement.appendChild(titleElement);
        articleElement.appendChild(contentElement);
        articleElement.appendChild(imageElement);
        articleElement.appendChild(priceElement);

        sectionRef.appendChild(articleElement);

    })
}

init();