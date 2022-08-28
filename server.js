fetch('troops.json').then(response => response.json()).then(troops => {
    console.log(troops)
    var img = showtroops(troops)
    for(var i of img){
        document.body.innerHTML += `<img src='Images/Troops/troop_${i}.svg' height='100px'/>`
    }
})
