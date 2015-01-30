$(document).on('click', '#go-search-blue', function() {
	console.log("carrots")
	var myArray = ["man", "mountain", "state", "ocean", "country", "building", "cat", "airline", "wealth", "happiness", "pride", "fear", "religion", "bird", "book", "phone", "rice", "snow", "water"]; 
	var randomWord = Math.round(Math.random() * (myArray.length - 1));
	var searchTerm = randomWord + " blue"
	findImagesOnGoogle({keywords: searchTerm, container: '#search-results'})
});

$(document).on('click', '#go-search', function() {
	var myArray = ["man", "mountain", "state", "ocean", "country", "building", "cat", "airline", "wealth", "happiness", "pride", "fear", "religion", "bird", "book", "phone", "rice", "snow", "water"]; 
	var randomWord = Math.round(Math.random() * (myArray.length - 1));
	var searchTerm = randomWord + "pink"
	findImagesOnGoogle({keywords: $('search-term').val(), container: '#search-results'})
});

$(document).on('click', '#go-search-orange', function() {
	var myArray = ["man", "mountain", "state", "ocean", "country", "building", "cat", "airline", "wealth", "happiness", "pride", "fear", "religion", "bird", "book", "phone", "rice", "snow", "water"]; 
	var randomWord = Math.round(Math.random() * (myArray.length - 1));
	var searchTerm = randomWord + "orange"
	findImagesOnGoogle({keywords: $('#search-term').val(), container: '#search-results'})
});

$(document).on('click', '#go-search-yellow', function() {
	var myArray = ["man", "mountain", "state", "ocean", "country", "building", "cat", "airline", "wealth", "happiness", "pride", "fear", "religion", "bird", "book", "phone", "rice", "snow", "water"]; 
	var randomWord = Math.round(Math.random() * (myArray.length - 1));
	var searchTerm = randomWord + "yellow"
	findImagesOnGoogle({keywords: $('#search-term').val(), container: '#search-results'})
});

$(document).on('click', '#go-search-green', function() {
	var myArray = ["man", "mountain", "state", "ocean", "country", "building", "cat", "airline", "wealth", "happiness", "pride", "fear", "religion", "bird", "book", "phone", "rice", "snow", "water"]; 
	var randomWord = Math.round(Math.random() * (myArray.length - 1));
	var searchTerm = randomWord + "green"
	findImagesOnGoogle({keywords: $('#search-term').val(), container: '#search-results'})
});

$(document).on('click', '#go-search-red', function() {
	var myArray = ["man", "mountain", "state", "ocean", "country", "building", "cat", "airline", "wealth", "happiness", "pride", "fear", "religion", "bird", "book", "phone", "rice", "snow", "water"]; 
	var randomWord = Math.round(Math.random() * (myArray.length - 1));
	var searchTerm = randomWord + "red"
	findImagesOnGoogle({keywords: $('#search-term').val(), container: '#search-results'})
});

$(document).on('click', '#go-search-purple', function() {
	var myArray = ["man", "mountain", "state", "ocean", "country", "building", "cat", "airline", "wealth", "happiness", "pride", "fear", "religion", "bird", "book", "phone", "rice", "snow", "water"]; 
	var randomWord = Math.round(Math.random() * (myArray.length - 1));
	var searchTerm = randomWord + "purple"
	findImagesOnGoogle({keywords: $('#search-term').val(), container: '#search-results'})
});


$("#search-term").keyup(function(event){
    if(event.keyCode == 13){
        $("#go-search").click();
    }
});

$(document).on('click', '#search-results img', function() {
	var url = $(this).data('url');
	$("#workspace img").remove();
	var img = $("<img>").attr('src', url);
	$("#workspace").append(img);
});

