console.log("Iniicio do java script")


let dados;
const ul = document.querySelector("#lista-links")
async function getData(){

    
    dadosJson = await fetch("https://api.thecatapi.com/v1/images/search?limit=10")
    let dados = await dadosJson.json();

    console.log("Dados da api : ", dadosJson)
    console.log("Dados da api : ", dados[0].url)
    

    dados.forEach(item => {
        const li = document.createElement("li")
        li.innerText = item.url

        ul.appendChild(li)
    });
}


