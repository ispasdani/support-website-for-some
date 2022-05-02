const signOutBtn = document.getElementById("sign-out-btn");
signOutBtn.addEventListener("click", function () {
  location.href = "../../index.html";
});

const homeBtn = document.getElementById("home-btn");
homeBtn.addEventListener("click", function () {
  location.href = "../homePage/home.html";
});

//////////////////////infographic about Aarhus//////////////////////
const infographicAarhus = document.getElementById("infographic-aarhus");
const infoArElement = document.getElementById("info-ar-element");
infographicAarhus.addEventListener("click", function () {
  infoArElement.classList.remove("invisible");
  infoArElement.classList.add("visible");
});
const closePopup = document.getElementById("close-btn");
closePopup.addEventListener("click", function () {
  infoArElement.classList.add("invisible");
  infoArElement.classList.remove("visible");
});

//////////////////////story quiz about Denmark facts//////////////////////
const weekOneDayTwo = document.getElementById("story-quiz-about-dk-facts");
const storyQuizPopup = document.getElementById("insta-story-quiz-about-dk");
weekOneDayTwo.addEventListener("click", function () {
  storyQuizPopup.classList.remove("invisible");
  storyQuizPopup.classList.add("visible");
});
const closePopupTwo = document.getElementById("close-btn-2");
closePopupTwo.addEventListener("click", function () {
  storyQuizPopup.classList.add("invisible");
  storyQuizPopup.classList.remove("visible");
});

//////////////////////story quiz about Denmark facts//////////////////////
const weekOneDayOne = document.getElementById("fb-promote-calendar");
const fbPromote = document.getElementById("fb-promote");
weekOneDayOne.addEventListener("click", function () {
  fbPromote.classList.remove("invisible");
  fbPromote.classList.add("visible");
});
const closePopupThree = document.getElementById("close-btn-3");
closePopupThree.addEventListener("click", function () {
  fbPromote.classList.add("invisible");
  fbPromote.classList.remove("visible");
});

//////////////////////story quiz about Denmark facts//////////////////////
const weekOneDayFive = document.getElementById("insta-takeover-calendar");
const instaTakeover = document.getElementById("insta-story-takeover");
weekOneDayFive.addEventListener("click", function () {
  instaTakeover.classList.remove("invisible");
  instaTakeover.classList.add("visible");
});
const closePopupFour = document.getElementById("close-btn-4");
closePopupFour.addEventListener("click", function () {
  instaTakeover.classList.add("invisible");
  instaTakeover.classList.remove("visible");
});

//////////////////////tiktok recap//////////////////////
const weekOneDaySix = document.getElementById("tiktok-recap-calendar");
const tiktokRecap = document.getElementById("tiktok-recap");
weekOneDaySix.addEventListener("click", function () {
  tiktokRecap.classList.remove("invisible");
  tiktokRecap.classList.add("visible");
});
const closePopupFive = document.getElementById("close-btn-5");
closePopupFive.addEventListener("click", function () {
  tiktokRecap.classList.add("invisible");
  tiktokRecap.classList.remove("visible");
});

//////////////////////tiktok recap//////////////////////
const weekTwoDayOne = document.getElementById(
  "facebook-about-takeover-calendar"
);
const faceAboutTakeover = document.getElementById("facebook-about-takeover");
weekTwoDayOne.addEventListener("click", function () {
  faceAboutTakeover.classList.remove("invisible");
  faceAboutTakeover.classList.add("visible");
});
const closePopupSix = document.getElementById("close-btn-6");
closePopupSix.addEventListener("click", function () {
  faceAboutTakeover.classList.add("invisible");
  faceAboutTakeover.classList.remove("visible");
});

//////////////////////tiktok recap//////////////////////
const weekTwoDayThree = document.getElementById("tiktok-bartenders-calendar");
const tiktokBartenders = document.getElementById("tiktok-bartenders-meet");
weekTwoDayThree.addEventListener("click", function () {
  tiktokBartenders.classList.remove("invisible");
  tiktokBartenders.classList.add("visible");
});
const closePopupSeven = document.getElementById("close-btn-7");
closePopupSeven.addEventListener("click", function () {
  tiktokBartenders.classList.add("invisible");
  tiktokBartenders.classList.remove("visible");
});

//////////////////////tiktok recap//////////////////////
const weekTwoDayFour = document.getElementById("face-info-marketing-calendar");
const faceMarketingInfo = document.getElementById("face-marketing-info");
weekTwoDayFour.addEventListener("click", function () {
  faceMarketingInfo.classList.remove("invisible");
  faceMarketingInfo.classList.add("visible");
});
const closePopupEight = document.getElementById("close-btn-8");
closePopupEight.addEventListener("click", function () {
  faceMarketingInfo.classList.add("invisible");
  faceMarketingInfo.classList.remove("visible");
});

