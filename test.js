function validate(){
    var title = document.getElementById('storyTitle').value;
    var summary = document.getElementById('content').value;
    var content = document.getElementById('summary').value;
    var author = document.getElementById('author').value;
    console.log(title);
    console.log(summary);
    console.log(content);
    console.log(author);
  }

  document.getElementById("banner-title").innerHTML = title;