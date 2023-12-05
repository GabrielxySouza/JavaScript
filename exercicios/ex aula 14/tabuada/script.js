function gerar(){
    var num = document.getElementById('inum')
    var tab = document.getElementById('itab')
    if(num.value.length == 0){
        window.alert('Digite um número!')
    }else{
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = '' //limpa a tabuada antes de começar o processo *para que em uma segunda tabuada não fique gerando abaixo da anterior
        while(c <= 10){
            let most = document.createElement('option')
            most.text = `${n} x ${c} = ${n*c}`
            most.value = `tab${c}`//valor de cada item da tabela
            tab.appendChild(most)
            c++
        }
    }  
}  