//////////////////////tiktok recap//////////////////////
const weekTwoDayFive = document.getElementById("instagram-bar-calendar");
const instagramBar = document.getElementById("instagram-bar");
weekTwoDayFive.addEventListener("click", function () {
  instagramBar.classList.remove("invisible");
  instagramBar.classList.add("visible");
});
const closePopupNine = document.getElementById("close-btn-9");
closePopupNine.addEventListener("click", function () {
  instagramBar.classList.add("invisible");
  instagramBar.classList.remove("visible");
});

//////////////////////tiktok recap//////////////////////
const weekThreeDayTwo = document.getElementById(
  "instagram-story-quiz-calendar"
);
const instagramStoryQuiz = document.getElementById("instagram-story-quiz");
weekThreeDayTwo.addEventListener("click", function () {
  instagramStoryQuiz.classList.remove("invisible");
  instagramStoryQuiz.classList.add("visible");
});
const closePopupTen = document.getElementById("close-btn-10");
closePopupTen.addEventListener("click", function () {
  instagramStoryQuiz.classList.add("invisible");
  instagramStoryQuiz.classList.remove("visible");
});

//////////////////////tiktok recap//////////////////////
const weekThreeDayFour = document.getElementById(
  "facebook-create-tag-calendar"
);
const facebookCreateTag = document.getElementById("facebook-create-tag");
weekThreeDayFour.addEventListener("click", function () {
  facebookCreateTag.classList.remove("invisible");
  facebookCreateTag.classList.add("visible");
});
const closePopupEleven = document.getElementById("close-btn-11");
closePopupEleven.addEventListener("click", function () {
  facebookCreateTag.classList.add("invisible");
  facebookCreateTag.classList.remove("visible");
});

//////////////////////tiktok recap//////////////////////
const weekThreeDayFive = document.getElementById(
  "instagram-create-tag-calendar"
);
const instagramCreateTag = document.getElementById("instagram-create-tag");
weekThreeDayFive.addEventListener("click", function () {
  instagramCreateTag.classList.remove("invisible");
  instagramCreateTag.classList.add("visible");
});
const closePopupTwelve = document.getElementById("close-btn-12");
closePopupTwelve.addEventListener("click", function () {
  instagramCreateTag.classList.add("invisible");
  instagramCreateTag.classList.remove("visible");
});

//////////////////////tiktok recap//////////////////////
const weekThreeDaySix = document.getElementById("tiktok-testimonials-calendar");
const tiktokTestimonials = document.getElementById("tiktok-testimonials");
weekThreeDaySix.addEventListener("click", function () {
  tiktokTestimonials.classList.remove("invisible");
  tiktokTestimonials.classList.add("visible");
});
const closePopupThirdteen = document.getElementById("close-btn-13");
closePopupThirdteen.addEventListener("click", function () {
  tiktokTestimonials.classList.add("invisible");
  tiktokTestimonials.classList.remove("visible");
});

//////////////////////tiktok recap//////////////////////
const weekFourDayOne = document.getElementById(
  "facebook-housing-guide-calendar"
);
const facebookBeginnersGuide = document.getElementById(
  "facebook-housing-guide"
);
weekFourDayOne.addEventListener("click", function () {
  facebookBeginnersGuide.classList.remove("invisible");
  facebookBeginnersGuide.classList.add("visible");
});
const closePopupFourteen = document.getElementById("close-btn-14");
closePopupFourteen.addEventListener("click", function () {
  facebookBeginnersGuide.classList.add("invisible");
  facebookBeginnersGuide.classList.remove("visible");
});

//////////////////////tiktok demo video//////////////////////
const weekFourDayThree = document.getElementById("tiktok-demo-video-calendar");
const tiktokDemoVideo = document.getElementById("tiktok-demo-video");
weekFourDayThree.addEventListener("click", function () {
  tiktokDemoVideo.classList.remove("invisible");
  tiktokDemoVideo.classList.add("visible");
});
const closePopupFifteen = document.getElementById("close-btn-15");
closePopupFifteen.addEventListener("click", function () {
  tiktokDemoVideo.classList.add("invisible");
  tiktokDemoVideo.classList.remove("visible");
});

