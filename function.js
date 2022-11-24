var a = document.getElementById("a")
var quemsomosmodifier = document.getElementById("quemsomosmodifier")
var mainimg = document.getElementById("mainimg")
var oii = document.getElementById("oii")
var contato = document.getElementById("contato")
var produtos = document.getElementById("produtos")
var equipe = document.getElementById("equipe")
var equipeimg = document.getElementById("equipeimg")
var insta = document.getElementById("insta")

a.addEventListener("click", (event)=>{
    event.preventDefault()
    quemsomosmodifier.style.display = "flex"
    equipeimg.style.display = "none"
    mainimg.style.display = "none"
    insta.style.display = "none"
    oii.style.backgroundColor = "#8854f7"
    quemsomosmodifier.style.backgroundColor = "#040322"
    quemsomosmodifier.style.color = "white"
    quemsomosmodifier.innerText = "A RSL é uma empresa de segurança especialista na proteção da integridade material e eventual, onde nosso principal objetivo é oferecer segurança, fornecendo métodos capazes de proteger sua casa ou residência de certas ameaças"
})

contato.addEventListener("click", (event)=>{
    event.preventDefault()
    quemsomosmodifier.style.display = "flex"
    equipeimg.style.display = "none"
    mainimg.style.display = "none"
    insta.style.display = "flex"
    insta.style.backgroundColor = "#040322"
    insta.style.color = "white"
    oii.style.backgroundColor = "#8854f7"
    quemsomosmodifier.style.backgroundColor = "#040322"
    quemsomosmodifier.style.color = "white"
    quemsomosmodifier.innerText = "wa.me/+5521996268914"
    insta.innerText = "@rsl.security"
})

equipe.addEventListener("click", (event)=>{
    event.preventDefault()
    equipeimg.style.display = "flex"
    quemsomosmodifier.style.display = "none"
    mainimg.style.display = "none"
    oii.style.backgroundColor = "#8854f7"
    quemsomosmodifier.style.backgroundColor = "#040322"
    quemsomosmodifier.style.color = "white"
    insta.style.display = "none"
})

produtos.addEventListener("click", (event)=>{
    event.preventDefault()
    insta.style.display = "none"
    quemsomosmodifier.style.display = "none"
    equipeimg.style.display = "none"
    mainimg.style.display = "flex"
    oii.style.backgroundColor = "#8854f7"
    quemsomosmodifier.style.backgroundColor = "#040322"
    quemsomosmodifier.style.color = "white"

})