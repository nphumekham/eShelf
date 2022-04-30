

const apiKey =  "AIzaSyAdmM_6kKcJAGXxIXdJzje_SM-6JKihcQg";  
var book = "";
var arrayThumbnails = [];
var arrayLinks = [];
var arrayAlts = [];
var blank = "_blank";
var height = "300px";
var width = "250px";
var altLocation = document.getElementById("altLocation");
var altLocation1 = document.getElementById("altLocation1");

function handleSubmit(event){
  book = document.querySelector('input').value;
  console.log(book);
buildJSON();
}

function buildJSON() {
	console.log("in render");
	$.ajax({
		url: "https://www.googleapis.com/books/v1/volumes",
		dataType: "jsonp",
		type: "GET",
		contentType: "application/json",
		data: {
			q: book,
			key: apiKey,
			maxResult: 40
		},
		success: function (results) {
			console.log("this is success");
			console.log(results);

            for (var i = 0; i < 10; i++) {
                var item = results.items[i];
                var link = item.volumeInfo.previewLink;
                var thumbnail = item.volumeInfo.imageLinks.thumbnail;
				        // arrayThumbnails.push(item.volumeInfo.imageLinks.thumbnail);
                // arrayLinks.push(item.volumeInfo.previewLink);
                // arrayAlts.push(item.volumeInfo.title);
                var newBook = document.createElement('div');
                newBook.className = "item";
                newBook.innerHTML = "<a target="+blank+" href="+link+"> <img src="+thumbnail+" height="+height+" width="+width+"/></a>";
                altLocation.appendChild(newBook);
			}
		},
		error: function (response) {
			console.log("this is error");
			console.log(response);
		}
	});
}

