let num = [5, 8, 2, 9, 3,]
console.log(num) 
num[6] = 7 //adiciona um valor(7) em uma posição [6] (deveria ser posições [5], pois a contagem começa em 0)
num.push(1) // adiciona uma valor na última posição (v=1 p=7)
console.log(num) //mostra os valores depois das adições (1 empty item) vai aparecer no item vazio == item vazio
console.log(`Nosso vetor é o ${num}`) 
console.log(`O vetor tem ${num.length} posições`) //num.length mostra a quantidade de posições
/*Observe ao presionar F8 que fica uma espaço vazio (..., ,...). Isso acontece pois a posição do 7 é um a mais do que o número de posições do último valor, pois a contagem começa do 0 e não do 1*/
console.log(`O primeiro valor do vetor é ${num[0]}, e o quarto é ${num[3]}`) //mostra o valor da posição 
num.sort() //coloca os elementos em ordem crescente
console.log(num)

let pos = num.indexOf(8) //buscar em qual posição o valor está, no caso o valor (8)
//console.log(`O valor 8 está na posição ${pos}`) //obs: ele retorna um valor diferente do que espera (1) porquê usamos um num.sort. enão analise no terminal a posição verdaderia do valor procurado. se colocar (//) antes de num.sort ira aparecer na posição 1 

// se eu buscar um valor que não exite. ele retornará -1. para mudar isso faça uma condição
if(pos == -1){
    console.log('O valor não foi encontrado!')
} else{
    console.log(`O valor está na posição ${pos}`)
}