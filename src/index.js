let nasaData
let newData
let currentData
let selectedImage

function general_fetch(url) {
    return fetch(url).then(res => { return res.json() })
}

general_fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=JKPUIJZAatGpCWnlTbfIK1WVS7sOxcMqERcI78jJ').then((data) => {
    
// Some nice declarations, getting arrays in order

    console.log(data)

    let nasaData

    nasaData = data.photos

    console.log(nasaData)
    
    nasaData.forEach(photo => {
        createImages(photo)
    })

    loadData(nasaData[0])
    
// Serious Functionality Below //

    function createImages (photo) {
        currentData = photo
        let photoList = document.querySelector('#allimages')
        let thumb = document.createElement('img')
        thumb.height = "10"
        thumb.width = "15"
        thumb.src = photo['img_src']
        photoList.appendChild(thumb);
        thumb.addEventListener('click', () => {
        loadData(photo);
        })
    }


    let currentImage = document.querySelector('#current-image')
    let displayId = document.getElementById('image-id')

    function loadData(photo) {
        currentData = photo
        let displayId = document.getElementById('image-id')
        let currentImage = document.querySelector('#current-image')
    
        displayId.textContent = `Current Image: #${photo['index']}`
        console.log(photo['index'])
        currentImage.setAttribute('src', photo['img_src'])
    }

    // favorite image

    let favorite = document.getElementById('favorite-button')

    let favoriteCollection = [{}]
    

    favorite.addEventListener('click', (event) => {
        event.preventDefault()
        let favList = document.querySelector('#favorited')
        let newFaveImg = document.createElement('img')
        newFaveImg.src = currentData.img_src
        Object.assign(newFaveImg, {"id": currentData.id}, {"img_src": currentData.img_src})
        newFaveImg.width = 100
        newFaveImg.height = 100
        console.log(newFaveImg)
        favList.appendChild(newFaveImg);
        favoriteCollection.push(newFaveImg)
        newFaveImg.addEventListener('click', () => {
            loadData(newFaveImg)
        })
    })

    // Search Database

    let searchBtn = document.querySelector('#search-form')

    searchBtn.addEventListener('submit', (e) => {
        e.preventDefault()
        searchItem = e.target.searchInput.value
        currentImage.src = nasaData[`${searchItem}`].img_src 
        currentData.img_src = nasaData[`${searchItem}`].img_src 
        displayId.textContent = `Current Image: # ${searchItem}`
        searchBtn.reset()
    })
    
// function to make the "GENERATE RANDOM IMAGE BUTTON" work

    let randomImgButton = document.querySelector('#random-generate');
        
    randomImgButton.addEventListener('click', (e) =>{
        let randomImgNumber = Math.floor(Math.random() * 856)
        currentImage.src = nasaData[`${randomImgNumber}`].img_src
        currentData.img_src = nasaData[`${randomImgNumber}`].img_src
        displayId.textContent = `Current Image: #${randomImgNumber}`
    })

})

