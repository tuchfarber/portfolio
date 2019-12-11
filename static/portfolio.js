function lightbox(item, show){
    var width = window.innerWidth || window.document.documentElement.clientWidth || window.document.body.clientWidth;
    if(width > 1000){
        var lightbox = document.getElementById("lightbox");
        var lightbox_img = document.getElementById("lightbox_img");
        if(show){
            lightbox.style.display = "flex";
            lightbox_img.src = item.src;
        }else{
            lightbox.style.display = "none";
            lightbox_img.src = "";
        }
    }
}