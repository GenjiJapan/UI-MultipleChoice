var x = document.getElementById("no1__section")

function onscroll() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        const distance = document.documentElement.scrollTop
        x.style.transform = "translateY(" + distance * 0.5 + "px)"
        console.log(distance);
    }
}