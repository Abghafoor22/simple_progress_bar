let precent = document.querySelector('.precent');
let progress = document.querySelector('.progress');
let count = 4;
let per = 16;
let loading = setInterval(animate,20)
function animate(){
    if (count == 80 && per == 320) {
        console.log("hi ima working");
        clearInterval(loading)
    }else{
        per = per + 4;
        count = count + 1;
        progress.style.width = per + "px"
        precent.textContent = count + "%"
    }
}


