jQuery(function($) { 
	
	// Maps
    var myLatlng = new google.maps.LatLng(-22.952742,-43.172804);
    var myOptions = {
      zoom: 16,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.HYBRID
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    map.setCenter(myLatlng);
    
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'FrontInRio 2011'
    });

    var contentString = '<div style="height:50px"><h1><a href="http://www.frontinrio.com.br">FrontInRio 2011</a></h1>\n';
    contentString += '<p><strong>Local:</strong> Av. Pasteur 458, prédio do CCET, sala 204, no bairro da Urca, Rio de Janeiro</p></div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString,
        position: myLatlng,
        minHeight: 150
        
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
    });

	// Twitter
	jQuery.getScript('http://widgets.twimg.com/j/2/widget.js', function() {
		new TWTR.Widget({
		  id: 'twitter',
		  version: 2,
		  type: 'search',
		  search: 'frontinrio',
		  interval: 5000,
		  title: 'FrontInRio 2011',
		  subject: 'Twitter Feed',
		  width: 'auto',
		  height: 300,
		  theme: {
		    shell: {
		      background: '#8ec1da',
		      color: '#ffffff'
		    },
		    tweets: {
		      background: '#ffffff',
		      color: '#444444',
		      links: '#1985b5'
		    }
		  },
		  features: {
		    scrollbar: false,
		    loop: true,
		    live: true,
		    hashtags: true,
		    timestamp: true,
		    avatars: true,
		    toptweets: true,
		    behavior: 'default'
		  }
		}).render().start();
	});
	
	// sugestões
	var uv = document.createElement('script'); uv.type = 'text/javascript'; uv.async = true;
    uv.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'widget.uservoice.com/z42GZ0nB7WH3zK6EpAAag.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(uv, s);
    
    
    // js timeslider
    jQuery.getScript('/js/libs/timeslider.min.js', function() {
        jQuery('#timeSlider').timeline({
            "min_zoom" : 2, 
            "max_zoom" : 10, 
            "data_source" : "js/frontinrio.json"
        });
    });
});
