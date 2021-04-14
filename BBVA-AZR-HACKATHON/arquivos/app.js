$(document).ready(function () {
    $(".banner-ld-bebes").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        center: true,
        autoplay: true,
        autoplayTimeout: 10000,
        margin: 25,
        navText: ['<img src="./arquivos/arrow-landing20-left.png" alt="" />','<img src="./arquivos/arrow-landing20-right.png" alt="" />'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $(".moments").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        center: true,
    /*     autoplay: true,
        autoplayTimeout: 5000, */
        margin: 25,
        navText: ['<img src="./arquivos/arrow-landing20-left.png" alt="" />','<img src="./arquivos/arrow-landing20-right.png" alt="" />'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $(".banner-ld-productos").owlCarousel({
        items: 5,
        loop: true,
        nav: true,
        center: true,
    /*     autoplay: true,
        autoplayTimeout: 5000, */
        margin: 25,
        navText: ['<img src="./arquivos/arrow-landing20-left.png" alt="" />','<img src="./arquivos/arrow-landing20-right.png" alt="" />'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

})

  // This is called with the results from from FB.getLoginStatus().
function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
      if (response.status === 'connected') {
          console.log(status);
        // Logged into your app and Facebook.
        testAPI();

    } else if (response.status === 'not_authorized') {
        // The person is logged into Facebook, but not your app.
        document.getElementById('status').innerHTML = 'Login with Facebook ';
    } else {
        // The person is not logged into Facebook, so we're not sure if
        // they are logged into this app or not.
        document.getElementById('status').innerHTML = 'Login with Facebook ';
    }
}
// This function is called when someone finishes with the Login
// Button. See the onlogin handler attached to it in the sample
// code below.
function checkLoginState() {
    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });
}

window.fbAsyncInit = function () {
    FB.init({
        appId: '193407232403208', //'733808277296296',
        cookie: true, // enable cookies to allow the server to access 
        // the session
        xfbml: true, // parse social plugins on this page
        version: 'v2.2' // use version 2.2
    });
    // Now that we've initialized the JavaScript SDK, we call 
    // FB.getLoginStatus(). This function gets the state of the
    // person visiting this page and can return one of three states to
    // the callback you provide. They can be:
    //
    // 1. Logged into your app ('connected')
    // 2. Logged into Facebook, but not your app ('not_authorized')
    // 3. Not logged into Facebook and can't tell if they are logged into
    // your app or not.
    //
    // These three cases are handled in the callback function.

    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });
};
// Load the SDK asynchronously
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id))
        return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Here we run a very simple test of the Graph API after login is
// successful. See statusChangeCallback() for when this call is made.
function testAPI() {
    //document.getElementById('btnIngresar').style.visibility = 'visible';
    console.log('Welcome! Fetching your information.... ');
    FB.api('/me?fields=name,email', function (response) {
        console.log(response)
        console.log('Successful login for: ' + response.name);
        document.getElementById("status").innerHTML = '<p>Bienvenido ' + response.name + '!,... Ahora puedes ingresar tu nro. de documento</p>'
    });
}