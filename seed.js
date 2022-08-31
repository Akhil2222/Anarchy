function createSeed(){
    let code = Math.floor((16**9)+Math.random()*(16**10 - 16**9)).toString(36)
    return code
}
function genval(code,len){
    var recent = code
    console.log(recent)
    var codes = []
    var multiplier = parseInt(code[0],36)
    for(var i = 0;i < len;i++){
        
        recent = (multiplier*parseInt(recent,36) % 16**11).toString(36)
        codes.push(recent)
    }
    return codes
}
function test_resource(code,x){
    var sum = 0;
    var parseStr = parseInt(code,36).toString(16)
    for(var i of parseStr){
        sum += Math.sin((1/parseInt(i,16))*x)
    }
    return sum;
}