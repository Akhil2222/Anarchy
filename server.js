fetch('troops.json').then(response => response.json()).then(troops => {
    console.log(troops)
})
function createSeed(){
    var str='abcdefghijklmnopqrstuvwxyz'
    var code = str[4 + Math.ceil(Math.random()*(str.length-4))]
    for(var i = 0;i < 7;i++){
        code+=str[Math.round(Math.random()*str.length)]
    }
    return code
}