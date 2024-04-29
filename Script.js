let precent = document.querySelector('.precent');
let progress = document.querySelector('.progress');
let count = 0;
let per = 0;
let loading = setInterval(animate,20)
function animate(){
    if (count == 70) {
        console.log("hi ima working");
        clearInterval(loading)
    }else{
        per = per + 4;
        count = count + 1;
        progress.style.width = per + "px"
        precent.textContent = count + "%"
    }
}


