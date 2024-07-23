var posts=["2024/07/23/hello-world/","2024/07/23/huong-dan-dung-github/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };