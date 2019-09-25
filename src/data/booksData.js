import nanoid from "nanoid";

import ToKillMockingBird from "../assets/images/books/fiction/To-Kill-a-Mockingbird.jpg";
import CatchingFire from "../assets/images/books/fiction/Catching-Fire.jpg";
import BraveNewWorld from "../assets/images/books/fiction/Brave-New-World.jpg";
import TheKiteRunner from "../assets/images/books/fiction/the-kite-runner.jpg";
import HarryPotterAndSorcerStone from "../assets/images/books/fiction/Harry-Potter-and-the-Sorcerers-Stone.jpg";
import Rebecca from "../assets/images/books/mystery/Rebecca.jpg";
import TheGirlWithDragonTatto from "../assets/images/books/mystery/The_Girl_with_the_Dragon_Tattoo.jpg";
import TheAdventuresOfSherlokHomes from "../assets/images/books/mystery/the-adventures-of-sherlock-holmes.jpg";
import TheDiaryOfYoungGirl from "../assets/images/books/history/the_Diary_of_a_Young_Girl.png";
import JohnAdams from "../assets/images/books/history/John_Adams.jpg";
import AnimalFarm from "../assets/images/books/fantasy/animal-farm.jpg";
import TheHandmaidsTale from "../assets/images/books/fantasy/Margaret-Atwood.jpg";
import BriefHistoryOfTime from "../assets/images/books/science/A_Brief_History_of_Time.jpg";
import GGS_TheFatesOfHumanSocieties from "../assets/images/books/science/gun_germs_steel.jpg";
import ThinkingFastAndSlow from "../assets/images/books/science/Thinking_Fast_and_Slow.jpg";
import HistoryOfTomorrow from "../assets/images/books/science/Homo_Deus.A_History_of_Tomorrow.jpg";
import SteveJobs from "../assets/images/books/others/Steve_jobs.jpg";
import TheRecklessOathWeMade from "../assets/images/books/others/The_Reckless_Oath_We_Made.jpg";
import TheSilentPatient from "../assets/images/books/others/The_Silent_Patient.jpg";

const books = {
  fiction: [
    {
      id: nanoid(),
      title: "To Kill a Mockingbird",
      imgUrl: ToKillMockingBird,
      author: "Harper Lee",
      price: 6.99,
      publisher: "Harper Perennial Modern Classics",
      length: "324 pages",
      language: "English"
    },
    {
      id: nanoid(),
      title: "Harry Potter and the Sorcerer's Stone",
      imgUrl: HarryPotterAndSorcerStone,
      author: "J.K. Rowling",
      price: 12.0,
      publisher: "Scholastic Inc",
      length: "322 pages",
      language: "English"
    },
    {
      id: nanoid(),
      title: "The Kite Runner",
      imgUrl: TheKiteRunner,
      author: "Khaled Hosseini",
      price: 8.5,
      publisher: "Riverhead Books",
      length: "371 pages",
      language: "English"
    },
    {
      id: nanoid(),
      title: "Catching Fire",
      imgUrl: CatchingFire,
      author: "Suzanne Collins",
      price: 9.99,
      publisher: "Scholastic Press",
      length: "391 pages",
      language: "English"
    },
    {
      id: nanoid(),
      title: "Brave New World",
      imgUrl: BraveNewWorld,
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
      imgUrl: TheGirlWithDragonTatto,
      author: "Stieg Larsson",
      price: 9.99,
      publisher: "Knopf",
      length: "465 pages",
      language: "English"
    },
    {
      id: nanoid(),
      title: "The Adventures of Sherlock Holmes",
      imgUrl: TheAdventuresOfSherlokHomes,
      author: "Arthur Conan Doyle",
      price: 33.33,
      publisher: "Oxford University Press",
      length: "339 pages",
      language: "English"
    },
    {
      id: nanoid(),
      title: "Rebecca",
      imgUrl: Rebecca,
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
      imgUrl: TheDiaryOfYoungGirl,
      author: "Anne Frank",
      price: 3.33,
      publisher: "Bantam",
      length: "283 pages",
      language: "English"
    },
    {
      id: nanoid(),
      title: "John Adams",
      imgUrl: JohnAdams,
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
      imgUrl: AnimalFarm,
      author: "George Orwell",
      price: 6.99,
      publisher: "NAL",
      length: "122 pages",
      language: "English"
    },

    {
      id: nanoid(),
      title: "The Handmaid's Tale",
      imgUrl: TheHandmaidsTale,
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
      imgUrl: BriefHistoryOfTime,
      author: "Stephen Hawking",
      publisher: "Bantam Books",
      price: 36.99,
      length: "212 pages",
      language: "English"
    },
    {
      id: nanoid(),
      title: "Guns, Germs, and Steel: The Fates of Human Societies",
      imgUrl: GGS_TheFatesOfHumanSocieties,
      author: "Jared Diamond",
      publisher: "W.W. Norton & Company ",
      price: 19.0,
      length: "425 pages",
      language: "English"
    },
    {
      id: nanoid(),
      title: "Thinking, Fast and Slow",
      imgUrl: ThinkingFastAndSlow,
      author: "Daniel Kahneman",
      publisher: "Farrar, Straus and Giroux",
      price: 11.48,
      length: "499 pages",
      language: "English"
    },
    {
      id: nanoid(),
      title: "Homo Deus: A History of Tomorrow",
      imgUrl: HistoryOfTomorrow,
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
      imgUrl: SteveJobs,
      author: "Walter Isaacson",
      price: 35.0,
      publisher: "Simon & Schuster",
      length: "656 pages",
      language: "English"
    },
    {
      id: nanoid(),
      title: "The Reckless Oath We Made",
      imgUrl: TheRecklessOathWeMade,
      author: "Bryn Greenwood",
      price: 16.32,
      publisher: "G.P. Putnam's Sons",
      length: "448 pages",
      language: "English"
    },
    {
      id: nanoid(),
      title: "The Silent Patient",
      imgUrl: TheSilentPatient,
      author: "Alex Michaelides",
      publisher: "Celadon Books",
      price: 17.49,
      length: "323 pages",
      language: "English"
    }
  ]
};

export default books;
