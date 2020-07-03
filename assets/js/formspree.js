window.addEventListener("DOMContentLoaded", function () {

    let form = document.getElementById("my-form");
    let button = document.getElementById("my-form-button");
    let status = document.getElementById("my-form-status");


    function success() {
        form.reset();
        status.innerHTML = "Thanks, success for send!";
        setTimeout(function () {
            status.style.display = "none";
        }, 5000);
    }

    function error() {
        status.innerHTML = "Oops! There was a problem.";
    }

    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        let data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});


function ajax(method, url, data, success, error) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}