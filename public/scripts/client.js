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


const renderTweets = function(arrayOfTweets) {
  for (const obj of arrayOfTweets) {
    $('.tweet-container').prepend(createTweetElement(obj));
  }
};

const addTweetToDb = function() {

$('#newTweetContainer').submit(function (event){
  event.preventDefault();
  let tweet = $('#tweet-text').val();

  if (tweet.length > 140) {
    return alert("The Tweet is too big!");
  }

  if (tweet === null || tweet === '') {
    return alert("the tweet must contain something!")
  }

  
  $.ajax({
    type: "POST",
    url: "/tweets",
    data: $(this).serialize(),
    dataTyoe: JSON,
    success: () => {

    $(this)[0].reset();
    $('#counter').text('140');

  },
  error: (err) => {
    console.log("error: ", err)
  }
  })
})
loadTweets();
}

const loadTweets = function() {
  $.ajax({
    type: "GET",
    url: "/tweets",
    dataTyoe: JSON,
    success: (tweetposts) => {
      renderTweets(tweetposts)
      tweetposts.reset();
    },
    error: (err) => {
      console.log('error:', err);
    }
  })
}

loadTweets();
addTweetToDb();

});

