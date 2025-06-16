export const puzzleData = [
  {
    id: 1,
    imageSrc: '/images/puzzle1.jpg',
    completed: false
  },
  {
    id: 2,
    imageSrc: '/images/puzzle2.jpg',
    completed: false
  },
  {
    id: 3,
    imageSrc: '/images/puzzle3.jpg',
    completed: false
  }
];

export const difficultyLevels = [
  {
    id: 'easy',
    name: 'Легкий',
    rows: 3,
    columns: 4,
    description: '3x4'
  },
  {
    id: 'medium',
    name: 'Средний',
    rows: 4,
    columns: 6,
    description: '4x6'
  },
  {
    id: 'hard',
    name: 'Сложный',
    rows: 6,
    columns: 8,
    description: '6x8'
  }
];

export const crosswordData = {
  size: 19,
  words: [
    {
      id: 'h1',
      word: 'Нобиле',
      clue: 'Фамилия руководителя арктической экспедицией на дирижабле «Италия»?',
      direction: 'horizontal',
      start: { row: 11, col: 12 },
      solved: false
    },
    {
      id: 'v2',
      word: 'Медведь',
      clue: 'Слово «Арктика» происходит от греческого «арктос», как переводится?',
      direction: 'vertical',
      start: { row: 10, col: 17 },
      solved: false
    },
    {
      id: 'v3',
      word: 'Врангеля',
      clue: 'На одном из островов в Северном Ледовитом океане живет самая большая в мире колония белых медведей, здесь также обитает и около 40 видов птиц. Как называется этот остров?',
      direction: 'vertical',
      start: { row: 8, col: 12 },
      solved: false
    },
    {
      id: 'h4',
      word: 'Александр',
      clue: 'Первая часть названия ледокольного парохода, который впервые преодолел Северный морской путь за одну навигацию.',
      direction: 'horizontal',
      start: { row: 9, col: 4 },
      solved: false
    },
    {
      id: 'v5',
      word: 'Арктика',
      clue: 'Поблизости от какого острова произошло крушение парохода «Челюскин»?',
      direction: 'vertical',
      start: { row: 3, col: 4 },
      solved: false
    },
    {
      id: 'h6',
      word: 'Ледокол',
      clue: 'Мощное судно, оборудованное для прохода сквозь льды, для плавания во льдах.',
      direction: 'horizontal',
      start: { row: 3, col: 2 },
      solved: false
    },
    {
      id: 'h7',
      word: 'Дирижабль',
      clue: 'Вид воздушного судна, на котором в 1928 году состоялась арктическая экспедиция под руководством итальянского исследователя Умберто Нобиле?',
      direction: 'horizontal',
      start: { row: 7, col: 1 },
      solved: false
    },
    {
      id: 'v8',
      word: 'Красноярск',
      clue: 'В каком городе начинался и заканчивался кольцевой маршрут, который совершили в июле 1936 года лётчики Г.Т. Побежимов и В.С. Молоков на летающей лодке Дорнье «Валь» облетев территорию Крайнего Севера?',
      direction: 'vertical',
      start: { row: 1, col: 6 },
      solved: false
    },
    {
      id: 'v9',
      word: 'Шмидт',
      clue: 'Кто руководил экспедицией на пароходе "Челюскин" с целью проверить возможность плавания по Северной морской трассе на корабле неледокольного класса?',
      direction: 'vertical',
      start: { row: 9, col: 15 },
      solved: false
    },
    {
      id: 'h10',
      word: 'Челюскин',
      clue: 'Название парохода, который в результате сильного сжатия был раздавлен льдами и затонул в течение двух часов в 1934 году.',
      direction: 'vertical',
      start: { row: 1, col: 2 },
      solved: false
    }
  ]
};

