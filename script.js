$( document ).ready(function(){
  $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 240
      edge: 'left', // Choose the horizontal origin
    }
  );

  $('.med').click(function(){
    window.open("https://www.medium.com/@sohanvichare", '_blank')
  });

  $('.tw').click(function(){
    window.open("https://www.twitter.com/@sohanvichare", '_blank')
  });

  $('.in').click(function(){
    window.open("https://www.linkedin.com/in/sohanvichare", '_blank')
  });

  $('.fb').click(function(){
    window.open("https://www.facebook.com/sohanvichare26", '_blank')
  });

  $(function(){
      $(".element").typed({
        strings: ["California Arts Scholar.", "iOS developer.", "drone enthusiast.", "artist.", "robotics team captain.", "web designer.", "high school student.", "thespian.", "avid blogger.", "iOS designer.", "machine-learning enthusiast.", "award-winning debater.", "theater geek.", "award-winning speaker.", "team player."],
        typeSpeed: 0,
        loop: true
      });
  });

   $('.scrollspy').scrollSpy();

   $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });

});
