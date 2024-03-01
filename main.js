function like_click(element) {

    var filename = element.querySelector('img').src.substring(element.querySelector('img').src.lastIndexOf('/') + 1);

    if (filename == 'heart.png') 
        element.querySelector('img').src = 'img/filled_heart.png';
    else 
        element.querySelector('img').src = 'img/heart.png';
}
