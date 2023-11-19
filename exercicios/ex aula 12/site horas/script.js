
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >=0 && hora <12){
        //Bom dia
        img.src = 'imagens/img-manhã.png'
    } else if (hora >= 12 && hora < 18){
        //Boa trade
        img.src = 'imagens/img-tarde.png'
    } else{
        //Boa noite
        img.src = 'imagens/img-noite.png'
    }

}
