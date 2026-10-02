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

        let element = createElement("h2", produkt.namn);
        articleElement.appendChild(element);

        element = createElement("p", produkt.beskrivning);
        articleElement.appendChild(element);

        //Bild har egen hantering --> Resten sköts med createElement()
        const imageElement = document.createElement("img");
        imageElement.src = produkt.bild;
        imageElement.alt = "Bild på " + produkt.typ;
        articleElement.appendChild(imageElement);

        element = createElement("p", produkt.pris + ":-");
        articleElement.appendChild(element);
        sectionRef.appendChild(articleElement);
    });
}
function createElement(el, text){
    const element = document.createElement(el);
    element.textContent = text;
    return element;
}

init();