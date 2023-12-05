function gerar(){
    var num = document.getElementById('inum')
    var num = Number(num.value)
    var tab = document.getElementById('itab')
    var most = document.getElementById('most')
    var c = 1
    tab == num*c
    while(c <= 10){
        most.innerHTML = `${c} x ${num} = ${tab}`
        tab =  num*c
        c++
    }
} 