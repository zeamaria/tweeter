/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


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
  }
]

// replace @username with actual data / date/ timeago = created_at time


const createTweetElement = function(tweetData) {
  let newTweet = `
  <article class="user-tweet">
  <header class="user-tweet-header">
    <h5>User</h5>
    <h4>@username</h4>
  </header>
  <div class="user-tweet-body">
    <p>simply dummy text of the printing and typesetting industry.</p>
  </div>
  <footer class="user-tweet-footer">
    <h6>
      <time class="timeago" datetime="2020-07-17T09:24:17Z">July 17, 2020</time>
    </h6>
    <div class="icons">
      <i class="fas fa-flag icon"  w3-tiny></i>
      <i class="fas fa-retweet icon" w3-tiny></i>
      <i class="fas fa-heart icon" w3-tiny></i>
    </div>
  </footer>
</article> `

return newTweet;

};

const renderTweets = function(tweets) {
  tweets.forEach((tweet) => {
    console.log(tweet)
  })
}

renderTweets(data);