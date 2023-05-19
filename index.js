console.log("This is my index js file");

//e4f5dde04c7041b7b73c65d88d02184f
// let country = 'in';
// let apiKey = 'e4f5dde04c7041b7b73c65d88d02184f'

//Grab the News container
let Accordion = document.getElementById('accordion');

//create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=in&apiKey=e4f5dde04c7041b7b73c65d88d02184f', true);

//what to do when responce is ready

xhr.onload = function () {
    if (this.status === 200) {

        let json = JSON.parse(this.responseText);
        let articles = json.articles;

        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
        
                let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h5 class="mb-0">
                                    <button class="btn btn-link" data-toggle="collapse" data-target="#collapse${index}"
                                        aria-expanded="true" aria-controls="collapse${index}">
                                     <b> Breaking News ${index+1}: </b> ${element["title"]}
                                    </button>
                                </h5>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#accordion">
                                <div class="card-body"> ${element["content"]}.  <a href="${element['url']}" target= "_blank" > read more here</a>
            
                                </div>
                            </div>
                    </div>`;
     newsHtml += news;
        });
        Accordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()






// let country = 'in';
// let apiKey = 'e4f5dde04c7041b7b73c65d88d02184f'

// //Grab the News container
// let Accordion = document.getElementById('accordion');

// //create an ajax get request
// const xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}', true);