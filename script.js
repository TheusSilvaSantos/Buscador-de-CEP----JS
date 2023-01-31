document.querySelector(".submitArea input").addEventListener("click", () =>{
    let input = document.querySelector(".inputArea input").value
    let url = `https://viacep.com.br/ws/${input}/json/`

    fetch(url)
    .then((response)=>{
        let json = response.json()
        return json
    })
    .then((json)=>{
        document.querySelector(".cepBigArea").style.display = "none"
        document.querySelector(".warningError").style.display = "none"
        document.querySelector(".warningReloading").style.display = "block"

        //Adicionando dados
        document.querySelector(".city_UF").innerHTML =`${json.localidade} - ${json.uf}`
        document.querySelector(".address").innerHTML = json.logradouro
        document.querySelector(".neighborhood").innerHTML = json.bairro

        setTimeout(()=>{
            document.querySelector(".warningReloading").style.display = "none"
            document.querySelector(".cepBigArea").style.display = "flex"
        }, 300)
        

    })
    .catch(()=>{
        document.querySelector(".cepBigArea").style.display = "none"
        document.querySelector(".warningReloading").style.display = "block"
        document.querySelector(".warningError").style.display = "none"

        setTimeout(()=>{
            document.querySelector(".warningReloading").style.display = "none"
            document.querySelector(".warningError").style.display = "block"
        }, 300)
    })


    
    
    
    
    







    
    
    /*
    let results = await fetch(url)
    let json = await results.json()

    
    if(json.localidade === ""){
        document.querySelector(".warningError").style.display = "block"
        console.log("EEEERRROOOOOOOOOOOOOOOOOOOOOOOO")
    }
    else{
        document.querySelector(".warningError").style.display = "none"
        document.querySelector(".warningReloading").style.display = "block"

        //Adicionando dados na tela
        document.querySelector(".city_UF").innerHTML = `${json.localidade} - ${json.uf}`
        document.querySelector(".address").innerHTML = json.logradouro
        document.querySelector(".neighborhood").innerHTML = json.bairro
        document.querySelector(".cepBigArea").style.display = "flex"
        console.log(json)
        console.log("input", input.length)
    }
    */
})
