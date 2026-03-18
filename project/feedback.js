const customerInfos = [
  {
    image: "Pictures/profile pics/profile 1.jpeg",
    name: "Sarah Chen",
    feedback: "Quiet, cozy, and the wifi is actually reliable.Found my new work-from-home-away-from-home.",
    rating: 4.5
  },
  {
    image: "Pictures/profile pics/profile 2.jpeg",
    name: "Marcus Thompson",
    feedback: "The Honey Lavender Latte is my Saturday morning ritual. Worth the 20-minute drive every weekend",
    rating: 5.0
  },
  {
    image: "Pictures/profile pics/profile 3.jpeg",
    name: "Emily Rodriquez",
    feedback: "Stumbled in looking for a quick coffe, stayed for two hours. The vibes are immaculate",
    rating: 3.0
  }
];

const customerFeedBack = document.querySelector('.js-feedbacks-container');

let feedbackHTML = '';

customerInfos.forEach((customerInfo) => {
  feedbackHTML += 
  `
    <div class="customer-profile">
      <div class="feedback-left-section">
        <div class="profile-pics-container">
          <img src="${customerInfo.image}" class="profile-pics">
        </div>
        <div class="info-and-feedback-container">
          <h4 class="customer-name">
            ${customerInfo.name}
          </h4>
          <p class="feedback">
            "${customerInfo.feedback}"
          </p>
        </div>
      </div>
      <div class="feedback-right-section">
        <img src="ratings/rating-${customerInfo.rating * 10}.png" class="customer-rating">
      </div>
    </div>
  `;
});


customerFeedBack.innerHTML = feedbackHTML;




