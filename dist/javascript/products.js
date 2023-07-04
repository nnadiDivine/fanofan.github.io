
const stars = document.querySelectorAll(".rate");
const starr = document.querySelectorAll(".ratea");

stars.forEach((star, clicked) => {
    star.addEventListener('click', () => {
        stars.forEach((otherstars, otherindx) => {
            if (otherindx <= clicked) {
                otherstars.classList.add("rated")
                document.querySelector("#ratee").classList.remove("none")
                // document.querySelector("#invisible").classList.add("rated")
            }
        });
    });
});

starr.forEach((star, clicked) => {
    star.addEventListener('click', () => {
        starr.forEach((otherstars, otherindx) => {
            if (otherindx <= clicked) {
                otherstars.classList.add("rated")
                document.querySelector("#ratic").classList.remove("none")

            }
        });
    });
});


function rate() {
    document.querySelector("#invisible").classList.add("rated")
}
function ratic() {
    document.querySelector("#invisible2").classList.add("rated")
}