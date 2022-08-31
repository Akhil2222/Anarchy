fetch('troops.json').then(response => response.json()).then(troops => {
    console.log(troops)
    var img = showtroops(troops)
    for(var i of img){
        document.body.innerHTML += `<img src='Images/Troops/troop_${i}.svg' height='100px'/>`
    }
    let code = createSeed()
    console.log(code)
    console.log(parseInt(code,36).toString(16),parseInt(code,36).toString(16).length)
    console.log(genval(code,10))
})
function createSeed(){
    let code = Math.floor((16**9)+Math.random()*(16**10 - 16**9)).toString(36)
    return code
}
function genval(code,len){
    var recent = code
    console.log(recent)
    var codes = []

    for(var i = 0;i < len;i++){
        console.log(parseInt(recent,36).toString(16).length)
        recent = ((parseInt(recent,36)+(parseInt(recent.slice(3),36)**2))%16**10).toString(36)
        codes.push(recent)
    }
    return codes
}
function test_resource(codearr,posarr){

}