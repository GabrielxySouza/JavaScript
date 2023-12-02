function gerar(){
    var num = document.getElementById('inum')
    num = Number()
    var tab = document.getElementById('itab')
    var most = document.getElementById('most')
    var c = 1
    tab == num
    while(c <= 10){
        most.innerHTML = `${num} x ${c} = ${tab}`
        tab = num*c
        c++
    }
}