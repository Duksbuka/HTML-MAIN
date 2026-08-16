window.onload = function () {
    $("#gif").hide();
}

function getNumber() {
    $("#gif").show(); //Upon clicking, will show the gif

    fetch("http://number-trivia.com/random/math")
        .then(function (response) {
            //.then, palauttaa tässä Promisen (lupauksen), jota käytetään seuraavassa then-funktiossa. 
            return response.text(); //huom. tässä response tulee JSON-muodossa
        })
        .then(function (result) {
            $("#gif").hide(); //calls to hide the gif after the function of getting the API
            console.log(result);
            document.getElementById("answer").innerHTML += result + '<br>';
        })

        .catch(function (error) {
            //Jos lupaus epäonnistuu (eli lupaus on hylätty), tämä toiminto suoritetaan
            console.log(error);
        });
}