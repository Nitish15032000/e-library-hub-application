import divineComedy from './images/the-divine-comedy.jpg';
import epicGilgamesh from './images/the-epic-of-gilgamesh.jpg';
import bookOfJob from './images/the-book-of-job.jpg';
import oneThousandNights from './images/one-thousand-and-one-nights.jpg';
import njalsSaga from './images/njals-saga.jpg';
import pridePrejudice from './images/pride-and-prejudice.jpg';
import lePereGoriot from './images/le-pere-goriot.jpg';
import molloyTrilogy from './images/molloy-malone-dies-the-unnamable.jpg';
import theDecameron from './images/the-decameron.jpg';
import ficciones from './images/ficciones.jpg';
import brothersKaramazov from './images/the-brothers-karamazov.jpg';
import middlemarch from './images/middlemarch.jpg';
import invisibleMan from './images/invisible-man.jpg';
import medea from './images/medea.jpg';
import absalomAbsalom from './images/absalom-absalom.jpg';
import soundAndFury from './images/the-sound-and-the-fury.jpg';
import madameBovary from './images/madame-bovary.jpg';
import sentimentalEducation from './images/l-education-sentimentale.jpg';
import gypsyBallads from './images/gypsy-ballads.jpg';
import oneHundredYears from './images/one-hundred-years-of-solitude.jpg';
import loveInCholera from './images/love-in-the-time-of-cholera.jpg';
import faust from './images/faust.jpg';
import deadSouls from './images/dead-souls.jpg';
import tinDrum from './images/the-tin-drum.jpg';
import shakuntala from './images/the-recognition-of-shakuntala.jpg';
import odyssey from './images/the-odyssey-of-homer.jpg';
import iliad from './images/the-iliad-of-homer.jpg';
import kafkaStories from './images/stories-of-franz-kafka.jpg';
import kafkaTrial from './images/the-trial.jpg';
import kafkaCastle from './images/the-castle.jpg';
import soundOfMountain from './images/the-sound-of-the-mountain.jpg';
import oldManSea from './images/the-old-man-and-the-sea.jpg';
import devilToPay from './images/the-devil-to-pay-in-the-backlands.jpg';
import sonsAndLovers from './images/sons-and-lovers.jpg';
import independent from "./images/independent-people.jpg";
import zorba from './images/zorba-the-greek.jpg';
import poems from './images/poems-giacomo-leopardi.jpg';
import notebook from './images/the-golden-notebook.jpg';
import longstocking from './images/pippi-longstocking.jpg';
import madman from './images/diary-of-a-madman.jpg';
import childrenGebelawi from './images/children-of-gebelawi.jpg';
import buddenbrooks from './images/buddenbrooks.jpg';
import magicMountain from './images/the-magic-mountain.jpg';
import mobyDick from './images/moby-dick.jpg';
import essais from './images/essais.jpg';
import history from './images/history.jpg';
import beloved from './images/beloved.jpg';
import genji from './images/the-tale-of-genji.jpg';
import manWithoutQualities from './images/the-man-without-qualities.jpg';
import lolita from './images/lolita.jpg';
import nineteenEightyFour from './images/nineteen-eighty-four.jpg';

