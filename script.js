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
        strings: ["a California Arts Scholar.", "an iOS developer.", "a drone enthusiast.", "an artist.", "a robotics team captain.", "a web designer.", "a high school student.", "a thespian.", "an avid blogger.", "an iOS designer.", "a machine-learning enthusiast.", "an award-winning debater.", "a theater geek.", "an award-winning speaker.", "a team player."],
        typeSpeed: 0,
        loop: true
      });
  });

   $('.scrollspy').scrollSpy();

   $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });

});
