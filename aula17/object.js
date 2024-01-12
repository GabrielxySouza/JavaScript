let amigo = {nome: 'José', sexo: 'M', peso1: 85.4, peso2: 85.4,
engordar(p=0){
    console.log('Engordou!')
    this.peso2 += p
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesava ${amigo.peso1} e agora pesa ${amigo.peso2}`)