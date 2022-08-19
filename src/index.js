let nasaData

function general_fetch(url) {
    return fetch(url).then(res => { return res.json() })
}

general_fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY").then((data) => {
    console.log(data)

    nasaData = data.photos

    nasaData.forEach(photo => {
        createImage(photo)

    })

   
})

function createImage(photo) {
    let paragraph = document.getElementById("p1")
    let img = document.createElement('img')
    img.src = photo.img_src
    paragraph.append(img);
}
