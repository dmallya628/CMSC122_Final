//function for image change animation
window.onload = function() {
    function swapCover() {
      //array with all the playlist covers
      var images = [
          "/images/phmixes/mixes5cover.png", 
          "/images/phmixes/mixes4cover.png",
          "/images/phmixes/mixes3cover.png",
          "/images/phmixes/mixes2cover.png",
          "/images/phmixes/mixes1cover.png",
          "/images/mix2/mix 3.4.1/luvinbloom.png",
          "/images/mix2/mix 3.4.1/springbreeze.jpeg",
          "/images/mix3/mix 3.3/entropy.png",
          "/images/mix3/mix 3.3/selfie.jpeg",
          "/images/mix4/mix 6.3/airplanemode.jpg",
          "/images/mix4/mix 6.3/anotherday23.jpg",
          "/images/mix4/mix 6.3/boredlol.jpeg",
          "/images/mix4/mix 6.3/summer1.jpg",
          "/images/mix5/mix1.4/d+3.jpg",
          "/images/mix5/mix1.4/triviasnow.jpg"
      ];
    
      var playlist_cover = document.getElementById('cover');
      var currentIndex = 0;
    
      //using a for loop to define the set interval function to swap images
      setInterval(function swapCover() {
          for (var i = 0; i < images.length; i++) {
              if (i === currentIndex) {
                  playlist_cover.src = images[i];
                  currentIndex = (currentIndex + 1) % images.length;
                  break;
              }
          }
      }, 1000);
    } swapCover();
  };
  
  
  //dark and light mode toggle
  function themeToggle() {
    var element = document.body;
    element.classList.toggle('light-mode');
  
    //changes the text of the theme toggle button depending on current themke
    if (document.getElementById('toggler').innerHTML == 'LIGHT'){
      document.getElementById('toggler').innerHTML = 'DARK'
    }else {
      document.getElementById('toggler').innerHTML = 'LIGHT'
    };
  }