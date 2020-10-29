import { types, destroy } from "mobx-state-tree";

const Movie = types
  .model("Movie", {
    title: types.string,
    uri: types.string,
    desc: types.string,
    released: types.string,
    desc: types.string,
    key: types.string,
  })
  .actions((self) => ({
    toggleFocused() {
      self.focused = !self.focused;
    },
    toggleSelected() {
      self.selected = !self.selected;
    },
  }));

const MovieStore = types
  .model({
    movies: types.array(Movie),
  })
  .views((self) => ({
    get selectedMovies() {
      return self.movies.filter((movie) => movie.selected);
    },
  }))
  .actions((self) => ({
    addMovies(movie) {
      self.movies.push(movie);
    },
    removeMovies(movie) {
      destroy(movie);
    },
  }))
  .create({
    movies: [
      {
        uri:
          "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9",
        title: "Avengers: End Game",
        released: "2019 ‧ Action/Sci-fi ‧ 3h 2m",
        key: "1",
        desc:
          "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
      },
      {
        uri:
          "https://www.spotlightstheatre.co.uk/wordpress/wp-content/uploads/2019/11/f_frozen2_header_mobile_18432_d258f93f.jpeg",
        title: "Frozen II",
        released: "2019 ‧ Animation/Musical ‧ 1h 43m",
        key: "2",
        desc:
          "Elsa the Snow Queen has an extraordinary gift -- the power to create ice and snow. But no matter how happy she is to be surrounded by the people of Arendelle, Elsa finds herself strangely unsettled.",
      },
      {
        uri:
          "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSxo7Naxu0tjuSEZ9_faYL--aWjx8V5TKr4q2YeenYKXXik-T5P",
        title: "Alita: Battle Angel",
        released: "2019 ‧ Action/Sci-fi ‧ 2h 2m",
        key: "3",
        desc:
          "Alita, a battle cyborg, is revived by Ido, a doctor, who realises that she actually has the soul of a teenager. Alita then sets out to learn about her past and find her true identity.",
      },
      {
        uri:
          "https://www.gstatic.com/tv/thumb/v22vodart/15879807/p15879807_v_v8_aa.jpg",
        title: "The Irish Man",
        released: "2019 ‧ Crime/Drama ‧ 3h 30m",
        key: "4",
        desc:
          "In the 1950s, truck driver Frank Sheeran gets involved with Russell Bufalino and his Pennsylvania crime family. As Sheeran climbs the ranks to become a top hit man, he also goes to work for Jimmy Hoffa.",
      },
      {
        uri:
          "https://i.pinimg.com/originals/99/03/9a/99039a6afb682e42c9a12556071b38c9.jpg",
        title: "John Wick Chapter 3",
        released: "2019 ‧ Action/Thriller ‧ 2h 10m",
        key: "5",
        desc:
          "John Wick is declared excommunicado and a hefty bounty is set on him after he murders an international crime lord. He sets out to seek help to save himself from ruthless hitmen and bounty hunters.",
      },
    ],
  });

export default MovieStore;
