window.onload = function() {
  $("#load").on('click', function() {
    var usersRequest = new XMLHttpRequest;
    usersRequest.open('GET', 'http://www.reddit.com/r/aww.json');
    usersRequest.responseType = 'json';
    usersRequest.addEventListener('load', function () {
      debugger
      $("#cat").attr('src', this.response.data.children[1].data.url.slice(0,-1))
    });
    usersRequest.send();
  });
} 