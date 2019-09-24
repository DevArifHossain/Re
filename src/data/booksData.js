import nanoid from "nanoid";

const books = {
  fiction: [
    {
      id: nanoid(),
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      price: 6.99,
      publisher: "Harper Perennial Modern Classics",
      length: "324 pages",
      language: "English"
    },
    {
      id: nanoid(),
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      price: 12.0,
      publisher: "Scholastic Inc",
      length: "322 pages",
      language: "English"
    },
    {
      id: nanoid(),
      title: "The Kite Runner",
      author: "Khaled Hosseini",
      price: 8.5,
      publisher: "Riverhead Books",
      length: "371 pages",
      language: "English"
    },
    {
      id: nanoid(),
      title: "Catching Fire",
      author: "Suzanne Collins",
      price: 9.99,
      publisher: "Scholastic Press",
      length: "391 pages",
      language: "English"
    },
    {
      id: nanoid(),
      title: "Brave New World",
      author: "Aldous Huxley",
      price: 20.38,
      publisher: "HarperPerennial / Perennial Classics",
      length: "288 pages",
      language: "English"
    }
  ],
  mystery: [
    {
      id: nanoid(),
      title: "The Girl with the Dragon Tattoo",
      author: "Stieg Larsson",
      price: 9.99,
      publisher: "Knopf",
      length: "465 pages",
      language: "English"
    },
    {
      id: nanoid(),
      title: "The Adventures of Sherlock Holmes",
      author: "Arthur Conan Doyle",
      price: 33.33,
      publisher: "Oxford University Press",
      length: "339 pages",
      language: "English"
    },
    {
      id: nanoid(),
      title: "Rebecca",
      author: "Daphne du Maurier",
      price: 19.99,
      publisher: "Little, Brown and Company",
      length: "449 pages",
      language: "English"
    }
  ],
  history: [
    {
      id: nanoid(),
      title: "The Diary of a Young Girl",
      author: "Anne Frank",
      price: 3.33,
      publisher: "Bantam",
      length: "283 pages",
      language: "English"
    },
    {
      id: nanoid(),
      title: "John Adams",
      author: "David McCullough",
      price: 8.79,
      publisher: "Simon & Schuster Paperbacks",
      length: "751 pages",
      language: "English"
    }
  ],

  fantasy: [
    {
      id: nanoid(),
      title: "Animal Farm",
      author: "George Orwell",
      price: 6.99,
      publisher: "NAL",
      length: "122 pages",
      language: "English"
    },

    {
      id: nanoid(),
      title: "The Handmaid's Tale",
      author: "Margaret Atwood",
      price: 15.15,
      publisher: "Anchor Books",
      length: "344 pages",
      language: "English"
    }
  ],

  science: [
    {
      id: nanoid(),
      title: "A Brief History of Time",
      author: "Stephen Hawking",
      publisher: "Bantam Books",
      price: 36.99,
      length: "212 pages",
      language: "English"
    },
    {
      id: nanoid(),
      title: "Guns, Germs, and Steel: The Fates of Human Societies",
      author: "Jared Diamond",
      publisher: "W.W. Norton & Company ",
      price: 19.0,
      length: "425 pages",
      language: "English"
    },
    {
      id: nanoid(),
      title: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      publisher: "Farrar, Straus and Giroux",
      price: 11.48,
      length: "499 pages",
      language: "English"
    },
    {
      id: nanoid(),
      title: "Homo Deus: A History of Tomorrow",
      author: "Yuval Noah Harari",
      price: 7.79,
      publisher: "Harper",
      length: "450 pages",
      language: "English"
    }
  ],

  others: [
    {
      id: nanoid(),
      title: "Steve Jobs",
      author: "Walter Isaacson",
      price: 35.0,
      publisher: "Simon & Schuster",
      length: "656 pages",
      language: "English"
    },
    {
      id: nanoid(),
      title: "The Reckless Oath We Made",
      author: "Bryn Greenwood",
      price: 16.32,
      publisher: "G.P. Putnam's Sons",
      length: "448 pages",
      language: "English"
    },
    {
      id: nanoid(),
      title: "The Silent Patient",
      author: "Alex Michaelides",
      publisher: "Celadon Books",
      price: 17.49,
      length: "323 pages",
      language: "English"
    }
  ]
};

export default books;
