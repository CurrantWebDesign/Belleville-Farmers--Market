


var galleryFeed = new Instafeed({
    get: "user",
    userId: 7609067911,
    accessToken: "7609067911.1677ed0.8dbd92c8e3fa4b69ad9174cd7a279d22",
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
                      nav: false
                    },
                    600: {
                      items: 3,
                      nav: false
                    },
                    1000: {
                      items: 4,
                      nav: false,
                      loop: true,
                      margin: 20
                    }
                  }
                })
              
    }
    
  });
  galleryFeed.run();