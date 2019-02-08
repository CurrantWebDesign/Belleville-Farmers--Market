


var galleryFeed = new Instafeed({
    get: "user",
    userId: 3113081133,
    accessToken: "3113081133.1677ed0.a24bd84a410a4c7789ee600032c51544",
    resolution: "standard_resolution",
    useHttp: "true",
    limit: 30,
    template: '<div class="item"><a href="{{link}}" target="_blank"><div class="img-featured-container"><div class="img-backdrop"></div><div class="description-container"><p class="caption">{{caption}}</p><span class="likes"><i class="fa fa-heart"></i> {{likes}}</span><span class="comments"><i class="fa fa-comments"></i> {{comments}}</span></div><img src="{{image}}" class="img-responsive"></div></a></div>',
    target: "instafeed_gallery",
    after : function()
    {
         
                $('.owl-carousel').owlCarousel({
                  loop: true,
                  margin: 10,
                  responsiveClass: true,
                  responsive: {
                    0: {
                      items: 1,
                      nav: true
                    },
                    600: {
                      items: 3,
                      nav: false
                    },
                    1000: {
                      items: 4,
                      nav: true,
                      loop: false,
                      margin: 20
                    }
                  }
                })
              
    }
    
  });
  galleryFeed.run();
