// variables
let nasaData
let searchBtn = document.querySelector('#search-form')
let randomImgButton = document.querySelector('#random-generate');
let favorite = document.getElementById('favorite-button')
let favoriteCount = document.getElementById('number-favorites')
let post = document.getElementById('comment-form')
let commentSection = document.querySelector('#comments-section')
let displayId = document.getElementById('image-id')
let currentImage = document.getElementById('current-image')



//


fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=JKPUIJZAatGpCWnlTbfIK1WVS7sOxcMqERcI78jJ')
    .then(response => response.json())
    .then(nasaData => {
        console.log(nasaData)
        createImage(nasaData)
        renderCurrentImage(nasaData)
        renderComments(nasaData)
        createImageFavorite(nasaData)
        searchButton(nasaData)
        randomImage(nasaData)
        const newData = nasaData.map((nasaData) => {
            return Object.assign({}, nasaData, {"favorites": 0}, {"comments" : [{}]})})
            nasaData = data.photos

    

    })

    
    
 function createImage() {
        currentImage.src = newData[0].img_src
    }

 function renderCurrentImage(){
        let displayId = document.getElementById('image-id')
        displayId.textContent = `CURRENT IMAGE: #0`
    }



 function renderComments(){
        post.addEventListener('submit', (event) => {
            event.preventDefault()
            let selectedImage = currentImage
            let newComment = document.createElement('p')
            newComment.textContent = post['commentInput'].value
            //
            currentImage.comments = newComment.textContent
            console.log(currentImage.comments)
            console.log(selectedImage.comments)
            selectedImage.comments = newData.comments
            commentSection.appendChild(newComment)
            post.reset()
    
        })  
    }


    function createImageFavorite(){
        favorite.addEventListener('click', (event) => {
            event.preventDefault()
            let selectedImage = currentImage
            // console.log(currentImage.src)
            // console.log(selectedImage.src)
            favoriteCount.textContent = `${selectedImage.favorites} FAVORITES`
            let favList = document.querySelector('#favorited')
            let img = document.createElement('img')
            img.width = 200
            img.height = 100
            // console.log(selectedImage.src)
            img.src = selectedImage.src
            favList.appendChild(img);
        })
    }


    function searchButton(){
        searchBtn.addEventListener('submit', (e) => {
            e.preventDefault()
            searchItem = e.target.searchInput.value
            currentImage.src = nasaData[`${searchItem}`].img_src  
            displayId.textContent = `CURRENT IMAGE: #${searchItem}`
        })
    }
    

    function randomImage(){
        randomImgButton.addEventListener('click', (e) =>{
            let randomImgNumber = Math.floor(Math.random() * 856)
            currentImage.src = nasaData[`${randomImgNumber}`].img_src
            displayId.textContent = `CURRENT IMAGE: #${randomImgNumber}`
        })
    }