//////////////////////tiktok demo video//////////////////////
const weekFourDayFour = document.getElementById("facebook-article-calendar");
const facebookArticle = document.getElementById("facebook-article");
weekFourDayFour.addEventListener("click", function () {
  facebookArticle.classList.remove("invisible");
  facebookArticle.classList.add("visible");
});
const closePopupSixteen = document.getElementById("close-btn-16");
closePopupSixteen.addEventListener("click", function () {
  facebookArticle.classList.add("invisible");
  facebookArticle.classList.remove("visible");
});

//////////////////////tiktok demo video//////////////////////
const weekFourDaySix = document.getElementById("tiktok-facilities-calendar");
const tiktokBaaFacilities = document.getElementById("tiktok-facilities");
weekFourDaySix.addEventListener("click", function () {
  tiktokBaaFacilities.classList.remove("invisible");
  tiktokBaaFacilities.classList.add("visible");
});
const closePopupSeventeen = document.getElementById("close-btn-17");
closePopupSeventeen.addEventListener("click", function () {
  tiktokBaaFacilities.classList.add("invisible");
  tiktokBaaFacilities.classList.remove("visible");
});

//////////////////////tiktok demo video//////////////////////
const weekOneDayThree = document.getElementById("tiktok-aarhus-calendar");
const tiktokAarhus = document.getElementById("tiktok-aarhus");
weekOneDayThree.addEventListener("click", function () {
  tiktokAarhus.classList.remove("invisible");
  tiktokAarhus.classList.add("visible");
});
const closePopupEighteen = document.getElementById("close-btn-18");
closePopupEighteen.addEventListener("click", function () {
  tiktokAarhus.classList.add("invisible");
  tiktokAarhus.classList.remove("visible");
});

//////////////////////tiktok demo video//////////////////////
const weekTwoDayTwo = document.getElementById("instagram-takeover-calendar");
const instagramTakeover = document.getElementById("instagram-takeover");
weekTwoDayTwo.addEventListener("click", function () {
  instagramTakeover.classList.remove("invisible");
  instagramTakeover.classList.add("visible");
});
const closePopupNineteen = document.getElementById("close-btn-19");
closePopupNineteen.addEventListener("click", function () {
  instagramTakeover.classList.add("invisible");
  instagramTakeover.classList.remove("visible");
});

//////////////////////tiktok demo video//////////////////////
const weekTwoDaySix = document.getElementById("tiktok-italianHand-calendar");
const tiktokItalianHand = document.getElementById("tiktok-italianHand");
weekTwoDaySix.addEventListener("click", function () {
  tiktokItalianHand.classList.remove("invisible");
  tiktokItalianHand.classList.add("visible");
});
const closePopupTwenty = document.getElementById("close-btn-20");
closePopupTwenty.addEventListener("click", function () {
  tiktokItalianHand.classList.add("invisible");
  tiktokItalianHand.classList.remove("visible");
});

//////////////////////tiktok demo video//////////////////////
const weekThreeDayOne = document.getElementById("facebook-multimedia-calendar");
const facebookMultimedia = document.getElementById("facebook-multimedia");
weekThreeDayOne.addEventListener("click", function () {
  facebookMultimedia.classList.remove("invisible");
  facebookMultimedia.classList.add("visible");
});
const closePopupTwentyone = document.getElementById("close-btn-21");
closePopupTwentyone.addEventListener("click", function () {
  facebookMultimedia.classList.add("invisible");
  facebookMultimedia.classList.remove("visible");
});

//////////////////////tiktok demo video//////////////////////
const weekThreeDayThree = document.getElementById("tiktok-places-calendar");
const tiktokPlaces = document.getElementById("tiktok-places");
weekThreeDayThree.addEventListener("click", function () {
  tiktokPlaces.classList.remove("invisible");
  tiktokPlaces.classList.add("visible");
});
const closePopupTwentytwo = document.getElementById("close-btn-22");
closePopupTwentytwo.addEventListener("click", function () {
  tiktokPlaces.classList.add("invisible");
  tiktokPlaces.classList.remove("visible");
});

//////////////////////tiktok demo video//////////////////////
const weekFourDayFive = document.getElementById("instagram-deadline-calendar");
const instagramDeadline = document.getElementById("instagram-deadline");
weekFourDayFive.addEventListener("click", function () {
  instagramDeadline.classList.remove("invisible");
  instagramDeadline.classList.add("visible");
});
const closePopupTwentythree = document.getElementById("close-btn-23");
closePopupTwentythree.addEventListener("click", function () {
  instagramDeadline.classList.add("invisible");
  instagramDeadline.classList.remove("visible");
});
