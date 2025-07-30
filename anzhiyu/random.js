var posts=["2025/07/30/hello-world/","2025/07/30/hello-world_副本/","2025/07/30/hello-world_副本2/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };