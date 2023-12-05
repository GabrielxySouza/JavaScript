function Contar(){
    let ini = document.getElementById('i')
    let fim = document.getElementById('f')
    let passo = document.getElementById('p')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] faltam dados')
        res.innerHTML = 'Impossível contar!'
    }else{
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0 ){
            window.alert('Passo Inválido. Considerando passo 1')
            p = 1
        }
        if(i <f){
            //contagem crescete
            for(let c = i; c <= f; c += p){
                res.innerHTML += `\u{1F449} ${c} ` //\u{} substitui o u+ dos emojis
            }
            }else{
                //contagem regressiva
                for(let c = i; c >= f; c -= p){
                    res.innerHTML += `\u{1F449} ${c}`
                }
            }
                res.innerHTML += `\u{1F3C1}`
    }
}