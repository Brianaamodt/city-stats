var cityData = null;
var cityHtml = null;

var locationNames;
var locationPop;
var locationArea;

$(document).ready(function(){
	console.log(cityData, cityHtml);

	if(cityHtml === null){
			$.get('location.html', function (data) {
				cityHtml = data;
			});
	}

	$("#get-info-btn").on('click', function(){

		$.get('data.json', function (data) {
			if (cityData === null) {
				cityData = data;
				for (var i = 0; i < cityData.locations.length; i++) {
					locationNames = cityData.locations[i].location;
					locationPop = cityData.locations[i].population;
					locationArea = cityData.locations[i].area;
					$("#more-stuff").append(cityHtml);
					$("#more-stuff").find(".location-name").last().append("<p>" + locationNames + "</p>");
					$("#more-stuff").find(".location-population").last().append("<p>" + locationPop + "</p>");
					$("#more-stuff").find(".location-area").last().append("<p>" + locationArea + "</p>");
				}
			}
		});
		$("#more-stuff").on("click", ".remove", function(){
		$(this).parent().fadeOut().empty();
		});
	});
});