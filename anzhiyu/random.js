var posts=["posts/3eeb/","posts/3eeb/","posts/3eeb/","posts/54d0/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };