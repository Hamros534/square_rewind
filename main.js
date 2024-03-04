function like_click(element) {
    var img = element.querySelector('img');
    var filename = img.src.substring(img.src.lastIndexOf('/') + 1);

    if (filename == 'heart.png') {
        console.log(filename);
        img.src = 'img/filled_heart.png';
    }
    else {
        img.src = 'img/heart.png';
        img.style.opacity = 1;
        return;
    }
    var cnt = 0;
    function increaseOpacity() {
        if (cnt <= 100) {
            img.style.opacity = cnt / 100; 
            cnt+=2;
            setTimeout(increaseOpacity, 10); 
        }
    }
    increaseOpacity();
}

function viewmore(){
    window.location.pathname = "/catalog.html";
}

var currentPhoto = 1; 

function changePhoto(direction) {
  var img = document.getElementById('imm_sw');
  var maxPhotos = 3; 
  if (direction === 'prev') {
    currentPhoto = (currentPhoto - 1 + maxPhotos) % maxPhotos;
  } else if (direction === 'next') {
    currentPhoto = (currentPhoto + 1) % maxPhotos;
  }

  img.src = 'img/' + currentPhoto + 'a.jfif';
}