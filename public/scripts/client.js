/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

// replace @username with actual data / date/ timeago = created_at time
const createTweetElement = function(tweetData) {
  let newTweet = `
  <article class="user-tweet">
    <header class="user-tweet-header">
    <div class="avatar-name">
    <i class="fas fa-user-astronaut"></i>
      <h5>Zea</h5>
    </div>
    <h4>${tweetData.user.handle}</h4>
    </header>
    <div class="user-tweet-body">
      <p>${escape(tweetData.content.text)}</p>
    </div>
    <footer class="user-tweet-footer">
      <h6>
        <time class="timeago" datetime="${tweetData.created_at}">Now</time>
      </h6>
      <div class="icons">
        <i class="fas fa-flag icon" w3-tiny></i>
        <i class="fas fa-retweet icon" w3-tiny></i>
        <i class="fas fa-heart icon" w3-tiny></i>
      </div>
    </footer>
  </article>`;

  return newTweet;
};

const renderTweets = function() {
  $( "#tweet-container" ).html('');
  $.ajax('/tweets', { method: 'GET' })
  .then(function (data) {
    data.forEach((tweetData) => {
      $( "#tweet-container" ).prepend( createTweetElement(tweetData) );
    });
  });
}

const saveTweet = function(tweet) {
  let tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "text": tweet
  };

  $.ajax('/tweets', { method: 'POST', data: tweetData })
  .done(function (results) {
    renderTweets();
  })
  .fail(function() {
    showError("There was an error saving your Tweet.");
  });
}

const showError = function(error) {
  $('#tweet-error').text(error);
  $('#tweet-error').slideDown();
  hideError();
}

const hideError = function() {
  setTimeout(function(){
    $('#tweet-error').text("");
    $('#tweet-error').slideUp();
  }, 3000);
}