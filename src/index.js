let nasaData

function general_fetch(url) {
    return fetch(url).then(res => { return res.json() })
}

<<<<<<< HEAD
general_fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY").then((data) => {
=======
general_fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY').then((data) => {
>>>>>>> 8e95b03172741a5074e6d23d2c73a1087bd50119
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
