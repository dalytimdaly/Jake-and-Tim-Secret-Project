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

    

    loadData(nasaData[0])
    

// Serious Functionality Below //

    function createImages (photo) {
        currentData = photo
        let photoList = document.querySelector('#allimages')
        let thumb = document.createElement('img')
        thumb.height = "20"
        thumb.width = "35"
        thumb.src = photo.image_src
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
    
        displayId.textContent = `Current Image: #${photo.id}`
        currentImage.setAttribute('src', photo['img_src'])
    }

    // comment section

    let post = document.getElementById('comment-form')
    let commentSection = document.querySelector('#comments-section')

    post.addEventListener('submit', (event) => {
        event.preventDefault()
        let selectedImage = currentImage
        let newComment = document.createElement('p')
        newComment.textContent = post['commentInput'].value
        currentImage.comments = newComment.textContent
        console.log(currentImage.comments)
        console.log(selectedImage.comments)
        selectedImage.comments = newData.comments
        commentSection.appendChild(newComment)
        post.reset()
    })

    // favorite image

    let favorite = document.getElementById('favorite-button')

    let favoriteCollection = [{}]
    

    favorite.addEventListener('click', (event) => {
        event.preventDefault()
        let favList = document.querySelector('#favorited')
        let newFaveImg = document.createElement('img')
        newFaveImg.src = currentData.img_src
        Object.assign(newFaveImg, {"id": currentData.id}, {"img_src": currentData.img_src})
        newFaveImg.width = 200
        newFaveImg.height = 100
        console.log(newFaveImg)
        favList.appendChild(newFaveImg);
        favoriteCollection.push(newFaveImg)
        newFaveImg.addEventListener('click', () => {
            loadData(newFaveImg)
            console.log(newFaveImg)
        })
    })


    // Search Database

    let searchBtn = document.querySelector('#search-form')

    searchBtn.addEventListener('submit', (e) => {
        e.preventDefault()
        searchItem = e.target.searchInput.value
        currentImage.src = nasaData[`${searchItem}`].img_src 
        currentData.img_src = nasaData[`${searchItem}`].img_src 
        displayId.textContent = `Current Image: # ${nasaData[searchItem].id}`
    })
    
// function to make the "GENERATE RANDOM IMAGE BUTTON" work

    let randomImgButton = document.querySelector('#random-generate');
        
    randomImgButton.addEventListener('click', (e) =>{
        let randomImgNumber = Math.floor(Math.random() * 856)
        currentImage.src = nasaData[`${randomImgNumber}`].img_src
        currentData.img_src = nasaData[`${randomImgNumber}`].img_src
        displayId.textContent = `Current Image: #${nasaData[randomImgNumber].id}`
    })

})

