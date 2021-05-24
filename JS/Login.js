window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

function myFunction(e) {
    e.preventDefault();

    var begin = confirm("Are u sure about that!!");

    if (begin == true) {
        window.location.href = "https://google.com.vn";
    }
}