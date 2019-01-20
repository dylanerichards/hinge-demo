User.create(
  first_name: "Dylan",
  last_name: "Richards",
  question_1: "Never have I ever",
  answer_1: "Had a chocolate chip cookie",
  question_1: "How my mother would describe me",
  answer_1: "Mystical",
  photos: [
    "https://picsum.photos/200/300/?random",
    "https://picsum.photos/200/300/?random",
    "https://picsum.photos/200/300/?random",
    "https://picsum.photos/200/300/?random",
    "https://picsum.photos/200/300/?random",
    "https://picsum.photos/200/300/?random",
  ]
)

User.create(
  first_name: "Yessennia",
  last_name: "Perez",
  photos: [
    "https://picsum.photos/200/300/",
    "https://picsum.photos/200/300/",
    "https://picsum.photos/200/300/",
    "https://picsum.photos/200/300/",
    "https://picsum.photos/200/300/",
    "https://picsum.photos/200/300/",
  ]
)

Question.create(body: "Never have I ever")
Question.create(body: "How my mother would describe me")
Question.create(body: "Unusual skills")
Question.create(body: "At the party you can find me")
