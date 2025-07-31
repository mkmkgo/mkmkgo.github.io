var posts=["2025/07/31/hello-world/","2025/07/31/hello-world_副本/","2025/07/31/hello-world_副本2/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };