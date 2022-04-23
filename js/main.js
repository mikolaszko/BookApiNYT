
  

  const imageLinks= [];
  const text1_options = [];
  const text2_options = [];

  const color_options = ["#EBB9D2", "#FE9968", "#7FE0EB", "#6CE5B1", "#FFBF65", "#C05780", "#8DD7BF", "#FE9968", "#FF8352", "#EE84B3", "#F9G385", "#FFGD87", "#FED7A5", "#CAB3C1", "#FFE4C9"];
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
        text1_options.push(data.results.books[0].title)
        text1_options.push(data.results.books[1].title)
        text1_options.push(data.results.books[2].title)
        text1_options.push(data.results.books[3].title)
        text1_options.push(data.results.books[4].title)
        text1_options.push(data.results.books[5].title)
        text1_options.push(data.results.books[6].title)
        text1_options.push(data.results.books[7].title)
        text1_options.push(data.results.books[8].title)
        text1_options.push(data.results.books[9].title)
        text1_options.push(data.results.books[10].title)
        text1_options.push(data.results.books[11].title)
        text1_options.push(data.results.books[12].title)
        text1_options.push(data.results.books[13].title)
        text1_options.push(data.results.books[14].title)
        text2_options.push(data.results.books[0].author)
        text2_options.push(data.results.books[1].author)
        text2_options.push(data.results.books[2].author)
        text2_options.push(data.results.books[3].author)
        text2_options.push(data.results.books[4].author)
        text2_options.push(data.results.books[5].author)
        text2_options.push(data.results.books[6].author)
        text2_options.push(data.results.books[7].author)
        text2_options.push(data.results.books[8].author)
        text2_options.push(data.results.books[9].author)
        text2_options.push(data.results.books[10].author)
        text2_options.push(data.results.books[11].author)
        text2_options.push(data.results.books[12].author)
        text2_options.push(data.results.books[13].author)
        text2_options.push(data.results.books[14].author)
        image_options.push(data.results.books[0].book_image)
        image_options.push(data.results.books[1].book_image)
        image_options.push(data.results.books[2].book_image)
        image_options.push(data.results.books[3].book_image)
        image_options.push(data.results.books[4].book_image)
        image_options.push(data.results.books[5].book_image)
        image_options.push(data.results.books[6].book_image)
        image_options.push(data.results.books[7].book_image)
        image_options.push(data.results.books[8].book_image)
        image_options.push(data.results.books[9].book_image)
        image_options.push(data.results.books[10].book_image)
        image_options.push(data.results.books[11].book_image)
        image_options.push(data.results.books[12].book_image)
        image_options.push(data.results.books[13].book_image)
        image_options.push(data.results.books[14].book_image)

        currentOptionText1.innerText = text1_options[i];
        currentOptionText2.innerText = text2_options[i];
        currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
        mainMenu.style.background = color_options[i];

        console.log(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
      

      // document.querySelector("img").addEventListener('click', directImg)

      // function directImg(){

      //   fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=yMeI4jmGs0miVNhNutPgRUGwYSlOD8C1')
      // .then(res => res.json()) // parse response as JSON
      // .then(data => {
      //   let link1 = data.results.books[0].buy_links[4]
      //   let link2 =data.results.books[1].buy_links[4]
      //   let link3 =data.results.books[2].buy_links[4]
      //   let link4 =data.results.books[3].buy_links[4]
      //   let link5 =data.results.books[4].buy_links[4]
      //   let link6 =data.results.books[5].buy_links[4]
      //   let link7 =data.results.books[6].buy_links[4]
      //   let link8 =data.results.books[7].buy_links[4]
      //   let link9 =data.results.books[8].buy_links[4]
      //   let link10 =data.results.books[9].buy_links[4]
      //   let link11 =data.results.books[10].buy_links[4]
      //   let link12 =data.results.books[11].buy_links[4]
      //   let link13 =data.results.books[12].buy_links[4]
      //   let link14 =data.results.books[13].buy_links[4]
      //   let link15 =data.results.books[14].buy_links[4]

        

      //   console.log(data)
      // })
      // .catch(err => {
      //     console.log(`error ${err}`)
      // });
      // }

      // document.querySelector("img").addEventListener()