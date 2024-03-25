// Slider function
let count = 0;


setInterval(nextImage, 2000)

function nextImage() {
    count++;
    var allSlides = document.querySelectorAll('.slide');
    if (count >= allSlides.length) {
        count = 0;
    }
    
    var left = allSlides[count].offsetLeft;
    document.querySelector('.slides').scrollLeft=left;
}


setInterval(nextSlide, 5000);

//Search bar
function search(event) {
    var searchStr = event.target.value.toLowerCase();

    document.querySelectorAll('li.property').forEach((p) => {
        p.classList.add('hidden');

        if (p.innerText.toLowerCase().indexOf(searchStr) !== -1) {
            p.classList.remove('hidden');
        }
    });
}


// Booking a view

$(document).ready(function() {
    $("#submitBookingForm").on("click", function() {
      var name = $('#name').val();
      var email = $('#email').val();
      var date = $('#date').val();
      var time = $('#time').val();
      var message = "Booking Details:\n\nName: " + name + "\nEmail: " + email + "\nPreferred Date: " + date + "\nPreferred Time: " + time;
      alert(message);
    });
  });