(function() {
    function clickHandler() {
        console.log('hi ... ' + message)
    }

    //  geta reference to myButton

    let myButton = document.getElementById('myButton');
    myButton.addEventListener('click', function() {clickHandler('hi from life')});
})