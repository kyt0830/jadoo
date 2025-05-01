
const book_a_trip = document.querySelector(".book_a_trip");
const book_a_trip_OST = book_a_trip.offsetTop;
const book_a_trip_height = book_a_trip.offsetHeight;

const ongoing_persent = document.querySelector('.ongoing .persent');
const ongoing_bar = document.querySelector('.ongoing .bar');
window.addEventListener("scroll", function () {
  if (window.scrollY > book_a_trip_OST - 300) {
    book_a_trip.classList.add("active");
    startNumberAnimation();
  } else {
    book_a_trip.classList.remove("active");
    stopNumberAnimation();
  }
});
function startNumberAnimation() {
    let start = 0;
    let end = Number(ongoing_bar.getAttribute("data-rate"));
    setInterval(() => {
        if (start < end) {
            start++;
            ongoing_persent.innerText = start + "%";
            ongoing_bar.style.width = start + "%";
        } else {
            clearInterval(this);
        } 
    }, 100);
}