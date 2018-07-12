
var imageUrl = ['http://lorempixel.com/1024/768/nature/',
    'http://lorempixel.com/1024/768/people/',
    'http://lorempixel.com/1024/768/city/',
    'http://lorempixel.com/1024/768/nature/',
    'http://lorempixel.com/1024/768/people/',
    'http://lorempixel.com/1024/768/city/',
    'http://lorempixel.com/1024/768/nature/',
    'http://lorempixel.com/1024/768/people/',
    'http://lorempixel.com/1024/768/city/',
    'http://lorempixel.com/1024/768/nature/'
];



function getRandomInt(min, max) {
    return i =(Math.floor(Math.random() * (max - min)) + min);
}
///
    window.twttr = (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);

    t._e = [];
    t.ready = function(f) {
        t._e.push(f);
    };

    return t;
}(document, "script", "fjs"));


function openURL(url){
        window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
    }

    var apisrc="https://talaikis.com/api/quotes/random/";
    var f_getjson=function(json) {
    $(".quote").html( JSON.stringify(json.quote));
    $(".author").html( '<i>'+JSON.stringify(json.author)+'<i>');
    };

    $(document).ready(function() {$.getJSON(apisrc,f_getjson);
            var currentQuote = $.getJSON(apisrc,f_getjson);
            var currentAuthor = $.getJSON(apisrc,f_getjson);
        $(".btn").on("click", function() {
            $("body").css('background', 'url("' + imageUrl[getRandomInt(0, imageUrl.length)] + '")', "#ffe").css('background-size', 'cover')
        });

        $("#getMessage").on("click", function(){
            $.getJSON(apisrc,f_getjson);

        });

        $('#get_tweet').on('click', function() {
             {
                 var QQuote= document.getElementsByClassName('quote')["0"].innerText;
                //  console.log( QQuote)

                 var AAuthor= document.getElementsByClassName('author')["0"].innerText;
                //  console.log( AAuthor)

                openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + QQuote+' '+AAuthor );

            }
        });

    });