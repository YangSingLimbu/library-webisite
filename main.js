const topBooks = [
  {
    author: "James Clear",
    title: "Atomic Habits",
    image: "./books/book1.jpg",
    edition: "1st Edition",
  },
  {
    author: "Robert Kiyosaki",
    title: "Rich Dad Poor Dad",
    image: "./books/book2.jpg",
    edition: "1st Edition",
  },
  {
    author: "Dale Carnegie",
    title: "How to win friends and influence people",
    image: "./books/book3.jpg",
    edition: "1st Edition",
  },
  {
    author: "Charles Petzold",
    title: "Code: The Hidden Language of Computer Hardware and Software",
    image: "./books/book4.webp",
    edition: "1st Edition",
  },
  {
    author: "Eric Matthes",
    title: "Python Crash Course",
    image: "./books/book5.webp",
    edition: "3rd Edition",
  },
  {
    author: " Cory Althoff",
    title: "The Self-Taught Programmer",
    image: "./books/book6.webp",
    edition: "1st Edition",
  },
  {
    author: " Peter Frampton , Mark Robilliard",
    title: "The Joy of Accounting",
    image: "./books/book7.webp",
    edition: "1st Edition",
  },
  {
    author: "Wayne Label",
    title: "Accounting for Non-Accountants",
    image: "./books/book4.webp",
    edition: "1st Edition",
  },
  {
    author: "Thomas Ittelson",
    title: "Financial Statement",
    image: "./books/book9.webp",
    edition: "1st Edition",
  },
  {
    author: "Corinth Ruiz",
    title: "100 Days of Code Learning Journal",
    image: "./books/book10.webp",
    edition: "1st Edition",
  },
];

function createBookCollection() {
  const collection = document.createElement("div");
  collection.className = "items_collections";

  topBooks.forEach((book, index) => {
    const item = document.createElement("div");
    item.className = "collection_item";

    const img = document.createElement("img");
    img.src = book.image;
    img.alt = "";
    img.className = "item_img";

    const details = document.createElement("div");
    details.className = "item_details";

    const title = document.createElement("h3");
    title.textContent = book.title;

    const author = document.createElement("p");
    const authorLabel = document.createElement("label");
    authorLabel.htmlFor = `book_author_${index}`;
    authorLabel.textContent = "Author:";
    const authorName = document.createElement("span");
    authorName.id = `book_author_${index}`;
    authorName.textContent = book.author;
    author.appendChild(authorLabel);
    author.appendChild(authorName);

    const edition = document.createElement("p");
    const editionLabel = document.createElement("label");
    editionLabel.htmlFor = `book_edition_${index}`;
    editionLabel.textContent = "Edition:";
    const editionName = document.createElement("span");
    editionName.id = `book_edition_${index}`;
    editionName.textContent = book.edition;
    edition.appendChild(editionLabel);
    edition.appendChild(editionName);

    details.appendChild(title);
    details.appendChild(author);
    details.appendChild(edition);

    item.appendChild(img);
    item.appendChild(details);

    collection.appendChild(item);
  });

  return collection;
}

document.querySelector(".collection").appendChild(createBookCollection());

let select = document.getElementById("itemType");

topBooks.forEach((book) => {
  let option = document.createElement("option");
  option.value = book.title;
  option.text = book.title;
  select.appendChild(option);
});

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  let inputs = this.querySelectorAll("input");
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value === "") {
      alert("Please fill all the fields");
      return;
    }
  }

  alert("The form is submitted");
});

//calculating fine
document.querySelector(".find_fine").addEventListener("click", function () {
  const issueDate = new Date(document.querySelector("#issue_date").value);
  const submissionDate = new Date(
    document.querySelector("#submission_date").value
  );

  const differenceInDays = (submissionDate - issueDate) / (1000 * 3600 * 24);

  let fine = 0;
  if (differenceInDays > 14) {
    fine = (differenceInDays - 14) * 2;
  }

  document.querySelector(".fine").textContent = `Your fine is $${fine}`;
});
