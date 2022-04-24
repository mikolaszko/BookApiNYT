
  

  const imageLinks= [];
  const text1_options = [];
  const text2_options = [];

  const color_options = ["#EBB9D2", "#FE9968", "#7FE0EB", "#6CE5B1", "#FFBF65", "#C05780", "#8DD7BF", "#FE9968", "#FF8352", "#EE84B3", "#F9G385", "#FFGD87", "#FED7A5", "#CAB3C1", "#FFE4C9", "#EBB9D2", "#FE9968", "#7FE0EB", "#6CE5B1", "#FFBF65", "#C05780", "#8DD7BF", "#FE9968", "#FF8352", "#EE84B3", "#F9G385", "#FFGD87", "#FED7A5", "#CAB3C1", "#FFE4C9"];
  const image_options = [];
  var i = 0;
  const currentOptionText1 = document.getElementById("current-option-text1");
  const currentOptionText2 = document.getElementById("current-option-text2");
  const currentOptionImage = document.getElementById("image");
  const carousel = document.getElementById("carousel-wrapper");
  const mainMenu = document.getElementById("menu");
  const optionNext = document.getElementById("previous-option");
  const optionPrevious = document.getElementById("next-option");
  
  optionNext.onclick = function () {
    i = i + 1;
    i = i % text1_options.length;
    currentOptionText1.dataset.nextText = text1_options[i];
  
    currentOptionText2.dataset.nextText = text2_options[i];
  
    mainMenu.style.background = color_options[i];
    
    carousel.classList.add("anim-next");
    
    setTimeout(() => {
      currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
    }, 455);
    
    setTimeout(() => {
      currentOptionText1.innerText = text1_options[i];
      currentOptionText2.innerText = text2_options[i];
      carousel.classList.remove("anim-next");
    }, 650);
  };
  
  optionPrevious.onclick = function () {
    if (i === 0) {
      i = text1_options.length;
    }
    i = i - 1;
    currentOptionText1.dataset.previousText = text1_options[i];
  
    currentOptionText2.dataset.previousText = text2_options[i];
  
    mainMenu.style.background = color_options[i];
    carousel.classList.add("anim-previous");
  
    setTimeout(() => {
      currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
    }, 455);
    
    setTimeout(() => {
      currentOptionText1.innerText = text1_options[i];
      currentOptionText2.innerText = text2_options[i];
      carousel.classList.remove("anim-previous");
    }, 650);
  };

  fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=yMeI4jmGs0miVNhNutPgRUGwYSlOD8C1')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        
        data.results.books.forEach(element => {
          for(let i = 0; i<data.results.books.length;i++){
            text1_options.push(data.results.books[i].title)
            text2_options.push(data.results.books[i].author)
            image_options.push(data.results.books[i].book_image)
          }
          
        });

        currentOptionText1.innerText = text1_options[i];
        currentOptionText2.innerText = text2_options[i];
        currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
        mainMenu.style.background = color_options[i];

        console.log(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });