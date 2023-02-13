$('#score').on('click', () => {
    $('.welcome').hide();
    const randomScore = Math.round(Math.random() * (1000000 - -1000000 ) + -1000000);
    score = randomScore.toLocaleString();
    if(randomScore > 0){
        $("#scoreResult").html(`+${score} <br> Welcome to the Good Place!`).removeClass('badPlace').addClass('goodPlace');
    }else if( randomScore < 0){
        $("#scoreResult").html(`${score} <br> Hey, Ya Doink, You're in the Bad Place.`).removeClass('goodPlace').addClass('badPlace');
    }else{
        $("#scoreResult").html(`${score} <br> Welcome to the Medium Place`).removeClass('badPlace goodPlace').addClass('mediumPlace');
    }
})