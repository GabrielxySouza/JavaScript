//Exemplo de repetições simples (teste lógico no inicio)

var c = 1
while (c <= 4){
    console.log('Tudo bem?')
    c++ //c = c + 1
}

//contando passos  *repare que ao exercutar (F8) ele não começa do 1, isso porquê os primeiros passos foram o do laço acima...  
while (c <= 9){
    console.log(`Passo ${c}`)
    c++ //c = c + 1
}

// Estrutura de repetição com teste lógico no final *no terminal a contagem começa em 1 até 6, já que usamos outra var (c2)

var c2 = 1
do{
    console.log(`Passo ${c2}`)
    c2++
} while (c2 <= 6)