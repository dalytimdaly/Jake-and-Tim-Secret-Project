let nasaData
let currentData

function general_fetch(url) {
    return fetch(url).then(res => { return res.json() })
}

general_fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=JKPUIJZAatGpCWnlTbfIK1WVS7sOxcMqERcI78jJ').then((data) => {
    console.log(data)

    nasaData = data.photos

    console.log(nasaData[0])

    console.log(data.photos.keys())

    const newData = nasaData.map((nasaData) => {
    return Object.assign({}, nasaData, {"favorites": 0}, {"comments" : [{}]})})

    console.log(newData)



    let currentImage = document.getElementById('current-image')

    function createImage() {
        currentImage.src = newData[0].img_src
    }

    createImage()

    let displayId = document.getElementById('image-id')

    displayId.textContent = `CURRENT IMAGE: #0`

    // comment section

    let post = document.getElementById('comment-form')
    let commentSection = document.querySelector('#comments-section')

    post.addEventListener('submit', (event) => {
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
        let currentData = nasaData
        favoriteCount.textContent = `${count ++} FAVORITES`
        
    })

    // Search Database

    let searchBtn = document.querySelector('#search-form')

    searchBtn.addEventListener('submit', (e) => {
        e.preventDefault()
        searchItem = e.target.searchInput.value
        currentImage.src = nasaData[`${searchItem}`].img_src  
        displayId.textContent = `CURRENT IMAGE: #${searchItem}`
    })

 


    
// function to make the "GENERATE RANDOM IMAGE BUTTON" work

    let randomImgButton = document.querySelector('#random-generate');
        
    randomImgButton.addEventListener('click', (e) =>{
        let randomImgNumber = Math.floor(Math.random() * 856)
        currentImage.src = nasaData[`${randomImgNumber}`].img_src
        displayId.textContent = `CURRENT IMAGE: #${randomImgNumber}`
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


      let newVotes = document.querySelector('#votes').value
        currentCharacter.votes += parseInt(newVotes)
        voteTally.textContent = currentCharacter.votes
        voteForm.reset()
        updateVotes(currentCharacter.votes)
    })


*/



