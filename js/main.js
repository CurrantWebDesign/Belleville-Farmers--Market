$(document).ready(function(){
    var feed = new Instafeed({
    get: 'user',
    userId:'3113081133',
    clientId: '0792e63b0d004d78b6754f465dbe379f',
    accessToken: '3113081133.1677ed0.a24bd84a410a4c7789ee600032c51544',
    template: '<div class="col-lg-4 ml-auto mr-auto"><a target="blank" href="{{link}}"><img height="200px" width="200px" src="{{image}}"/></a></div>',
    resolution: 'thumbnail',
    limit: '10'
    });
    feed.run();
})

var linkContainer = document.getElementsByClassName("navbar");

var links = linkContainer.getElementsByTagName("a");

for (var i = 0; i < links.length; a++) {
    links[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className - current[0].className.replace("active", "");
        this.className += "active";
    });
}
    
