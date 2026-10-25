
const cards = [
  {
    image: "images/golf.jpg",
    title: "Golf Simulator",
    text: "Perfect your swing and experience the thrill of golf indoors with our high-tech golf simulator!"
  },
  {
    image: "images/basketball.jpg",
    title: "Basketball",
    text: "Shoot some hoops, test your accuracy, and challenge your friends to an exciting basketball arcade game!"
  },
  {
    image: "images/racing_car.jpg",
    title: "Racing Car",
    text: "Put the pedal to the metal, race against the clock, and see if you have what it takes to reach the finish line first!"
  },
  {
    image: "images/lava-light-floor.jpg",
    title: "Lava Light Floor",
    text: "Step onto the interactive floor, dodge the glowing tiles, and test your reflexes in this fun and exciting challenge!"
  },
  {
    image: "images/shooting-gun.jpg",
    title: "Shooting Gun",
    text: "Test your aim and reaction time with our thrilling arcade shooting game!"
  },
  {
    image: "images/billiard.jpg",
    title: "Billiard",
    text: "Enjoy a classic game of billiards, line up your shots, and show off your skills with friends!"
  },
  {
    image: "images/projector-room-360(1).jpeg",
    title: "Projector Screen 360",
    text: "Immerse yourself in a stunning 360-degree projection experience that brings entertainment to life all around you!"
  },
  {
    image: "images/air-hockey.jpg",
    title: "Air Hockey",
    text: "Go head-to-head in a fast-paced air hockey match! Sharpen your reflexes, defend your goal, and race to victory!"
  },
];


  let index = 0;

  function showCard() {
    const container = document.getElementById("carousel-container");
    const card = cards[index];
    container.innerHTML = `
      <div class="carousel-card">
        <div class="card-image" style="background-image: url('${card.image}')"></div>
        <div class="card-text">
          <h3>${card.title}</h3>
          <p>${card.text}</p>
        </div>
      </div>
    `;
  }

  function doNext() {
    index = (index + 1) % cards.length;
    showCard();
  }

  function doBack() {
    index = (index - 1 + cards.length) % cards.length;
    showCard();
  }



const images = [
    { image: "images/private-jet.jpg" },
    { image: "images/private-jet(1).jpg" },
    { image: "images/private-jet(2).jpg" }
];

let slideIndex = 0;

function showSlides() {
    const container = document.getElementById("slideshow-container");
    const image = images[slideIndex];

    container.innerHTML = `
        <div class="slideshow-image">
            <img src="${image.image}" style="width:100%">
        </div>
    `;
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % images.length;
    showSlides();
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + images.length) % images.length;
    showSlides();
}

window.addEventListener("DOMContentLoaded", function () {
    showCard();
    showSlides();
});
