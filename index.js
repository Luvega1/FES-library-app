//Fake Data 
let books;


async function renderBooks(filter) {
  const booksWrapper = document.querySelector('.books');

 booksWrapper.classList += ' books__loading'
 if (!books) {
   books = await getBooks();
 }
  
 booksWrapper.classList.remove('books__loading')
  

if (filter === 'Low__to__High') {
books.sort((a, b) => (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice));
}
else if (filter === 'High__to__Low'){
  books.sort((a, b) => (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice));
}
else if (filter === 'Rating') {
  books.sort((a, b) => b.Rating - a.Rating);
}

const booksHtml = books
.map((book) => {
  return `<div class="book">
  <figure class="book__img--wrapper">
  <img class="book__img" src="${book.url}" alt="">
  </figure>
  <div class="book__title">
  ${book.title}
  </div>
  <div class="book__ratings">
  ${RatingsHtml(book.Rating)}
  </div>
  <div class="book__price">
  ${priceHtml(book.originalPrice, book.salePrice)}
  </div>
  </div>`;
})
.join("")

booksWrapper.innerHTML = booksHtml;
}

function priceHtml(originalPrice, salePrice) {
  if (!salePrice) {
    return `$${originalPrice.toFixed(2)}`
  }
  else {
return `<span class="book__price--normal">$${originalPrice}</span>$${salePrice.toFixed(2)}`
  }
}
 
  //<span>$${book.originalPrice.toFixed(2)}</span>


function RatingsHtml(Rating) {
  let RatingHtml = "";
  for (let i = 0; i < Math.floor(Rating); ++i) {
    RatingHtml += '<i class="fas fa-star"></i>\n';
  }
  if (!Number.isInteger(Rating)) {
    RatingHtml += '<i class="fas fa-star-half-alt"></i>\n';
  }
  return RatingHtml;
}


function filterbooks(event) {
  renderBooks(event.target.value);
}
setTimeout(() =>{
  renderBooks();
});



function getBooks() {
  return new Promise((resolve) => {
setTimeout(() => {
  resolve([
    {
      id: 1,
      title: "Crack The Coding Interview",
      url: "assets/crack the coding interview.png",
      originalPrice: 49.95,
      salePrice: 14.95,
      Rating: 4.5,
    },
    {
      id: 2,
      title: "Atomic Habits",
      url: "assets/atomic habits.jpg",
      originalPrice: 39,
      salePrice: null,
      Rating: 4.5,
    },
    {
      id: 3,
      title: "Deep Work",
      url: "assets/deep work.jpeg",
      originalPrice: 29,
      salePrice: 12,
      Rating: 5,
    },
    {
      id: 4,
      title: "The 10x Rule",
      url: "assets/book-1.jpeg",
      originalPrice: 44,
      salePrice: 19,
      Rating: 4.5,
    },
    {
      id: 5,
      title: "Be Obsessed Or Be Average",
      url: "assets/book-2.jpeg",
      originalPrice: 32,
      salePrice: 17,
      Rating: 4,
    },
    {
      id: 6,
      title: "Rich Dad Poor Dad",
      url: "assets/book-3.jpeg",
      originalPrice: 70,
      salePrice: 12.5,
      Rating: 5,
    },
    {
      id: 7,
      title: "Cashflow Quadrant",
      url: "assets/book-4.jpeg",
      originalPrice: 11,
      salePrice: 10,
      Rating: 4,
    },
    {
      id: 8,
      title: "48 Laws of Power",
      url: "assets/book-5.jpeg",
      originalPrice: 38,
      salePrice: 17.95,
      Rating: 4.5,
    },
    {
      id: 9,
      title: "The 5 Second Rule",
      url: "assets/book-6.jpeg",
      originalPrice: 35,
      salePrice: null,
      Rating: 4,
    },
    {
      id: 10,
      title: "Your Next Five Moves",
      url: "assets/book-7.jpg",
      originalPrice: 40,
      salePrice: null,
      Rating: 4,
    },
    {
      id: 11,
      title: "Mastery",
      url: "assets/book-8.jpeg",
      originalPrice: 30,
      salePrice: null,
      Rating: 4,
    },
        ]);
}, 1000);
  });
}