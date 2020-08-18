# Game LIBR
This project is setup to use API by RAWG IO. It is made to search through an api of hundreds of games to find the ones you own and then you can add those to your collection. The collection spans across the screen in stacking div cards that pull images and titles and show both in the collection along the top. When you add to your collection a random game button will appear and when clicked it'll send an alert window with what game you should play randomly selected from your collection. 
```javascript
\\\\\\\\\\\\\\\\
\\   Mario    \\
\\            \\
\\            \\
  \\        \\
  \\\\\\\\\\\\
```
:rocket: :tada: :octocat:
    
## [Live Site](https://game-libr.herokuapp.com/)

## Getting Started
To use the RAWG IO api you need to include user-agent in the header of the api call with the title of your application as the user-agent. You must also give credit to the api on the site or in the app for the functionality. 

## Prerequisites
You just need a code editor of choice for how this project is setup so far. It's just CSS, HTML, Javascript, and JQuery

Give examples
Installing
You'll need to tie in JQuery to your html through "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js" -- make sure this is referenced as a source script in your header html.
You'll need to get the font in your html and css through https://fonts.googleapis.com/css2?family=Abel&display=swap -- make sure this is referenced as a source stylesheet in your header html.
```html
<head>
    <link href="https://fonts.googleapis.com/css2?family=Abel&display=swap" rel="stylesheet">
    <title>Game LBR</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js" charset="utf-8"></script>
</head>
```


## Built With
HTML
Insomnia - API Testing
CSS
Javascript
JQuery
RAWG IO API -- documentation --> https://rawg.io/apidocs

## Versioning
I use GitHub for versioning. 

## Authors
Zach Doll
See also the list of contributors

## License
This project is licensed under the MIT License - see the LICENSE.md file for details

## Acknowledgments
codepen.io/william-goldsworthy for inspiration with card format at the top of page from his interactive cards
Shawn Barth for assisting with the text overlay on the divs by suggesting I look into it
wpshout.com/quick-guides/create-text-outline-css for the shadow on text tutorial that got the bold lines around the white text I was looking for on my divs
