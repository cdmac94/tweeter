// /*
//  * Client-side JS logic goes here
//  * jQuery is already loaded
//  * Reminder: Use (and do all your DOM work in) jQuery's document ready function
//  */

// const text = require("body-parser/lib/types/text");

$(function(){

const createTweetElement = (tweetDB)=> {
  const newTweet =$(
  `
  <article>
        <header class="tweet-header">
        <div>
        <img src=${tweetDB.user.avatars}/>
        <span>${tweetDB.user.name}</span>
      </div>
          <div class="userId">${tweetDB.user.handle}</div>
        </header>
        <p class="tweet-body">
          ${tweetDB.content.text}
        </p>
        <footer class="tweet-footer">
          <div class="time">${timeago.format(tweetDB.created_at)}</div>
          <div class="icon">
          <span class="flag"><i class="fas fa-flag"> </i>   </span>
          <span class="redo"><i class="fas fa-redo"> </i>   </span>
          <span class="heart"><i class="fas fa-heart"> </i>   </span>
        </div>
        </footer>
      </article>
      `);
return newTweet;
}

// Test / driver code (temporary). Eventually will get this from the server.
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Jamie",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirJamie"
    },
    "content": {
      "text": "I always pay my debts"
    },
    "created_at": 59999999999999
  }
];

const renderTweets = function(arrayOfTweets) {
  for (const obj of arrayOfTweets) {
    $('.tweet-container').prepend(createTweetElement(obj));
  }
};

renderTweets(data);
});


$(document).ready(function() {
  $('form').submit(function (event){
    alert("You clicked the button");
    let tweet = $('#tweet-text').serialize()
    
    $.ajax({
      type: "POST",
      url: "/tweets",
      data: tweet,
      dataTyoe: JSON,
      encoded: true
    }).done(function (data) {
      console.log(data)
    })
    event.preventDefault();
    })
  })




// $(document).ready(function () {
//   $("form").submit(function (event) {
//     var formData = {
//       name: $("#name").val(),
//       email: $("#email").val(),
//       superheroAlias: $("#superheroAlias").val(),
//     };

//     $.ajax({
//       type: "POST",
//       url: "process.php",
//       data: formData,
//       dataType: "json",
//       encode: true,
//     }).done(function (data) {
//       console.log(data);
//     });

//     event.preventDefault();
//   });
// });
