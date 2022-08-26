function showtroops(imgdata){
    var imgs = []
    for(var i in imgdata){
        for(var j in imgdata[i]){
            imgs.push(j)
        }
    }
    return imgs
}
