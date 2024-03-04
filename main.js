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
document.getElementById('fn').style.backgroundColor = '#FFFFFF';
document.getElementById('sn').style.backgroundColor = '#FFFFFF';
document.getElementById('thn').style.backgroundColor = '#FFFFFF';
  var img = document.getElementById('imm_sw');
  var maxPhotos = 3; 
  if (direction === 'prev') {   
    if(currentPhoto ==1)
    currentPhoto = maxPhotos;
else 
    currentPhoto = currentPhoto-1;
  } else if (direction === 'next') {
    if(currentPhoto ==maxPhotos) 
            currentPhoto = 1;
        else 
            currentPhoto = currentPhoto+1;
  }
  if(currentPhoto==1)
    document.getElementById('fn').style.backgroundColor = '#00FFF0';
  if(currentPhoto==2)
    document.getElementById('sn').style.backgroundColor = '#00FFF0';
  if(currentPhoto==3)
    document.getElementById('thn').style.backgroundColor = '#00FFF0';
  
  img.src = 'img/' + currentPhoto + 'a.png';
}