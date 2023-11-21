
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    if (hora >=0 && hora <12){
        //Bom dia
        msg.innerHTML = `Bom dia! Agora são ${hora} horas.`
        img.src = 'imagens/img-manhã.png'
        document.body.style.background = '#FFD75D'
    } else if (hora >= 12 && hora < 18){
        //Boa trade
        msg.innerHTML = `Boa tarde! Agora são ${hora} horas.`
        img.src = 'imagens/img-tarde.png'
        document.body.style.background = '#D68B51'
    } else{
        //Boa noite
        msg.innerHTML = `Boa noite! Agora são ${hora} horas.`
        img.src = 'imagens/img-noite.png'
        document.body.style.background = '#00113F'
    }

}
