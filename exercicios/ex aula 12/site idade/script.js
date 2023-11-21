function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = window.document.getElementById('iano')
    var res = document.querySelector('div#res')
    if(fAno.value.length == 0 || fAno.value > ano){ // 0 ou "" - valor vazio
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    }else{
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fAno.value)
        var gen = ''  
        var img = document.createElement('img')//criando o img dinamicamente
        img.setAttribute('id', 'foto') //criamos um id=foto para a img

        if(fsex[0].checked) { //masculino
            gen = 'homem'
            if(idade == 0){
                //bebê
                img.setAttribute('src', 'imagens/bebe-m.png') //busca a imagem e atribui ao id img
            } else if (idade >=1 && idade <= 10){
                //criança
                img.setAttribute('src', 'imagens/crianca-m.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/jovem-m.png')
            }else if( idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso-m.png')
            }
        } else if(fsex[1].checked) { //feminino
            gen = 'mulher'
            if(idade == 0){
                //bebê
                img.setAttribute('src', 'imagens/bebe-f.png') //busca a imagem e atribui ao id img
            } else if (idade >=1 && idade <= 10){
                //criança
                img.setAttribute('src', 'imagens/crianca-f.png') 
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/jovem-f.png') 
            }else if( idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adulto-f.png') 
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso-f.png') 
            }
        }
        res.style.textAlign = 'center' //centralizar texto
        res.innerHTML = `detectamos ${gen} com ${idade} anos.`
        res.appendChild(img) //adicona um elemento, no caso vai ser a img 
    }

}