export const quizData = [
  {
    id: 1,
    question: 'Как назывался дирижабль, на котором весной 1928 года экспедиция подкомандованием Умберто Нобиле отправилась к Северному полюсу?',
    info: '(выберите один ответ)',
    answers: [
      { id: 'a', text: '«Италия»', correct: true },
      { id: 'b', text: '«Франция»', correct: false },
      { id: 'c', text: '«Америка»', correct: false }
    ]
  },
  {
    id: 2,
    question: 'Сколько стран приняло участие в спасательных работах дирижабля«Италия»?',
    answers: [
      { id: 'a', text: '1 страна', correct: false },
      { id: 'b', text: '3 страны', correct: false },
      { id: 'c', text: '6 стран', correct: true }
    ]
  },
  {
    id: 3,
    question: 'Какова специализация парохода «Александр Сибиряков»?',
    answers: [
      { id: 'a', text: 'рыболовный', correct: false },
      { id: 'b', text: 'ледокольный', correct: true },
      { id: 'c', text: 'пассажирский', correct: false }
    ]
  },
  {
    id: 4,
    question: 'Использовался ли ледокольный пароход «Александр Сибиряков» во время Великой Отечественной войны?',
    answers: [
      { id: 'a', text: 'да', correct: true },
      { id: 'b', text: 'нет', correct: false }
    ]
  },
  {
    id: 5,
    question: 'В каком море обрело свою гибель спасательное судно «Руслан»?',
    answers: [
      { id: 'a', text: 'Балтийское море', correct: false },
      { id: 'b', text: 'Баренцево море', correct: true },
      { id: 'c', text: 'Белое море', correct: false }
    ]
  },
  {
    id: 6,
    question: 'В спасении какого ледокольного парохода участвовало судно «Руслан», после чего затонуло?',
    answers: [
      { id: 'a', text: 'парохода «Малыгин»', correct: true },
      { id: 'b', text: 'парохода «Красин»', correct: false },
      { id: 'c', text: 'парохода «Александр Сибиряков»', correct: false }
    ]
  },
  {
    id: 7,
    question: 'Кто был капитаном ледокольного парохода «Челюскин»?',
    answers: [
      { id: 'a', text: 'Отто Шмидт', correct: false },
      { id: 'b', text: 'Борис Могилевич', correct: false },
      { id: 'c', text: 'Владимир Воронин', correct: true }
    ]
  },
  {
    id: 8,
    question: 'Сколько человек очутилось на льду после того, как затонул пароход «Челюскин»?',
    answers: [
      { id: 'a', text: '104', correct: true },
      { id: 'b', text: '104', correct: false },
      { id: 'c', text: '100', correct: false }
    ]
  },
  {
    id: 9,
    question:
      'Когда А. Ляпидевский со своим экипажем нашёл лагерь О. Шмидта и сумел посадить самолёт, челюскинцы накинулись на них – давай обнимать, целовать, прижимать к себе. Что предложили челюскинцы лётчикам в качестве угощения?',
    answers: [
      { id: 'a', text: 'рыбу', correct: false },
      { id: 'b', text: 'сгущенку', correct: false },
      { id: 'c', text: 'какао', correct: true }
    ]
  },
  {
    id: 10,
    question: 'Какого звания были удостоены лётчики, спасшие челюскинцев?',
    answers: [
      { id: 'a', text: 'Герой Советского Союза', correct: true },
      { id: 'b', text: 'Герой Российской Федерации', correct: false },
      { id: 'c', text: 'Героя Социалистического Труда', correct: false }
    ]
  },
  {
    id: 11,
    question:
      'Как назывались одномоторные советские самолёты, на которых летчики Василий Молоков, Николай Каманин и Михаил Водопьянов вывозили челюскинцев со льдины?',
    answers: [
      { id: 'a', text: 'ТБ-1', correct: false },
      { id: 'b', text: 'Р-5', correct: true },
      { id: 'c', text: 'ПС-4', correct: false }
    ]
  },
  {
    id: 12,
    question: 'Участвовал ли летчик Валерий Павлович Чкалов в спасении экипажа и пассажиров парохода «Челюскин»?',
    answers: [
      { id: 'a', text: 'да', correct: true },
      { id: 'b', text: 'нет', correct: false }
    ]
  },
  {
    id: 13,
    question: 'На каком самолете летчик А. Ляпидевский вывез со льдины первую партию челюскинцев (десять женщин и двоих детей) 5 марта 1934 года?',
    answers: [
      { id: 'a', text: 'АНТ-4', correct: true },
      { id: 'b', text: 'Ш-2', correct: false },
      { id: 'c', text: '«Флитстер»', correct: false }
    ]
  }
];
