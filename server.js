fetch('troops.json').then(response => response.json()).then(troops => {
    console.log(troops)
})
