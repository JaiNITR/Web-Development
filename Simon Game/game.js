var buttonColours = ["red", "blue", "green", "yellow"];
var userClickPattern = [];
var gamePattern = [];

var started = false;
var level = 0;

$(document).keypress(function(){
  if(!started) {
    $("#level-title").text("Level "+level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function(even) {
  var userChosenColour = $(this).attr("id");
  userClickPattern.push(userChosenColour);
  // console.log(userClickPattern);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickPattern.length-1);
});

function playSound(name) {
  var randomSourceAudio = "sounds/" + name + ".mp3";
  var audio = new Audio(randomSourceAudio);
  audio.play();
}

function nextSequence() {
  userClickPattern = [];
  level++;
  $("#level-title").text("Level "+level);
  var randomNumber = Math.floor(3 * Math.random());

  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  // console.log(gamePattern);

  $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function animatePress(currentcolour) {
  $("#" + currentcolour).addClass("pressed");
  setTimeout(function() {
    $("#" + currentcolour).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {
  if(gamePattern[currentLevel]===userClickPattern[currentLevel]) {
    console.log("Success");

  if(userClickPattern.length===gamePattern.length) {
    setTimeout(function(){
      nextSequence();
    },1000);
  }
} else {
  console.log("wrong");
  var wrong = new Audio("sounds/wrong.mp3");
  $(document).addClass("game-over");
  setTimeout(function(){
    $(document).removeClass("game-over");
  },200);
  $("#level-title").text("Game Over, Press Any Key to Restart");
  startOver();
}
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
