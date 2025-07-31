var posts=["posts/3eeb/","posts/3eeb/","posts/3eeb/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };