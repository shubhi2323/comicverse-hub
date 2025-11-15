const comics = [
  {
    id: "001",
    title: "The Amazing Spider-Man #1",
    price: 4.99,
    publisher: "Marvel",
    genre: "Superhero",
    releaseDate: "2024-01-15",
    description: "Peter Parker faces his greatest challenge yet as a new villain emerges from the shadows. With his powers pushed to the limit, Spider-Man must protect the city he loves while balancing his personal life.",
    image: "assets/images/comic-001.jpg",
    creators: "Stan Lee, Steve Ditko"
  },
  {
    id: "002",
    title: "Batman: The Dark Knight Returns",
    price: 5.99,
    publisher: "DC",
    genre: "Superhero",
    releaseDate: "2024-02-01",
    description: "An older Bruce Wayne comes out of retirement to save Gotham City from a new wave of crime. This gritty tale explores the darkness within the Dark Knight.",
    image: "assets/images/comic-002.jpg",
    creators: "Frank Miller, Klaus Janson"
  },
  {
    id: "003",
    title: "Saga #1",
    price: 3.99,
    publisher: "Image",
    genre: "Sci-Fi",
    releaseDate: "2024-01-20",
    description: "An epic space opera about two lovers from warring alien races. Their forbidden romance sparks a galaxy-spanning conflict that will change everything.",
    image: "assets/images/comic-003.jpg",
    creators: "Brian K. Vaughan, Fiona Staples"
  },
  {
    id: "004",
    title: "X-Men: Days of Future Past",
    price: 6.99,
    publisher: "Marvel",
    genre: "Superhero",
    releaseDate: "2024-02-10",
    description: "The X-Men must travel through time to prevent a dystopian future where mutants are hunted to extinction. A classic tale of hope and sacrifice.",
    image: "assets/images/comic-004.jpg",
    creators: "Chris Claremont, John Byrne"
  },
  {
    id: "005",
    title: "Watchmen #1",
    price: 5.99,
    publisher: "DC",
    genre: "Superhero",
    releaseDate: "2024-01-25",
    description: "A deconstruction of the superhero genre set in an alternate 1985. When a former hero is murdered, it uncovers a conspiracy that threatens the world.",
    image: "assets/images/comic-005.jpg",
    creators: "Alan Moore, Dave Gibbons"
  },
  {
    id: "006",
    title: "The Walking Dead #1",
    price: 3.99,
    publisher: "Image",
    genre: "Horror",
    releaseDate: "2024-02-05",
    description: "Rick Grimes awakens from a coma to find the world overrun by zombies. He must navigate this new reality while searching for his family.",
    image: "assets/images/comic-006.jpg",
    creators: "Robert Kirkman, Tony Moore"
  },
  {
    id: "007",
    title: "Iron Man: Extremis",
    price: 4.99,
    publisher: "Marvel",
    genre: "Superhero",
    releaseDate: "2024-01-30",
    description: "Tony Stark faces a new threat that pushes his technology to the absolute limit. The Extremis virus could change what it means to be Iron Man forever.",
    image: "assets/images/comic-007.jpg",
    creators: "Warren Ellis, Adi Granov"
  },
  {
    id: "008",
    title: "Superman: Red Son",
    price: 5.99,
    publisher: "DC",
    genre: "Superhero",
    releaseDate: "2024-02-15",
    description: "What if Superman's rocket had landed in Soviet Russia instead of America? This alternate reality explores a world where the Man of Steel serves communism.",
    image: "assets/images/comic-008.jpg",
    creators: "Mark Millar, Dave Johnson"
  },
  {
    id: "009",
    title: "Invincible #1",
    price: 3.99,
    publisher: "Image",
    genre: "Superhero",
    releaseDate: "2024-01-18",
    description: "Mark Grayson is just like everyone else, except his father is the most powerful superhero on the planet. When he develops powers of his own, his life changes forever.",
    image: "assets/images/comic-009.jpg",
    creators: "Robert Kirkman, Cory Walker"
  },
  {
    id: "010",
    title: "The Avengers: Infinity War",
    price: 6.99,
    publisher: "Marvel",
    genre: "Superhero",
    releaseDate: "2024-02-20",
    description: "The Mad Titan Thanos seeks the Infinity Stones to reshape reality. Earth's mightiest heroes must unite to stop him before it's too late.",
    image: "assets/images/comic-010.jpg",
    creators: "Jim Starlin, George Pérez"
  },
  {
    id: "011",
    title: "The Flash: Rebirth",
    price: 4.99,
    publisher: "DC",
    genre: "Superhero",
    releaseDate: "2024-01-22",
    description: "Barry Allen returns from the Speed Force to find the world has changed. A new threat emerges that only the Fastest Man Alive can stop.",
    image: "assets/images/comic-011.jpg",
    creators: "Geoff Johns, Ethan Van Sciver"
  },
  {
    id: "012",
    title: "Deadpool: The Good, The Bad, and The Ugly",
    price: 4.99,
    publisher: "Marvel",
    genre: "Superhero",
    releaseDate: "2024-02-12",
    description: "The Merc with a Mouth teams up with Wolverine and Captain America for a mission that's as ridiculous as it is dangerous. Classic Deadpool humor meets serious action.",
    image: "assets/images/comic-012.jpg",
    creators: "Gerry Duggan, Brian Posehn"
  },
  {
    id: "013",
    title: "Green Lantern: Rebirth",
    price: 5.99,
    publisher: "DC",
    genre: "Superhero",
    releaseDate: "2024-01-28",
    description: "Hal Jordan returns as the Green Lantern after years of being the Spectre. The Green Lantern Corps faces its greatest challenge yet.",
    image: "assets/images/comic-013.jpg",
    creators: "Geoff Johns, Ethan Van Sciver"
  },
  {
    id: "014",
    title: "The Wicked + The Divine #1",
    price: 3.99,
    publisher: "Image",
    genre: "Fantasy",
    releaseDate: "2024-02-08",
    description: "Every 90 years, twelve gods are reincarnated as young people. They are loved. They are hated. In two years, they are dead. A modern mythology about fame and mortality.",
    image: "assets/images/comic-014.jpg",
    creators: "Kieron Gillen, Jamie McKelvie"
  },
  {
    id: "015",
    title: "Captain America: The Winter Soldier",
    price: 5.99,
    publisher: "Marvel",
    genre: "Superhero",
    releaseDate: "2024-02-18",
    description: "Steve Rogers discovers that his old friend Bucky Barnes is alive and has been brainwashed into becoming an assassin. A story of friendship, loyalty, and redemption.",
    image: "assets/images/comic-015.jpg",
    creators: "Ed Brubaker, Steve Epting"
  },
  {
    id: "016",
    title: "Wonder Woman: Year One",
    price: 4.99,
    publisher: "DC",
    genre: "Superhero",
    releaseDate: "2024-01-12",
    description: "Diana Prince leaves Themyscira for the first time to become Wonder Woman. Her journey of discovery in Man's World begins in this modern retelling.",
    image: "assets/images/comic-016.jpg",
    creators: "Greg Rucka, Nicola Scott"
  },
  {
    id: "017",
    title: "Monstress #1",
    price: 4.99,
    publisher: "Image",
    genre: "Fantasy",
    releaseDate: "2024-02-22",
    description: "Set in an alternate matriarchal 1900s Asia, a teenage girl struggles to survive the trauma of war and shares a mysterious psychic link with a monster of tremendous power.",
    image: "assets/images/comic-017.jpg",
    creators: "Marjorie Liu, Sana Takeda"
  },
  {
    id: "018",
    title: "Thor: God of Thunder",
    price: 5.99,
    publisher: "Marvel",
    genre: "Superhero",
    releaseDate: "2024-01-08",
    description: "The God Butcher has been killing gods across time. Thor must team up with his past and future selves to stop this cosmic threat before all gods are destroyed.",
    image: "assets/images/comic-018.jpg",
    creators: "Jason Aaron, Esad Ribić"
  },
  {
    id: "019",
    title: "Aquaman: The Trench",
    price: 4.99,
    publisher: "DC",
    genre: "Superhero",
    releaseDate: "2024-02-25",
    description: "A mysterious race of sea creatures emerges from the depths, threatening the surface world. Aquaman must protect both land and sea from this new threat.",
    image: "assets/images/comic-019.jpg",
    creators: "Geoff Johns, Ivan Reis"
  },
  {
    id: "020",
    title: "Paper Girls #1",
    price: 3.99,
    publisher: "Image",
    genre: "Sci-Fi",
    releaseDate: "2024-01-05",
    description: "In the early morning hours after Halloween of 1988, four 12-year-old newspaper delivery girls uncover the most important story of all time. A time-traveling adventure.",
    image: "assets/images/comic-020.jpg",
    creators: "Brian K. Vaughan, Cliff Chiang"
  }
];

