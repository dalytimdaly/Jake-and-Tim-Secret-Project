let nasaData

function general_fetch(url) {
    return fetch(url).then(res => { return res.json() })
}

general_fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=JKPUIJZAatGpCWnlTbfIK1WVS7sOxcMqERcI78jJ').then((data) => {
    console.log(data)

    nasaData = data.photos
    console.log(nasaData[0])
    
    let currentImage = document.getElementById('current-image')

    // set this to randomly generate image from data set so that it's always different

    function createImage() {
        currentImage.src = nasaData[0].img_src
    }

    createImage()

    let displayId = document.getElementById('image-id')

    displayId.textContent = `CURRENT IMAGE: #${nasaData[0].id}`

    // comment section

    let post = document.getElementById('comment-form')
    let commentSection = document.querySelector('#comments-section')

    document.addEventListener('submit', (event) => {
        event.preventDefault()
        let newComment = document.createElement('p')
        newComment.textContent = post['commentInput'].value
        commentSection.appendChild(newComment)

    })  

    // favorite image

    let favorite = document.getElementById('favorite-button')
    let favoriteCount = document.getElementById('number-favorites')
    let count = 1

    favorite.addEventListener('click', (event) => {
        event.preventDefault()
        console.log("hi")
        favoriteCount.textContent = `${count ++} FAVORITES`

    })
    
    
})

// Append Favorite 

/*
    function appendFavorite() {
        let duckList = document.querySelector('#duck-nav')
        let img = document.createElement('img')
        img.src = duck.img_url
        duckList.appendChild(img);
        img.addEventListener('click', () => {
            loadDuck()
        })
    }
*/
// Search Database

    let searchBtn = document.querySelector('searchInput')

    searchBtn.addEventListener('submit', () => {
        
    })
