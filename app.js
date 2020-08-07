//quick testing of the js file to the html file
//console.log("testing connection");

//blocking out my global variables for the api calls
//endpoint calls and allowing the title of games to be searched out later 
//in the html
const baseURL = `https://api.rawg.io/api`
const endpointType = `/games?page_size=10&search=` 
let gameTitle = "" 
let queryURL = baseURL + endpointType + gameTitle
let collectionOfGames = []
//future implementation of multiple pages of search
//let nextPage = ""


//This snippit of code is sourced from Insomnia with help of getting the API
//call. Documentation can be found support.insomnia.rest -- edited with 
//variables and changes to the code to allow it to work within what I needed
//no key needed for this api just needs a header with user agent and the name
//of the application making the call
var apiSettings = {
    "async": true,
    "crossDomain": true,
    "url": queryURL,
    "method": "GET",
    "headers": {
    "user-agent": "Game LBR"
    },
    "data": "\n"
}

$(() => {
//function to call the api through the settings and pass the data from the on click
//event for the submit button to pull the first 10 results based on the search text
//entered from the search bar. Appends each search to 1 of the 10 divs in the search container
    getGame = () => {
        $.ajax(apiSettings).done(function (gameData) {
            // console.log(gameData);
            for (i = 0; i <= 9; i++){
                $('#search'+i).append($('#search'+i)).html(`
                <h2>${gameData.results[i].name}</h2>
                <img src="${gameData.results[i].background_image}" alt="background image" width="500">
                <h3>Release Date: ${gameData.results[i].released}</h3>
                <h3>Game Score: ${gameData.results[i].metacritic}</h3>
                <input type = "button" class = "search-btn" name = "add-to-collection" value = "Add">
                `)
            }
        //the submit button on the form grabs the text from the text box and places it in
        //the game title variable and then we redefine the queryurl and url in the api call
        //so that it updates to the new gametitle and then calls the getGame function
        $('.search-btn').on('click', (event) => {
            let target = $(event.target)
            let gameInfo = target.parent('div')
            //testing that the target parent div is actually the search result we're looking for
            // console.log(target.parent('div').get(0).childNodes)
                let nameID = gameInfo.get(0).childNodes[1].textContent
                //testing variable
                // console.log(nameID)
                let imgID = gameInfo.get(0).childNodes[3].outerHTML
                //testing variable
                // console.log(imgID)
                let releaseDate = gameInfo.get(0).childNodes[5].textContent
                //testing variable
                // console.log(releaseDate)
                let score = gameInfo.get(0).childNodes[7].textContent
                if (score == "Game Score: null"){
                    score = "No Review Score for this game"
                }
                //testing variable
                // console.log(score)
                gameCollection = {
                    name: nameID,
                    img: imgID,
                    releasedate: releaseDate,
                    score: score,
                }
                //testing object
                // console.log(gameCollection)
                //calls function to add game info to collection
                addToCollection(gameCollection)
            //testing if button was working
            // console.log("I'm working")
            //show random game button once there is a game in the collection
            $('#random-game').show()
        // addToCollection($('#search0'))
        // console.log(collectionOfGames)
        })
        });
    }
    //function for clicking on random button
    $('#random-game').on('click', (event) => {
        let randomGame = collectionOfGames[Math.floor(Math.random() * collectionOfGames.length)].name
        //alert box to show a game you should play from the collection
        alert("You should play " + randomGame + "!")
    })

    addToCollection = (game) => {
        //takes object from button press below game and adds to the collection array
        collectionOfGames.push(game)
        //wipe divs from top so they don't duplicate when array runs again
        $('#slideshow-container').empty()
        //testing the collection of games array
        // console.log(collectionOfGames)
        //loop to create divs that have a value of the image pulled from the api and attaches the div to the container for collection at the top
        for (i = 0; i < collectionOfGames.length; i++)
            $('#slideshow-container').append("<div id = "+ i +" class = 'card'>" + collectionOfGames[i].img + "</div>")
        //loop to go through the divs and rename the titles to the proper names
        for (i = 0; i < collectionOfGames.length; i++)
            $('#' + i).attr('title', collectionOfGames[i].name)
        //looop to append a div inside the div we created for collection to 
        // contain the title of the game which we'll show via overlay
        for (i=0; i < collectionOfGames.length; i++)
           $('#' + i).append(("<div id class = 'overlay'>" + collectionOfGames[i].name + "</div>"))
            
    }

    $('form').on('submit', (event) => {
        event.preventDefault()
        gameTitle = $('input[type="text"]').val()
        //this is to remove the spaces from the text entry and replace them with 
        //plus marks so that they insert better into the api calls -- friend told me to
        //look up that standard
        gameTitle = encodeURIComponent(gameTitle);
        queryURL = baseURL + endpointType + gameTitle
        apiSettings.url = queryURL
        //these logs are for testing that the url and game search bars are returning the right
        //value 
        // console.log(gameTitle)
        // console.log(queryURL)
        getGame()
        //sets text box to blank after submitting your search value and after the call to return
        //results is already submitted and returned
        $('#search-box').val('')
})

})