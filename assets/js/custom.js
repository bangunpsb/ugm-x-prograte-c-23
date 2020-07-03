// toggle header
function burger() {
    let header = document.querySelector("#navbar");
    header.classList.toggle('click-active');
}

// slide click
let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    let i;
    let x = document.getElementsByClassName("slider");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

// search input
function mysearch() {
    let search_data = document.getElementById("search");
    let filter = search_data.value.toLowerCase();
    // console.log(filter);
    let data = document.getElementsByClassName("card");
    for (i = 0; i < data.length; i++) {
        loop = data[i].getElementsByTagName("p")[0];
        val_loop = loop.textContent || loop.innerText;
        if (val_loop.toLowerCase().indexOf(filter) > -1) {
            data[i].style.display = "";
        } else {
            data[i].style.display = "none";
        }
    }

}

// typed
let typed = new Typed('.typed', {
    strings: ["Web Developer.", "Mobile Apps Developer.", "Desktop Apps Developer.", "UI/UX Designer.", "System Analyst."],
    typeSpeed: 80,
    backSpeed: 80,
    loop: true
});

// modal
function getId(e) {
    const modal = document.getElementById(e);
    modal.style.display = "block";
    const span = document.getElementsByClassName("close");
    Array.from(span).forEach((el) => {
        el.onclick = function () {
            modal.style.display = "none";
        }
    });
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}