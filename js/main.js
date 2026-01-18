
document.getElementsByClassName("hide")[0].addEventListener("click", hide)
counter = 0;

// show and hide menu

function hide() {
    if (counter % 2 == 0) {
        document.getElementById("navbar").style.display = "block";
        document.getElementsByClassName("hide")[0].setAttribute("src", "images/cross.png");
    }

    else {
        document.getElementById("navbar").style.display = "none";
        document.getElementsByClassName("hide")[0].setAttribute("src", "images/threeline.png");
    }

    counter++;
}