const books = [
   {
      id: 1,
      author: "Dante Alighieri",
      country: "Italy",
      imageLink: divineComedy,
      language: "Italian",
      link: "https://en.wikipedia.org/wiki/Divine_Comedy",
      pages: 928,
      title: "The Divine Comedy",
      year: 1315,
      genre: ["Epic Poetry"],
      rating: 4.6
   },
   {
      id: 2,
      author: "Unknown",
      country: "Sumer and Akkadian Empire",
      imageLink: epicGilgamesh,
      language: "Akkadian",
      link: "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh",
      pages: 160,
      title: "The Epic Of Gilgamesh",
      year: -1700,
      genre: ["Mythology"],
      rating: 4.5
   },
   {
      id: 3,
      author: "Unknown",
      country: "Achaemenid Empire",
      imageLink: bookOfJob,
      language: "Hebrew",
      link: "https://en.wikipedia.org/wiki/Book_of_Job",
      pages: 176,
      title: "The Book Of Job",
      year: 601,
      genre: ["Non-Fiction"],
      rating: 4.2
   },
   {
      id: 4,
      author: "Unknown",
      country: "India/Iran/Iraq/Egypt/Tajikistan",
      imageLink: oneThousandNights,
      language: "Arabic",
      link: "https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights",
      pages: 287,
      title: "One Thousand and One Nights",
      year: 1200,
      genre: ["Fantasy"],
      rating: 4.8
   },
   {
      id: 5,
      author: "Unknown",
      country: "Iceland",
      imageLink: njalsSaga,
      language: "Old Norse",
      link: "https://en.wikipedia.org/wiki/Nj%C3%A1ls_saga",
      pages: 384,
      title: "Njál's Saga",
      year: 1350,
      genre: ["Epic Poetry"],
      rating: 4.4
   },
   {
      id: 6,
      author: "Jane Austen",
      country: "United Kingdom",
      imageLink: pridePrejudice,
      language: "English",
      link: "https://en.wikipedia.org/wiki/Pride_and_Prejudice",
      pages: 226,
      title: "Pride and Prejudice",
      year: 1813,
      genre: ["Fiction", "Romance"],
      rating: 4.9
   },
   {
      id: 7,
      author: "Honoré de Balzac",
      country: "France",
      imageLink: lePereGoriot,
      language: "French",
      link: "https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot",
      pages: 443,
      title: "Le Père Goriot",
      year: 1835,
      genre: ["Fiction"],
      rating: 4.6
   },
   {
      id: 8,
      author: "Samuel Beckett",
      country: "Republic of Ireland",
      imageLink: molloyTrilogy,
      language: "French, English",
      link: "https://en.wikipedia.org/wiki/Molloy_(novel)",
      pages: 256,
      title: "Molloy, Malone Dies, The Unnamable, the trilogy",
      year: 1952,
      genre: ["Non-Fiction", "Philosophy"],
      rating: 4.3
   },
   {
      id: 9,
      author: "Giovanni Boccaccio",
      country: "Italy",
      imageLink: theDecameron,
      language: "Italian",
      link: "https://en.wikipedia.org/wiki/The_Decameron",
      pages: 1024,
      title: "The Decameron",
      year: 1351,
      genre: ["Fiction"],
      rating: 4.6
   },
   {
      id: 10,
      author: "Jorge Luis Borges",
      country: "Argentina",
      imageLink: ficciones,
      language: "Spanish",
      link: "https://en.wikipedia.org/wiki/Ficciones",
      pages: 224,
      title: "Ficciones",
      year: 1965,
      genre: ["Fantasy", "Magical Realism"],
      rating: 4.8
   },
   {
      id: 11,
      author: "Fyodor Dostoevsky",
      country: "Russia",
      imageLink: brothersKaramazov,
      language: "Russian",
      link: "https://en.wikipedia.org/wiki/The_Brothers_Karamazov",
      pages: 824,
      title: "The Brothers Karamazov",
      year: 1880,
      genre: ["Philosophy", "Drama"],
      rating: 4.9
   },
   {
      id: 12,
      author: "George Eliot",
      country: "United Kingdom",
      imageLink: middlemarch,
      language: "English",
      link: "https://en.wikipedia.org/wiki/Middlemarch",
      pages: 800,
      title: "Middlemarch",
      year: 1871,
      genre: ["Fiction", "Social Commentary"],
      rating: 4.7
   },
   {
      id: 13,
      author: "Ralph Ellison",
      country: "United States",
      imageLink: invisibleMan,
      language: "English",
      link: "https://en.wikipedia.org/wiki/Invisible_Man",
      pages: 581,
      title: "Invisible Man",
      year: 1952,
      genre: ["Fiction", "Drama", "Social Commentary"],
      rating: 4.7,
   },
   {
      id: 14,
      author: "Euripides",
      country: "Greece",
      imageLink: medea,
      language: "Greek",
      link: "https://en.wikipedia.org/wiki/Medea_(play)",
      pages: 104,
      title: "Medea",
      year: -431,
      genre: ["Drama", "Tragedy"],
      rating: 4.6,
   },
   {
      id: 15,
      author: "William Faulkner",
      country: "United States",
      imageLink: absalomAbsalom,
      language: "English",
      link: "https://en.wikipedia.org/wiki/Absalom,_Absalom!",
      pages: 313,
      title: "Absalom, Absalom!",
      year: 1936,
      genre: ["Fiction", "Southern Gothic"],
      rating: 4.4,
   },
   {
      id: 16,
      author: "William Faulkner",
      country: "United States",
      imageLink: soundAndFury,
      language: "English",
      link: "https://en.wikipedia.org/wiki/The_Sound_and_the_Fury",
      pages: 326,
      title: "The Sound and the Fury",
      year: 1929,
      genre: ["Fiction", "Southern Gothic", "Modernist"],
      rating: 4.5,
   },
   {
      id: 17,
      author: "Gustave Flaubert",
      country: "France",
      imageLink: madameBovary,
      language: "French",
      link: "https://en.wikipedia.org/wiki/Madame_Bovary",
      pages: 528,
      title: "Madame Bovary",
      year: 1857,
      genre: ["Realism", "Fiction"],
      rating: 4.6,
   },
   {
      id: 18,
      author: "Gustave Flaubert",
      country: "France",
      imageLink: sentimentalEducation,
      language: "French",
      link: "https://en.wikipedia.org/wiki/Sentimental_Education",
      pages: 606,
      title: "Sentimental Education",
      year: 1869,
      genre: ["Fiction", "Realism", "Romance"],
      rating: 4.3,
   },
   {
      id: 19,
      author: "Federico García Lorca",
      country: "Spain",
      imageLink: gypsyBallads,
      language: "Spanish",
      link: "https://en.wikipedia.org/wiki/Gypsy_Ballads",
      pages: 218,
      title: "Gypsy Ballads",
      year: 1928,
      genre: ["Poetry", "Drama", "Fiction"],
      rating: 4.7,
   },
   {
      id: 20,
      author: "Gabriel García Márquez",
      country: "Colombia",
      imageLink: oneHundredYears,
      language: "Spanish",
      link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude",
      pages: 417,
      title: "One Hundred Years of Solitude",
      year: 1967,
      genre: ["Magical Realism", "Fiction"],
      rating: 4.8,
   },
   {
      id: 21,
      author: "Gabriel García Márquez",
      country: "Colombia",
      imageLink: loveInCholera,
      language: "Spanish",
      link: "https://en.wikipedia.org/wiki/Love_in_the_Time_of_Cholera",
      pages: 369,
      title: "Love in the Time of Cholera",
      year: 1985,
      genre: ["Romance", "Fiction", "Magical Realism"],
      rating: 4.5,
   },
   {
      id: 22,
      author: "Johann Wolfgang von Goethe",
      country: "Saxe-Weimar",
      imageLink: faust,
      language: "German",
      link: "https://en.wikipedia.org/wiki/Goethe%27s_Faust",
      pages: 157,
      title: "Faust",
      year: 1832,
      genre: ["Drama", "Tragedy", "Philosophy"],
      rating: 4.7,
   },
   {
      id: 23,
      author: "Nikolai Gogol",
      country: "Russia",
      imageLink: deadSouls,
      language: "Russian",
      link: "https://en.wikipedia.org/wiki/Dead_Souls",
      pages: 431,
      title: "Dead Souls",
      year: 1842,
      genre: ["Fiction", "Satire", "Comedy"],
      rating: 4.4,
   },
   {
      id: 24,
      author: "Günter Grass",
      country: "Germany",
      imageLink: tinDrum,
      language: "German",
      link: "https://en.wikipedia.org/wiki/The_Tin_Drum",
      pages: 600,
      title: "The Tin Drum",
      year: 1959,
      genre: ["Fiction", "Magical Realism", "Political Fiction"],
      rating: 4.6,
   },
   {
      id: 25,
      author: "Kālidāsa",
      country: "India",
      imageLink: shakuntala,
      language: "Sanskrit",
      link: "https://en.wikipedia.org/wiki/Abhij%C3%B1%C4%81na%C5%9B%C4%81kuntalam",
      pages: 147,
      title: "The recognition of Shakuntala",
      year: 150,
      genres: ["Drama", "Mythology", "Indian Literature", "Classics"],
      rating: 4.5
   },
   {
      id: 26,
      author: "Homer",
      country: "Greece",
      imageLink: odyssey,
      language: "Greek",
      link: "https://en.wikipedia.org/wiki/Odyssey",
      pages: 374,
      title: "Odyssey",
      year: 890,
      genres: ["Epic Poetry", "Classics", "Greek Mythology", "Adventure"],
      rating: 4.8
   },
   {
      id: 27,
      author: "Homer",
      country: "Greece",
      imageLink: iliad,
      language: "Greek",
      link: "https://en.wikipedia.org/wiki/Iliad",
      pages: 608,
      title: "Iliad",
      year: -735,
      genres: ["Epic Poetry", "Classics", "Greek Mythology", "War Fiction"],
      rating: 4.7
   },
   {
      id: 28,
      author: "Franz Kafka",
      country: "Czechoslovakia",
      imageLink: kafkaStories,
      language: "German",
      link: "https://en.wikipedia.org/wiki/Franz_Kafka_bibliography#Short_stories",
      pages: 488,
      title: "Stories",
      year: 1924,
      genres: ["Short Stories", "Existentialism", "Psychological Fiction", "German Literature"],
      rating: 4.3
   },
   {
      id: 29,
      author: "Franz Kafka",
      country: "Czechoslovakia",
      imageLink: kafkaTrial,
      language: "German",
      link: "https://en.wikipedia.org/wiki/The_Trial",
      pages: 158,
      title: "The Trial",
      year: 1925,
      genres: ["Psychological Fiction", "Surrealism", "Existentialism", "Dystopian"],
      rating: 4.6
   },
   {
      id: 30,
      author: "Franz Kafka",
      country: "Czechoslovakia",
      imageLink: kafkaCastle,
      language: "German",
      link: "https://en.wikipedia.org/wiki/The_Castle_(novel)",
      pages: 352,
      title: "The Castle",
      year: 1926,
      genres: ["Dystopian", "Surrealism", "Psychological Fiction", "Existentialism"],
      rating: 4.4
   },
   {
      id: 31,
      author: "Yasunari Kawabata",
      country: "Japan",
      imageLink: soundOfMountain,
      language: "Japanese",
      link: "https://en.wikipedia.org/wiki/The_Sound_of_the_Mountain",
      pages: 288,
      title: "The Sound of the Mountain",
      year: 1954,
      genres: ["Japanese Literature", "Modern Fiction", "Family Drama"],
      rating: 4.2
   },
   {
      id: 32,
      author: "Ernest Hemingway",
      country: "United States",
      imageLink: oldManSea,
      language: "English",
      link: "https://en.wikipedia.org/wiki/The_Old_Man_and_the_Sea",
      pages: 128,
      title: "The Old Man and the Sea",
      year: 1952,
      genres: ["Adventure", "Modernist", "Classics", "Short Fiction"],
      rating: 4.8
   },
   {
      id: 33,
      author: "João Guimarães Rosa",
      country: "Brazil",
      imageLink: devilToPay,
      language: "Portuguese",
      link: "https://en.wikipedia.org/wiki/The_Devil_to_Pay_in_the_Backlands",
      pages: 494,
      title: "The Devil to Pay in the Backlands",
      year: 1956,
      genres: ["Magical Realism", "Brazilian Literature", "Fiction", "Adventure"],
      rating: 4.3
   },
   {  
      id: 34,
      author: "D. H. Lawrence",
      country: "United Kingdom",
      imageLink: sonsAndLovers,
      language: "English",
      link: "https://en.wikipedia.org/wiki/Sons_and_Lovers",
      pages: 432,
      title: "Sons and Lovers",
      year: 1913,
      genres: ["Modern Fiction", "Psychological Fiction", "Family Drama", "Literary Fiction"],
      rating: 4.5
   },
   {  
      id: 35,
      author: "Halldór Laxness",
      country: "Iceland",
      imageLink: independent,
      language: "Icelandic",
      link: "https://en.wikipedia.org/wiki/Independent_People",
      pages: 470,
      title: "Independent People",
      year: 1934,
      genres: ["Icelandic Literature", "Modern Fiction", "Literary Fiction"],
      rating: 4.1
   },
   {
      id: 36,
      author: "Nikos Kazantzakis",
      country: "Greece",
      imageLink: zorba,
      language: "Greek",
      link: "https://en.wikipedia.org/wiki/Zorba_the_Greek",
      pages: 368,
      title: "Zorba the Greek",
      year: 1946,
      genres: ["Greek Literature", "Modern Fiction", "Philosophical Fiction", "Adventure"],
      rating: 4.4
   },
   {
      id: 37,
      author: "Giacomo Leopardi",
      country: "Italy",
      imageLink: poems,
      language: "Italian",
      link: "\n",
      pages: 184,
      title: "Poems",
      year: 1818,
      genres: ["Poetry", "Italian Literature", "Romanticism"],
      rating: 4.2
   },
   {
      id: 38,
      author: "Doris Lessing",
      country: "United Kingdom",
      imageLink: notebook,
      language: "English",
      link: "https://en.wikipedia.org/wiki/The_Golden_Notebook\n",
      pages: 688,
      title: "The Golden Notebook",
      year: 1962,
      genres: ["Feminist Literature", "Modern Fiction", "Psychological Fiction"],
      rating: 4.4
   },
   {
      id: 39,
      author: "Astrid Lindgren",
      country: "Sweden",
      imageLink: longstocking,
      language: "Swedish",
      link: "https://en.wikipedia.org/wiki/Pippi_Longstocking\n",
      pages: 159,
      title: "Pippi Longstocking",
      year: 1945,
      genres: ["Children's Literature", "Adventure", "Humor"],
      rating: 4.5
   },
   {
      id: 40,
      author: "Lu Xun",
      country: "China",
      imageLink: madman,
      language: "Chinese",
      link: "https://en.wikipedia.org/wiki/A_Madman%27s_Diary\n",
      pages: 389,
      title: "Diary of a Madman",
      year: 1918,
      genres: ["Modern Fiction", "Chinese Literature", "Psychological Fiction"],
      rating: 4.3
   },
   {
      id: 41,
      author: "Naguib Mahfouz",
      country: "Egypt",
      imageLink: childrenGebelawi,
      language: "Arabic",
      link: "https://en.wikipedia.org/wiki/Children_of_Gebelawi\n",
      pages: 355,
      title: "Children of Gebelawi",
      year: 1959,
      genres: ["Magical Realism", "Egyptian Literature", "Philosophical Fiction"],
      rating: 4.1
   },
   {
      id: 42,
      author: "Thomas Mann",
      country: "Germany",
      imageLink: buddenbrooks,
      language: "German",
      link: "https://en.wikipedia.org/wiki/Buddenbrooks\n",
      pages: 736,
      title: "Buddenbrooks",
      year: 1901,
      genres: ["Family Saga", "Modern Fiction", "German Literature"],
      rating: 4.6
   },
   {
      id: 43,
      author: "Thomas Mann",
      country: "Germany",
      imageLink: magicMountain,
      language: "German",
      link: "https://en.wikipedia.org/wiki/The_Magic_Mountain\n",
      pages: 720,
      title: "The Magic Mountain",
      year: 1924,
      genres: ["Modern Fiction", "Psychological Fiction", "Philosophical Fiction"],
      rating: 4.7
   },
   {
      id: 44,
      author: "Herman Melville",
      country: "United States",
      imageLink: mobyDick,
      language: "English",
      link: "https://en.wikipedia.org/wiki/Moby-Dick\n",
      pages: 378,
      title: "Moby Dick",
      year: 1851,
      genres: ["Adventure", "American Literature", "Sea Adventure", "Classic"],
      rating: 4.8
   },
   {
      id: 45,
      author: "Michel de Montaigne",
      country: "France",
      imageLink: essais,
      language: "French",
      link: "https://en.wikipedia.org/wiki/Essays_(Montaigne)\n",
      pages: 404,
      title: "Essays",
      year: 1595,
      genres: ["Philosophy", "Essays", "Renaissance Literature"],
      rating: 4.5
   },
   {
      id: 46,
      author: "Elsa Morante",
      country: "Italy",
      imageLink: history,
      language: "Italian",
      link: "https://en.wikipedia.org/wiki/History_(novel)\n",
      pages: 611,
      title: "History",
      year: 1974,
      genres: ["Historical Fiction", "Italian Literature", "Family Drama"],
      rating: 4.2
   },
   {
      id: 47,
      author: "Toni Morrison",
      country: "United States",
      imageLink: beloved,
      language: "English",
      link: "https://en.wikipedia.org/wiki/Beloved_(novel)\n",
      pages: 321,
      title: "Beloved",
      year: 1987,
      genres: ["Historical Fiction", "African American Literature", "Magical Realism"],
      rating: 4.9
   },
   {
      id: 48,
      author: "Murasaki Shikibu",
      country: "Japan",
      imageLink: genji,
      language: "Japanese",
      link: "https://en.wikipedia.org/wiki/The_Tale_of_Genji\n",
      pages: 1360,
      title: "The Tale of Genji",
      year: 1006,
      genres: ["Classic", "Japanese Literature", "Romance", "Historical Fiction"],
      rating: 4.4
   },
   {
      id: 49,
      author: "Robert Musil",
      country: "Austria",
      imageLink: manWithoutQualities,
      language: "German",
      link: "https://en.wikipedia.org/wiki/The_Man_Without_Qualities\n",
      pages: 365,
      title: "The Man Without Qualities",
      year: 1931,
      genres: ["Modern Fiction", "Philosophical Fiction", "Austrian Literature"],
      rating: 4.3
   },
   {
      id: 50,
      author: "Vladimir Nabokov",
      country: "Russia/United States",
      imageLink: lolita,
      language: "English",
      link: "https://en.wikipedia.org/wiki/Lolita\n",
      pages: 317,
      title: "Lolita",
      year: 1955,
      genres: ["Controversial", "Modern Fiction", "Psychological Fiction", "Classic"],
      rating: 4.7
   },
   {
      id:51,
      author: "George Orwell",
      country: "United Kingdom",
      imageLink: nineteenEightyFour,
      language: "English",
      link: "https://en.wikipedia.org/wiki/Nineteen_Eighty-Four\n",
      pages: 272,
      title: "Nineteen Eighty-Four",
      year: 1949,
      genres: ["Dystopian", "Political Fiction", "Classic", "Science Fiction"],
      rating: 4.8
   },
];

export default books;
