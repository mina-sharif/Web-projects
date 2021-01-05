let index = 0;

changeImage();

function changeImage() {
  
    let imageList = document.getElementsByClassName("slider");

    
    for (let i = 0; i < imageList.length; i++) {
        imageList[i].style.display = "none";
    }

    index++;

    if (index > imageList.length) {
        index = 1
        }    

    imageList[index-1].style.display = "block";  
    
    setTimeout(changeImage, 5000); 
}
