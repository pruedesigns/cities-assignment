// End each variable declaration with ;
var input = $('.city-type');
button = $('.submit-btn');



button.click (function(){

    event.preventDefault();

    var cityType = input.val();
    console.log (cityType);

  
    cityType = cityType.toLowerCase().trim();

    if (cityType == 'sf' || cityType == 'san francisco' || cityType == 'bay area') {

        $('body').css('background-image','url(images/sf.jpg)');

    }

    else if(cityType == 'syd' || cityType == 'sydney' || cityType == 'sidney'){
        $('body').css('background-image','url(images/sydney.jpg)');   
    }

    else if(cityType == 'la' || cityType == 'los angeles' || cityType == 'los-angeles'){
        $('body').css('background-image','url(images/la.jpg)'); 

    }   
    
    else if(cityType == 'ny' || cityType == 'new york' || cityType == 'nyc'){
        $('body').css('background-image','url(images/nyc.jpg)'); 

    }  

    else if(cityType == 'aus' || cityType == 'new york' || cityType == 'nyc'){
        $('body').css('background-image','url(images/austin.jpg)'); 

    } 



});





  

    // else if (cityType == 'syd' || cityType == 'sydney' || cityType == 'sidney'){
    // $('body').css('background-image','url(images/sydney.jpg)');   

    // }

    // else if (cityType == 'la' || cityType == 'los angeles' || cityType == 'los-angeles'){
    // $('body').css('background-image','url(images/la.jpg)');  


   // Alternative - add a class to the body:
        //$('body').attr('class','sf');