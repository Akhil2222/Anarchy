fetch('troops.json').then(response => response.json()).then(data => {
    console.log(data)
    troops = data;
        
})