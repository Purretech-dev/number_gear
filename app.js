const numbers = Array.from({ length: 100 }, (_, index) => index + 1);
const wordsBelowTwenty = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];
const tensWords = [
  "",
  "",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

const languagePacks = {
  en: {
    name: "English",
    locale: "en-KE",
    dir: "ltr",
    numbers: {
      belowTwenty: wordsBelowTwenty,
      tens: tensWords,
      hundred: "one hundred",
    },
    text: {
      interpreterTitle: "Visual interpreter",
      interpreterGesture: "Look and listen",
      interpreterIntro: "Choose a language, then tap numbers and buttons. I will guide you here.",
      levelSelected: "You selected Level {level}. Follow the activity on the screen.",
      numberTouched: "This is number {number}. Listen, look, and remember its shape.",
      sayNumber: "Listen carefully. This number is {number}.",
      findNumber: "Lesson {lesson}: look at the sign, then tap the matching number.",
      correct: "{number}, very good.",
      wrong: "Try again, this is number {number}.",
      lessonComplete: "You have completed this lesson.",
      lessonCompleteText: "Lesson {lesson} complete. You can keep practising or choose another lesson.",
      mapFirst: "First tap and listen to all numbers in the number map.",
      mapComplete: "Great job! You have learnt numbers 1 to 100. Now start number identification.",
      allDone: "Great job! You have successfully completed Level 1. Level 2 is now unlocked.",
      nextLocked: "The next levels open after all 100 numbers are learned.",
      gearOpen: "Level 3 is open. Spin and solve the gear.",
      advancedOpen: "Level 4 is open. Mix the planes, then arrange 11 to 220.",
      primeOpen: "Level 5 is open. Explore the prime number gear.",
      planeSelected: "Plane {plane} selected. Its numbers are {start} to {end}.",
      gearMixed: "The planes are mixed. Turn each plane back to the top guide.",
      gearReset: "Reset. The top guide now reads 1 to 10 from inside to outside.",
      advancedPlaneSelected: "Plane {plane} selected. Its numbers are {start} to {end}.",
      advancedMixed: "The colored planes are mixed. Pick a plane counter, then line it back up with the top guide.",
      advancedReset: "Reset. The top guide is back in the correct order.",
      primePlaneSelected: "Plane {plane} selected. These prime numbers are {start} to {end}.",
      primeMixed: "The prime planes are mixed. Pick a plane counter, then line it up with the top guide.",
      primeReset: "Reset. The prime gear is back at the starting guide.",
      addGuide: "Add means put the groups together, then count all of them.",
      subtractGuide: "Subtract means take some away, then count what remains.",
      rotateGuide: "Use the arrows to turn the selected plane.",
      languageChanged: "Language changed to {language}.",
    },
  },
  sw: {
    name: "Kiswahili (Kenya)",
    locale: "sw-KE",
    dir: "ltr",
    numbers: {
      belowTwenty: ["sifuri", "moja", "mbili", "tatu", "nne", "tano", "sita", "saba", "nane", "tisa", "kumi", "kumi na moja", "kumi na mbili", "kumi na tatu", "kumi na nne", "kumi na tano", "kumi na sita", "kumi na saba", "kumi na nane", "kumi na tisa"],
      tens: ["", "", "ishirini", "thelathini", "arobaini", "hamsini", "sitini", "sabini", "themanini", "tisini"],
      hundred: "mia moja",
    },
    text: {
      interpreterTitle: "Mkalimani wa Lugha ya Ishara ya Kenya",
      interpreterGesture: "Tazama na sikiliza",
      interpreterIntro: "Chagua Kiswahili cha Kenya, kisha gusa nambari na vitufe. Nitakuongoza hapa.",
      levelSelected: "Umechagua Kiwango {level}. Fuata zoezi lililo kwenye skrini.",
      numberTouched: "Hii ni nambari {number}. Sikiliza, tazama, na ukumbuke umbo lake.",
      sayNumber: "Sikiliza kwa makini. Nambari hii ni {number}.",
      findNumber: "Somo {lesson}: tazama alama, kisha gusa nambari inayofanana.",
      correct: "{number}, vizuri sana.",
      wrong: "Jaribu tena, hii ni nambari {number}.",
      lessonComplete: "Umekamilisha somo hili.",
      lessonCompleteText: "Somo {lesson} limekamilika. Unaweza kuendelea kufanya mazoezi au kuchagua somo jingine.",
      mapFirst: "Kwanza gusa na sikiliza nambari zote kwenye ramani ya nambari.",
      mapComplete: "Hongera! Umejifunza nambari 1 hadi 100. Sasa anza kutambua nambari.",
      allDone: "Hongera! Umekamilisha Kiwango 1. Kiwango 2 kimefunguliwa.",
      nextLocked: "Viwango vinavyofuata hufunguka baada ya kujifunza nambari zote 100.",
      gearOpen: "Kiwango 3 kimefunguliwa. Zungusha na utatue gia ya nambari.",
      advancedOpen: "Kiwango 4 kimefunguliwa. Changanya sehemu, kisha panga 11 hadi 220.",
      primeOpen: "Kiwango 5 kimefunguliwa. Chunguza gia ya nambari kuu.",
      planeSelected: "Ndege {plane} imechaguliwa. Namba zake ni {start} hadi {end}.",
      gearMixed: "Sehemu zimechanganywa. Zungusha kila sehemu irudi kwenye mwongozo wa juu.",
      gearReset: "Imewekwa upya. Mwongozo wa juu unasoma 1 hadi 10 kutoka ndani kwenda nje.",
      advancedPlaneSelected: "Ndege {plane} imechaguliwa. Namba zake ni {start} hadi {end}.",
      advancedMixed: "Sehemu za rangi zimechanganywa. Chagua sehemu, kisha ipange kwenye mwongozo wa juu.",
      advancedReset: "Imewekwa upya. Mwongozo wa juu umerudi katika mpangilio sahihi.",
      primePlaneSelected: "Ndege {plane} imechaguliwa. Namba kuu zake ni {start} hadi {end}.",
      primeMixed: "Sehemu za nambari kuu zimechanganywa. Chagua sehemu, kisha ipange kwenye mwongozo.",
      primeReset: "Imewekwa upya. Gia ya nambari kuu imerudi mwanzo.",
      addGuide: "Kuongeza ni kuweka makundi pamoja, kisha kuhesabu yote.",
      subtractGuide: "Kutoa ni kuondoa baadhi, kisha kuhesabu vilivyobaki.",
      rotateGuide: "Tumia mishale kuzungusha sehemu iliyochaguliwa.",
      languageChanged: "Lugha imebadilishwa kuwa {language}.",
    },
  },
  fr: {
    name: "French",
    locale: "fr-FR",
    dir: "ltr",
    numbers: {
      belowTwenty: ["zero", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf"],
      tens: ["", "", "vingt", "trente", "quarante", "cinquante", "soixante", "soixante-dix", "quatre-vingts", "quatre-vingt-dix"],
      hundred: "cent",
    },
    text: {
      interpreterTitle: "Interprete visuel",
      interpreterGesture: "Regarde et ecoute",
      interpreterIntro: "Choisis une langue, puis touche les nombres et les boutons. Je te guide ici.",
      levelSelected: "Tu as choisi le niveau {level}. Suis l'activite sur l'ecran.",
      numberTouched: "Ceci est le nombre {number}. Ecoute, regarde et retiens sa forme.",
      sayNumber: "Ecoute bien. Ce nombre est {number}.",
      findNumber: "Lecon {lesson}: regarde le signe, puis touche le bon nombre.",
      correct: "{number}, tres bien.",
      wrong: "Essaie encore, ceci est le nombre {number}.",
      lessonComplete: "Tu as termine cette lecon.",
      lessonCompleteText: "Lecon {lesson} terminee. Tu peux continuer ou choisir une autre lecon.",
      mapFirst: "Touche et ecoute d'abord tous les nombres sur la carte.",
      mapComplete: "Bravo! Tu as appris les nombres de 1 a 100. Commence maintenant l'identification.",
      allDone: "Bravo! Tu as termine le niveau 1. Le niveau 2 est ouvert.",
      nextLocked: "Les niveaux suivants s'ouvrent apres les 100 nombres.",
      gearOpen: "Le niveau 3 est ouvert. Fais tourner l'engrenage.",
      advancedOpen: "Le niveau 4 est ouvert. Melange puis arrange 11 a 220.",
      primeOpen: "Le niveau 5 est ouvert. Explore l'engrenage des nombres premiers.",
      planeSelected: "Plan {plane} choisi. Ses nombres vont de {start} a {end}.",
      gearMixed: "Les plans sont melanges. Ramene chaque plan au guide du haut.",
      gearReset: "Reinitialise. Le guide du haut lit 1 a 10 de l'interieur vers l'exterieur.",
      advancedPlaneSelected: "Plan {plane} choisi. Ses nombres vont de {start} a {end}.",
      advancedMixed: "Les plans colores sont melanges. Choisis un plan et aligne-le.",
      advancedReset: "Reinitialise. Le guide du haut est correct.",
      primePlaneSelected: "Plan {plane} choisi. Ces nombres premiers vont de {start} a {end}.",
      primeMixed: "Les plans premiers sont melanges. Choisis un plan et aligne-le.",
      primeReset: "Reinitialise. L'engrenage premier revient au debut.",
      addGuide: "Additionner veut dire mettre les groupes ensemble, puis tout compter.",
      subtractGuide: "Soustraire veut dire enlever, puis compter ce qui reste.",
      rotateGuide: "Utilise les fleches pour tourner le plan choisi.",
      languageChanged: "Langue changee en {language}.",
    },
  },
  es: {
    name: "Spanish",
    locale: "es-ES",
    dir: "ltr",
    numbers: {
      belowTwenty: ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez", "once", "doce", "trece", "catorce", "quince", "dieciseis", "diecisiete", "dieciocho", "diecinueve"],
      tens: ["", "", "veinte", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"],
      hundred: "cien",
    },
    text: {
      interpreterTitle: "Interprete visual",
      interpreterGesture: "Mira y escucha",
      interpreterIntro: "Elige un idioma, toca numeros y botones. Te guiare aqui.",
      levelSelected: "Elegiste el nivel {level}. Sigue la actividad en la pantalla.",
      numberTouched: "Este es el numero {number}. Escucha, mira y recuerda su forma.",
      sayNumber: "Escucha bien. Este numero es {number}.",
      findNumber: "Leccion {lesson}: mira la senal y toca el numero correcto.",
      correct: "{number}, muy bien.",
      wrong: "Intentalo otra vez, este es el numero {number}.",
      lessonComplete: "Has completado esta leccion.",
      lessonCompleteText: "Leccion {lesson} completa. Puedes seguir practicando o elegir otra leccion.",
      mapFirst: "Primero toca y escucha todos los numeros del mapa.",
      mapComplete: "Muy bien! Aprendiste los numeros del 1 al 100. Ahora identifica numeros.",
      allDone: "Muy bien! Completaste el nivel 1. El nivel 2 esta abierto.",
      nextLocked: "Los siguientes niveles se abren despues de aprender los 100 numeros.",
      gearOpen: "El nivel 3 esta abierto. Gira y resuelve el engranaje.",
      advancedOpen: "El nivel 4 esta abierto. Mezcla y ordena del 11 al 220.",
      primeOpen: "El nivel 5 esta abierto. Explora el engranaje de numeros primos.",
      planeSelected: "Plano {plane} seleccionado. Sus numeros van de {start} a {end}.",
      gearMixed: "Los planos estan mezclados. Vuelve cada plano a la guia de arriba.",
      gearReset: "Reiniciado. La guia lee 1 a 10 desde dentro hacia fuera.",
      advancedPlaneSelected: "Plano {plane} seleccionado. Sus numeros van de {start} a {end}.",
      advancedMixed: "Los planos de colores estan mezclados. Elige uno y alinealo.",
      advancedReset: "Reiniciado. La guia superior esta correcta.",
      primePlaneSelected: "Plano {plane} seleccionado. Sus primos van de {start} a {end}.",
      primeMixed: "Los planos primos estan mezclados. Elige uno y alinealo.",
      primeReset: "Reiniciado. El engranaje primo vuelve al inicio.",
      addGuide: "Sumar es juntar grupos y luego contarlos todos.",
      subtractGuide: "Restar es quitar algunos y contar lo que queda.",
      rotateGuide: "Usa las flechas para girar el plano seleccionado.",
      languageChanged: "Idioma cambiado a {language}.",
    },
  },
  pt: {
    name: "Portuguese",
    locale: "pt-PT",
    dir: "ltr",
    numbers: {
      belowTwenty: ["zero", "um", "dois", "tres", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "doze", "treze", "catorze", "quinze", "dezasseis", "dezassete", "dezoito", "dezanove"],
      tens: ["", "", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"],
      hundred: "cem",
    },
    text: {
      interpreterTitle: "Interprete visual",
      interpreterGesture: "Olha e escuta",
      interpreterIntro: "Escolhe uma lingua, toca nos numeros e botoes. Vou guiar-te aqui.",
      levelSelected: "Escolheste o nivel {level}. Segue a atividade no ecra.",
      numberTouched: "Este e o numero {number}. Escuta, olha e lembra a forma.",
      sayNumber: "Escuta com atencao. Este numero e {number}.",
      findNumber: "Licao {lesson}: olha para o sinal e toca no numero certo.",
      correct: "{number}, muito bem.",
      wrong: "Tenta de novo, este e o numero {number}.",
      lessonComplete: "Completaste esta licao.",
      lessonCompleteText: "Licao {lesson} completa. Podes continuar ou escolher outra licao.",
      mapFirst: "Primeiro toca e escuta todos os numeros no mapa.",
      mapComplete: "Muito bem! Aprendeste os numeros de 1 a 100. Agora identifica numeros.",
      allDone: "Muito bem! Completaste o nivel 1. O nivel 2 esta aberto.",
      nextLocked: "Os proximos niveis abrem depois dos 100 numeros.",
      gearOpen: "O nivel 3 esta aberto. Gira e resolve a engrenagem.",
      advancedOpen: "O nivel 4 esta aberto. Mistura e organiza de 11 a 220.",
      primeOpen: "O nivel 5 esta aberto. Explora a engrenagem dos primos.",
      planeSelected: "Plano {plane} selecionado. Os numeros vao de {start} a {end}.",
      gearMixed: "Os planos estao misturados. Leva cada plano ao guia de cima.",
      gearReset: "Reiniciado. O guia le 1 a 10 de dentro para fora.",
      advancedPlaneSelected: "Plano {plane} selecionado. Os numeros vao de {start} a {end}.",
      advancedMixed: "Os planos coloridos estao misturados. Escolhe um e alinha-o.",
      advancedReset: "Reiniciado. O guia de cima esta correto.",
      primePlaneSelected: "Plano {plane} selecionado. Estes primos vao de {start} a {end}.",
      primeMixed: "Os planos primos estao misturados. Escolhe um e alinha-o.",
      primeReset: "Reiniciado. A engrenagem prima voltou ao inicio.",
      addGuide: "Adicionar e juntar grupos e depois contar todos.",
      subtractGuide: "Subtrair e tirar alguns e contar o que fica.",
      rotateGuide: "Usa as setas para girar o plano escolhido.",
      languageChanged: "Lingua alterada para {language}.",
    },
  },
  ar: {
    name: "Arabic",
    locale: "ar-SA",
    dir: "rtl",
    numbers: {
      belowTwenty: ["صفر", "واحد", "اثنان", "ثلاثة", "اربعة", "خمسة", "ستة", "سبعة", "ثمانية", "تسعة", "عشرة", "احد عشر", "اثنا عشر", "ثلاثة عشر", "اربعة عشر", "خمسة عشر", "ستة عشر", "سبعة عشر", "ثمانية عشر", "تسعة عشر"],
      tens: ["", "", "عشرون", "ثلاثون", "اربعون", "خمسون", "ستون", "سبعون", "ثمانون", "تسعون"],
      hundred: "مئة",
    },
    text: {
      interpreterTitle: "مترجم بصري",
      interpreterGesture: "انظر واستمع",
      interpreterIntro: "اختر اللغة، ثم اضغط الارقام والازرار. سأرشدك هنا.",
      levelSelected: "اخترت المستوى {level}. اتبع النشاط على الشاشة.",
      numberTouched: "هذا هو الرقم {number}. استمع وانظر وتذكر شكله.",
      sayNumber: "استمع جيدا. هذا الرقم هو {number}.",
      findNumber: "الدرس {lesson}: انظر الى العلامة ثم اضغط الرقم الصحيح.",
      correct: "{number}، احسنت.",
      wrong: "حاول مرة اخرى، هذا هو الرقم {number}.",
      lessonComplete: "لقد اكملت هذا الدرس.",
      lessonCompleteText: "اكتمل الدرس {lesson}. يمكنك المتابعة او اختيار درس اخر.",
      mapFirst: "اولا اضغط واستمع الى كل الارقام في خريطة الارقام.",
      mapComplete: "عمل رائع! تعلمت الارقام من 1 الى 100. ابدأ التعرف على الارقام.",
      allDone: "عمل رائع! اكملت المستوى 1. تم فتح المستوى 2.",
      nextLocked: "تفتح المستويات التالية بعد تعلم كل الارقام المئة.",
      gearOpen: "تم فتح المستوى 3. ادر الترس وحل المسألة.",
      advancedOpen: "تم فتح المستوى 4. اخلط المستويات ثم رتب 11 الى 220.",
      primeOpen: "تم فتح المستوى 5. استكشف ترس الاعداد الاولية.",
      planeSelected: "تم اختيار المستوى {plane}. ارقامه من {start} الى {end}.",
      gearMixed: "تم خلط المستويات. اعد كل مستوى الى الدليل العلوي.",
      gearReset: "تمت الاعادة. الدليل العلوي يقرأ من 1 الى 10 من الداخل الى الخارج.",
      advancedPlaneSelected: "تم اختيار المستوى {plane}. ارقامه من {start} الى {end}.",
      advancedMixed: "تم خلط المستويات الملونة. اختر مستوى ثم حاذه.",
      advancedReset: "تمت الاعادة. الدليل العلوي صحيح.",
      primePlaneSelected: "تم اختيار المستوى {plane}. الاعداد الاولية من {start} الى {end}.",
      primeMixed: "تم خلط مستويات الاعداد الاولية. اختر مستوى ثم حاذه.",
      primeReset: "تمت الاعادة. عاد ترس الاعداد الاولية الى البداية.",
      addGuide: "الجمع يعني ضم المجموعات ثم عدها كلها.",
      subtractGuide: "الطرح يعني اخذ بعضها ثم عد ما تبقى.",
      rotateGuide: "استخدم الاسهم لتدوير المستوى المختار.",
      languageChanged: "تم تغيير اللغة الى {language}.",
    },
  },
};

const mastered = new Set(readStoredNumbers("numberGearMastered"));
const mapLearned = new Set(readStoredNumbers("numberGearMapLearned"));
let currentTarget = 1;
let currentLesson = 1;
let currentMapBatch = 1;
let selectedPlane = 1;
let selectedAdvancedPlane = 1;
let selectedPrimePlane = 1;
let gearQuestion = { plane: 4, step: 5, answer: 20 };
let counterOperation = "addition";
let counterExampleSet = 0;
let counterExample = { a: 1, b: 1 };
let beginnerExampleSet = 0;
let beginnerExample = { count: 3, item: "ball", label: "Balls" };
let thingsType = "fruits";
let thingsOperation = "addition";
let thingsExampleSet = 0;
let thingsExample = { a: 2, b: 1 };
let currentThingName = "apple";
let gearOperation = "addition";
let gearOperationPlane = 1;
let gearOperationExample = { plane: 1, start: 1, steps: 2, change: 2, answer: 3 };
const gearExampleBank = {
  addition: [
    { plane: 1, startIndex: 7, steps: 2 },
    { plane: 1, startIndex: 4, steps: 3 },
    { plane: 2, startIndex: 5, steps: 2 },
    { plane: 2, startIndex: 6, steps: 3 },
    { plane: 3, startIndex: 4, steps: 3 },
    { plane: 3, startIndex: 7, steps: 2 },
    { plane: 4, startIndex: 3, steps: 2 },
    { plane: 4, startIndex: 5, steps: 3 },
    { plane: 5, startIndex: 2, steps: 3 },
    { plane: 5, startIndex: 6, steps: 2 },
    { plane: 6, startIndex: 4, steps: 2 },
    { plane: 7, startIndex: 3, steps: 3 },
    { plane: 8, startIndex: 2, steps: 2 },
    { plane: 9, startIndex: 5, steps: 2 },
    { plane: 10, startIndex: 3, steps: 2 },
  ],
  subtraction: [
    { plane: 1, startIndex: 5, steps: 3 },
    { plane: 1, startIndex: 9, steps: 2 },
    { plane: 2, startIndex: 7, steps: 2 },
    { plane: 2, startIndex: 9, steps: 3 },
    { plane: 3, startIndex: 8, steps: 3 },
    { plane: 4, startIndex: 7, steps: 2 },
    { plane: 5, startIndex: 9, steps: 4 },
    { plane: 6, startIndex: 8, steps: 2 },
    { plane: 7, startIndex: 6, steps: 3 },
    { plane: 8, startIndex: 9, steps: 2 },
    { plane: 9, startIndex: 7, steps: 3 },
    { plane: 10, startIndex: 8, steps: 2 },
  ],
};
const planeRotations = Array.from({ length: 11 }, () => 0);
const advancedPlaneRotations = Array.from({ length: 12 }, () => 0);
const primePlaneRotations = Array.from({ length: 11 }, () => 0);
const lessonCycleSeen = Array.from({ length: 11 }, () => new Set());
const developmentUnlockLevelTwo = true;
const developmentUnlockIdentification = true;
let currentLanguage = localStorage.getItem("numberGearLanguage") || "en";
if (!languagePacks[currentLanguage]) currentLanguage = "en";
let speechLocale = languagePacks[currentLanguage].locale;
const preferredFemaleVoiceNames = [
  "zira",
  "hazel",
  "susan",
  "sonia",
  "natasha",
  "aria",
  "jenny",
  "samantha",
  "victoria",
  "karen",
  "moira",
  "tessa",
  "serena",
  "shelley",
  "martha",
  "sara",
  "joanna",
  "salli",
  "ivy",
  "emma",
  "amy",
  "olivia",
  "ava",
  "neural female",
  "female",
  "woman",
];
const fruitThings = ["apple", "orange", "banana"];
const toyThings = ["toy car", "toy bus", "doll", "action figure", "teddy bear", "toy truck"];
const thingImagePools = {
  apple: [
    "assets/counting/thing-apple-red.jpg",
    "assets/counting/thing-apple-green.jpg",
    "assets/counting/thing-apple-yellow.jpg",
    "assets/counting/thing-apple-orange.jpg",
    "assets/counting/thing-apple-dark-red.jpg",
  ],
  orange: [
    "assets/counting/thing-orange-round.jpg",
    "assets/counting/thing-orange-leaf.jpg",
    "assets/counting/thing-orange-bright.jpg",
    "assets/counting/thing-orange-red.jpg",
  ],
  banana: [
    "assets/counting/thing-banana-yellow.jpg",
    "assets/counting/thing-banana-speckled.jpg",
    "assets/counting/thing-banana-curved.jpg",
  ],
  fruit: [
    "assets/counting/thing-apple-red.jpg",
    "assets/counting/thing-apple-green.jpg",
    "assets/counting/thing-apple-yellow.jpg",
    "assets/counting/thing-apple-orange.jpg",
    "assets/counting/thing-apple-dark-red.jpg",
    "assets/counting/thing-orange-round.jpg",
    "assets/counting/thing-orange-leaf.jpg",
    "assets/counting/thing-orange-bright.jpg",
    "assets/counting/thing-orange-red.jpg",
    "assets/counting/thing-banana-yellow.jpg",
    "assets/counting/thing-banana-speckled.jpg",
    "assets/counting/thing-banana-curved.jpg",
  ],
  "toy car": ["assets/counting/thing-toy-car.jpg"],
  "toy bus": ["assets/counting/thing-toy-bus.jpg"],
  doll: ["assets/counting/thing-doll.jpg"],
  "action figure": ["assets/counting/thing-action-figure.jpg"],
  "teddy bear": ["assets/counting/thing-teddy-bear.jpg"],
  "toy truck": ["assets/counting/thing-toy-truck.jpg"],
  toy: [
    "assets/counting/thing-toy-car.jpg",
    "assets/counting/thing-toy-bus.jpg",
    "assets/counting/thing-doll.jpg",
    "assets/counting/thing-action-figure.jpg",
    "assets/counting/thing-teddy-bear.jpg",
    "assets/counting/thing-toy-truck.jpg",
  ],
};
const beginnerImagePools = {
  ball: [
    "assets/counting/ball-soccer.jpg",
    "assets/counting/ball-basketball.jpg",
    "assets/counting/ball-beach.jpg",
    "assets/counting/ball-tennis.jpg",
    "assets/counting/ball-dots.jpg",
    "assets/counting/ball-purple.jpg",
    "assets/counting/ball-yellow.jpg",
    "assets/counting/ball-patchwork.jpg",
  ],
  cat: [
    "assets/counting/cat-orange.jpg",
    "assets/counting/cat-gray.jpg",
    "assets/counting/cat-tabby.jpg",
    "assets/counting/cat-black-white.jpg",
    "assets/counting/cat-fluffy.jpg",
    "assets/counting/cat-ginger.jpg",
    "assets/counting/cat-gray-white.jpg",
    "assets/counting/cat-resting.jpg",
  ],
  bag: [
    "assets/counting/bag-navy.jpg",
    "assets/counting/bag-pink.jpg",
    "assets/counting/bag-teal.jpg",
    "assets/counting/bag-purple.jpg",
    "assets/counting/bag-dinosaur.jpg",
    "assets/counting/bag-heart.jpg",
    "assets/counting/bag-turquoise.jpg",
    "assets/counting/bag-rainbow.jpg",
  ],
  apple: [
    "assets/counting/apple-red.jpg",
    "assets/counting/apple-green.jpg",
    "assets/counting/apple-yellow.jpg",
    "assets/counting/apple-orange.jpg",
    "assets/counting/apple-red-2.jpg",
    "assets/counting/apple-green-2.jpg",
    "assets/counting/apple-golden.jpg",
    "assets/counting/apple-striped.jpg",
  ],
};

const levelOne = document.querySelector("#levelOne");
const levelTwo = document.querySelector("#levelTwo");
const levelThree = document.querySelector("#levelThree");
const levelFour = document.querySelector("#levelFour");
const levelFive = document.querySelector("#levelFive");
const levelOneTab = document.querySelector("#levelOneTab");
const levelTwoTab = document.querySelector("#levelTwoTab");
const levelThreeTab = document.querySelector("#levelThreeTab");
const levelFourTab = document.querySelector("#levelFourTab");
const levelFiveTab = document.querySelector("#levelFiveTab");
const masteredCount = document.querySelector("#masteredCount");
const progressFill = document.querySelector("#progressFill");
const targetNumber = document.querySelector("#targetNumber");
const targetWord = document.querySelector("#targetWord");
const placeValue = document.querySelector("#placeValue");
const choiceGrid = document.querySelector("#choiceGrid");
const levelOneMessage = document.querySelector("#levelOneMessage");
const lessonTabs = document.querySelector("#lessonTabs");
const numberGrid = document.querySelector("#numberGrid");
const mapBatchStatus = document.querySelector("#mapBatchStatus");
const previousBatch = document.querySelector("#previousBatch");
const nextBatch = document.querySelector("#nextBatch");
const speakButton = document.querySelector("#speakButton");
const nextButton = document.querySelector("#nextButton");
const gear = document.querySelector("#gear");
const gearMessage = document.querySelector("#gearMessage");
const equation = document.querySelector("#equation");
const planePicker = document.querySelector("#planePicker");
const selectedPlaneLabel = document.querySelector("#selectedPlaneLabel");
const selectedPlaneRange = document.querySelector("#selectedPlaneRange");
const selectedPlaneNumbers = document.querySelector("#selectedPlaneNumbers");
const answerRow = document.querySelector("#answerRow");
const spinLeft = document.querySelector("#spinLeft");
const spinRight = document.querySelector("#spinRight");
const shuffleGear = document.querySelector("#shuffleGear");
const alignGearButton = document.querySelector("#alignGear");
const newGearQuestion = document.querySelector("#newGearQuestion");
const toggleGearOperation = document.querySelector("#toggleGearOperation");
const gearOperationPanel = document.querySelector("#gearOperationPanel");
const gearAdditionTab = document.querySelector("#gearAdditionTab");
const gearSubtractionTab = document.querySelector("#gearSubtractionTab");
const resetGearOperation = document.querySelector("#resetGearOperation");
const gearExampleList = document.querySelector("#gearExampleList");
const gearOperationEquation = document.querySelector("#gearOperationEquation");
const gearOperationExplanation = document.querySelector("#gearOperationExplanation");
const gearOperationPopup = document.querySelector("#gearOperationPopup");
const gearPopupTitle = document.querySelector("#gearPopupTitle");
const gearPopupText = document.querySelector("#gearPopupText");
const closeGearPopup = document.querySelector("#closeGearPopup");
const beginnerCountersTab = document.querySelector("#beginnerCountersTab");
const countersTab = document.querySelector("#countersTab");
const countThingsTab = document.querySelector("#countThingsTab");
const beginnerCountersPanel = document.querySelector("#beginnerCountersPanel");
const countersPanel = document.querySelector("#countersPanel");
const countThingsPanel = document.querySelector("#countThingsPanel");
const resetBeginnerExamples = document.querySelector("#resetBeginnerExamples");
const beginnerFormulaRow = document.querySelector("#beginnerFormulaRow");
const beginnerObjectName = document.querySelector("#beginnerObjectName");
const beginnerItems = document.querySelector("#beginnerItems");
const beginnerPrompt = document.querySelector("#beginnerPrompt");
const beginnerChoiceRow = document.querySelector("#beginnerChoiceRow");
const beginnerFeedback = document.querySelector("#beginnerFeedback");
const additionTab = document.querySelector("#additionTab");
const subtractionTab = document.querySelector("#subtractionTab");
const resetExamples = document.querySelector("#resetExamples");
const formulaRow = document.querySelector("#formulaRow");
const counterEquation = document.querySelector("#counterEquation");
const computeCounters = document.querySelector("#computeCounters");
const counterStage = document.querySelector("#counterStage");
const fruitsTab = document.querySelector("#fruitsTab");
const toysTab = document.querySelector("#toysTab");
const thingsAdditionTab = document.querySelector("#thingsAdditionTab");
const thingsSubtractionTab = document.querySelector("#thingsSubtractionTab");
const resetThingsExamples = document.querySelector("#resetThingsExamples");
const thingsFormulaRow = document.querySelector("#thingsFormulaRow");
const thingsEquation = document.querySelector("#thingsEquation");
const computeThings = document.querySelector("#computeThings");
const thingsStage = document.querySelector("#thingsStage");
const advancedGear = document.querySelector("#advancedGear");
const advancedGearMessage = document.querySelector("#advancedGearMessage");
const advancedPlanePicker = document.querySelector("#advancedPlanePicker");
const advancedSelectedPlane = document.querySelector("#advancedSelectedPlane");
const advancedSelectedRange = document.querySelector("#advancedSelectedRange");
const advancedSelectedNumbers = document.querySelector("#advancedSelectedNumbers");
const advancedSpinLeft = document.querySelector("#advancedSpinLeft");
const advancedSpinRight = document.querySelector("#advancedSpinRight");
const advancedShuffleGear = document.querySelector("#advancedShuffleGear");
const advancedResetGear = document.querySelector("#advancedResetGear");
const primeGear = document.querySelector("#primeGear");
const primeGearMessage = document.querySelector("#primeGearMessage");
const primePlanePicker = document.querySelector("#primePlanePicker");
const primeSelectedPlane = document.querySelector("#primeSelectedPlane");
const primeSelectedRange = document.querySelector("#primeSelectedRange");
const primeSelectedNumbers = document.querySelector("#primeSelectedNumbers");
const primeSpinLeft = document.querySelector("#primeSpinLeft");
const primeSpinRight = document.querySelector("#primeSpinRight");
const primeShuffleGear = document.querySelector("#primeShuffleGear");
const primeResetGear = document.querySelector("#primeResetGear");
const languageSelect = document.querySelector("#languageSelect");
const interpreterAvatar = document.querySelector("#interpreterAvatar");
const interpreterTitle = document.querySelector("#interpreterTitle");
const interpreterGesture = document.querySelector("#interpreterGesture");
const interpreterText = document.querySelector("#interpreterText");
let gearPlaneBand = 4.6;
let gearFirstOuter = 8.4;
let advancedGearPlaneBand = 3.85;
let advancedGearRingWidth = 2.35;
let advancedGearFirstOuter = 10.5;
let primeGearPlaneBand = 4.4;
let primeGearFirstOuter = 8.8;

function readStoredNumbers(key) {
  try {
    return JSON.parse(localStorage.getItem(key) || "[]");
  } catch {
    return [];
  }
}

function saveMastered() {
  localStorage.setItem("numberGearMastered", JSON.stringify([...mastered]));
}

function saveMapLearned() {
  localStorage.setItem("numberGearMapLearned", JSON.stringify([...mapLearned]));
}

function numberToWord(number) {
  if (number < 20) return wordsBelowTwenty[number];
  if (number === 100) return "one hundred";
  const tens = Math.floor(number / 10);
  const ones = number % 10;
  return ones === 0 ? tensWords[tens] : `${tensWords[tens]} ${wordsBelowTwenty[ones]}`;
}

function t(key, values = {}) {
  const pack = languagePacks[currentLanguage] || languagePacks.en;
  const template = pack.text[key] || languagePacks.en.text[key] || key;
  return template.replace(/\{(\w+)\}/g, (_, name) => values[name] ?? "");
}

function numberToLocalizedWord(number, language = currentLanguage) {
  const pack = languagePacks[language] || languagePacks.en;
  const numberPack = pack.numbers;
  if (number < 20) return numberPack.belowTwenty[number];
  if (number === 100) return numberPack.hundred;
  const tens = Math.floor(number / 10);
  const ones = number % 10;
  if (ones === 0) return numberPack.tens[tens];
  if (language === "en") return `${numberPack.tens[tens]} ${numberPack.belowTwenty[ones]}`;
  if (language === "sw") return `${numberPack.tens[tens]} na ${numberPack.belowTwenty[ones]}`;
  if (language === "fr") return `${numberPack.tens[tens]} ${numberPack.belowTwenty[ones]}`;
  if (language === "es") return `${numberPack.tens[tens]} y ${numberPack.belowTwenty[ones]}`;
  if (language === "pt") return `${numberPack.tens[tens]} e ${numberPack.belowTwenty[ones]}`;
  if (language === "ar") return `${numberPack.belowTwenty[ones]} و ${numberPack.tens[tens]}`;
  return numberToWord(number);
}

function updateInterpreter(key = "interpreterIntro", values = {}, gesture = "wave") {
  interpreterTitle.textContent = t("interpreterTitle");
  interpreterGesture.textContent = t("interpreterGesture");
  interpreterText.textContent = t(key, values);
  interpreterAvatar.classList.remove("wave", "point", "clap");
  window.requestAnimationFrame(() => {
    interpreterAvatar.classList.add(gesture);
  });
}

function changeLanguage(language) {
  currentLanguage = languagePacks[language] ? language : "en";
  speechLocale = languagePacks[currentLanguage].locale;
  localStorage.setItem("numberGearLanguage", currentLanguage);
  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = languagePacks[currentLanguage].dir;
  languageSelect.value = currentLanguage;
  renderLevelOne();
  renderNumberGrid();
  renderProgress();
  updateInterpreter("languageChanged", { language: languagePacks[currentLanguage].name }, "wave");
}

function shuffle(values) {
  return [...values].sort(() => Math.random() - 0.5);
}

function chooseTarget(preferredNumber) {
  if (preferredNumber) {
    currentLesson = lessonForNumber(preferredNumber);
  }

  const lessonNumbers = getLessonNumbers(currentLesson);
  const unseenInCycle = lessonNumbers.filter((number) => !lessonCycleSeen[currentLesson].has(number));
  currentTarget =
    preferredNumber ||
    unseenInCycle[Math.floor(Math.random() * unseenInCycle.length)] ||
    lessonNumbers[Math.floor(Math.random() * lessonNumbers.length)];
  renderLevelOne();
}

function practiseChartNumber(number) {
  const completedBeforeThisTap = mapLearned.size === 100;
  mapLearned.add(number);
  saveMapLearned();
  renderNumberGrid();
  renderProgress();
  speakNumber(number);
  updateInterpreter("numberTouched", { number: numberToLocalizedWord(number) }, "point");

  if (!completedBeforeThisTap && mapLearned.size === 100) {
    revealIdentification();
  }
}

function getLessonNumbers(lesson) {
  const start = (lesson - 1) * 10 + 1;
  return Array.from({ length: 10 }, (_, index) => start + index);
}

function lessonForNumber(number) {
  return Math.ceil(number / 10);
}

function selectLesson(lesson) {
  currentLesson = lesson;
  chooseTarget();
  renderNumberGrid();
}

function isLessonComplete(lesson) {
  return getLessonNumbers(lesson).every((number) => mastered.has(number));
}

function isLessonCycleComplete(lesson) {
  return lessonCycleSeen[lesson].size === 10;
}

function getMapBatchNumbers(batch) {
  const start = (batch - 1) * 20 + 1;
  return Array.from({ length: 20 }, (_, index) => start + index);
}

function isMapComplete() {
  return developmentUnlockIdentification || mapLearned.size === 100;
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function renderLevelOne() {
  targetNumber.textContent = currentTarget;
  targetWord.textContent = numberToLocalizedWord(currentTarget);
  renderPlaceValue(currentTarget);
  renderChoices();
  renderLessons();
  updateIdentificationLock();
  if (isMapComplete()) {
    levelOneMessage.textContent = t("findNumber", { lesson: currentLesson });
  }
}

function renderPlaceValue(number) {
  placeValue.innerHTML = "";
  const tens = Math.floor(number / 10);
  const ones = number % 10;
  const sticks = number === 100 ? 10 : tens;
  const dots = number === 100 ? 0 : ones;

  for (let index = 0; index < sticks; index += 1) {
    const stick = document.createElement("span");
    stick.className = "ten-stick";
    stick.title = "ten";
    placeValue.append(stick);
  }

  for (let index = 0; index < dots; index += 1) {
    const dot = document.createElement("span");
    dot.className = "one-dot";
    dot.title = "one";
    placeValue.append(dot);
  }
}

function renderChoices() {
  const nearby = new Set([currentTarget]);
  const lessonNumbers = getLessonNumbers(currentLesson);
  while (nearby.size < 4) {
    nearby.add(lessonNumbers[Math.floor(Math.random() * lessonNumbers.length)]);
  }

  choiceGrid.innerHTML = "";
  shuffle([...nearby]).forEach((number) => {
    const button = document.createElement("button");
    button.className = "choice";
    button.type = "button";
    button.textContent = number;
    button.addEventListener("click", () => checkChoice(button, number));
    choiceGrid.append(button);
  });
}

function checkChoice(button, number) {
  const isCorrect = number === currentTarget;
  button.classList.add(isCorrect ? "correct" : "wrong");

  if (!isCorrect) {
    const numberWord = numberToLocalizedWord(currentTarget);
    levelOneMessage.textContent = t("wrong", { number: numberWord });
    updateInterpreter("wrong", { number: numberWord }, "point");
    speakPhrase(t("wrong", { number: numberWord }));
    return;
  }

  const completedBeforeThisAnswer = mastered.size === 100;
  const completedLessonCycleBeforeThisAnswer = isLessonCycleComplete(currentLesson);
  lessonCycleSeen[currentLesson].add(currentTarget);
  mastered.add(currentTarget);
  saveMastered();
  renderProgress();
  renderNumberGrid();
  renderLessons();
  const completedLessonCycleNow = !completedLessonCycleBeforeThisAnswer && isLessonCycleComplete(currentLesson);

  if (completedLessonCycleNow) {
    levelOneMessage.textContent = t("lessonCompleteText", { lesson: currentLesson });
    updateInterpreter("lessonComplete", {}, "clap");
    speakPhrase(t("lessonComplete"));
    setTimeout(() => {
      window.alert(t("lessonComplete"));
      lessonCycleSeen[currentLesson].clear();
    }, 450);
  } else {
    const numberWord = numberToLocalizedWord(currentTarget);
    levelOneMessage.textContent = isLessonComplete(currentLesson)
      ? t("lessonCompleteText", { lesson: currentLesson })
      : t("correct", { number: numberWord });
    updateInterpreter("correct", { number: numberWord }, "clap");
    speakPhrase(t("correct", { number: numberWord }));
  }

  if (!completedBeforeThisAnswer && mastered.size === 100) {
    completeLevelOne();
    return;
  }

  setTimeout(() => chooseTarget(), 850);
}

function renderLessons() {
  lessonTabs.innerHTML = "";
  for (let lesson = 1; lesson <= 10; lesson += 1) {
    const lessonNumbers = getLessonNumbers(lesson);
    const learned = lessonNumbers.filter((number) => mastered.has(number)).length;
    const button = document.createElement("button");
    button.className = `lesson-tab${lesson === currentLesson ? " active" : ""}${learned === 10 ? " complete" : ""}`;
    button.type = "button";
    button.innerHTML = `<strong>Lesson ${lesson}</strong><span>${lessonNumbers[0]}-${lessonNumbers[9]}</span><em>${learned}/10</em>`;
    button.addEventListener("click", () => selectLesson(lesson));
    lessonTabs.append(button);
  }
}

function renderNumberGrid() {
  numberGrid.innerHTML = "";
  const batchNumbers = getMapBatchNumbers(currentMapBatch);
  const learnedInBatch = batchNumbers.filter((number) => mapLearned.has(number)).length;
  mapBatchStatus.textContent = `Batch ${currentMapBatch}: ${batchNumbers[0]}-${batchNumbers[19]} (${learnedInBatch}/20 learnt)`;
  previousBatch.disabled = currentMapBatch === 1;
  nextBatch.disabled = currentMapBatch === 5;

  batchNumbers.forEach((number) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `number-tile${mapLearned.has(number) ? " mastered" : ""}`;
    button.textContent = number;
    button.title = `${number}: ${numberToLocalizedWord(number)}`;
    button.addEventListener("click", () => practiseChartNumber(number));
    numberGrid.append(button);
  });
}

function renderProgress() {
  const progressCount = isMapComplete() ? mastered.size : mapLearned.size;
  const progressLabel = isMapComplete() ? "identified" : "learnt";
  const percent = progressCount;
  masteredCount.textContent = `${progressCount} / 100 ${progressLabel}`;
  progressFill.style.width = `${percent}%`;

  if (mastered.size === 100) {
    unlockGear();
  }
}

function updateIdentificationLock() {
  const unlocked = isMapComplete();
  document.querySelector(".level-header").classList.toggle("locked-section", !unlocked);
  document.querySelector(".learning-board").classList.toggle("locked-section", !unlocked);
  lessonTabs.querySelectorAll("button").forEach((button) => {
    button.disabled = !unlocked;
  });
  speakButton.disabled = !unlocked;
  nextButton.disabled = !unlocked;
  choiceGrid.querySelectorAll("button").forEach((button) => {
    button.disabled = !unlocked;
  });
  if (!unlocked) {
    levelOneMessage.textContent = t("mapFirst");
    updateInterpreter("mapFirst", {}, "point");
  }
}

function revealIdentification() {
  updateIdentificationLock();
  updateInterpreter("mapComplete", {}, "clap");
  window.alert(t("mapComplete"));
  chooseTarget(1);
}

function changeMapBatch(direction) {
  currentMapBatch = Math.min(5, Math.max(1, currentMapBatch + direction));
  renderNumberGrid();
  updateInterpreter("numberTouched", { number: `${getMapBatchNumbers(currentMapBatch)[0]}-${getMapBatchNumbers(currentMapBatch)[19]}` }, "point");
}

function unlockGear() {
  levelTwoTab.classList.remove("locked");
  levelTwoTab.removeAttribute("aria-disabled");
  levelThreeTab.classList.remove("locked");
  levelThreeTab.removeAttribute("aria-disabled");
  levelFourTab.classList.remove("locked");
  levelFourTab.removeAttribute("aria-disabled");
  levelFiveTab.classList.remove("locked");
  levelFiveTab.removeAttribute("aria-disabled");
  gearMessage.textContent = t("gearOpen");
  advancedGearMessage.textContent = t("advancedOpen");
  primeGearMessage.textContent = t("primeOpen");
}

function completeLevelOne() {
  unlockGear();
  levelOneMessage.textContent = t("allDone");
  updateInterpreter("allDone", {}, "clap");
  setTimeout(() => {
    window.alert(t("allDone"));
    showLevel(2);
  }, 500);
}

function showLevel(level) {
  if ((level === 2 || level === 3 || level === 4 || level === 5) && mastered.size < 100 && !developmentUnlockLevelTwo) {
    levelOneMessage.textContent = t("nextLocked");
    updateInterpreter("nextLocked", {}, "point");
    return;
  }

  levelOne.classList.toggle("active", level === 1);
  levelTwo.classList.toggle("active", level === 2);
  levelThree.classList.toggle("active", level === 3);
  levelFour.classList.toggle("active", level === 4);
  levelFive.classList.toggle("active", level === 5);
  levelOneTab.classList.toggle("active", level === 1);
  levelTwoTab.classList.toggle("active", level === 2);
  levelThreeTab.classList.toggle("active", level === 3);
  levelFourTab.classList.toggle("active", level === 4);
  levelFiveTab.classList.toggle("active", level === 5);
  updateInterpreter("levelSelected", { level }, "wave");
}

function speakCurrentNumber() {
  updateInterpreter("sayNumber", { number: numberToLocalizedWord(currentTarget) }, "point");
  speakNumber(currentTarget);
}

function speakNumber(number) {
  speakPhrase(numberToLocalizedWord(number));
}

function speakPhrase(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = speechLocale;
  utterance.voice = findLocalVoice(speechLocale);
  utterance.rate = 0.62;
  utterance.pitch = 1.08;
  window.speechSynthesis.speak(utterance);
}

function findLocalVoice(locale = speechLocale) {
  const voices = window.speechSynthesis.getVoices();
  const localeRoot = locale.split("-")[0];
  const isPreferredLadyVoice = (voice) =>
    preferredFemaleVoiceNames.some((name) => voice.name.toLowerCase().includes(name));
  return (
    voices.find((voice) => voice.lang === locale && isPreferredLadyVoice(voice)) ||
    voices.find((voice) => voice.lang.startsWith(localeRoot) && isPreferredLadyVoice(voice)) ||
    voices.find((voice) => voice.lang === "en-KE" && isPreferredLadyVoice(voice)) ||
    voices.find((voice) => voice.lang === "en-GB" && isPreferredLadyVoice(voice)) ||
    voices.find((voice) => voice.lang === "en-US" && isPreferredLadyVoice(voice)) ||
    voices.find((voice) => isPreferredLadyVoice(voice)) ||
    voices.find((voice) => voice.lang === locale) ||
    voices.find((voice) => voice.lang.startsWith(localeRoot)) ||
    voices.find((voice) => voice.lang === "en-GB") ||
    voices.find((voice) => voice.lang === "en-US") ||
    voices.find((voice) => voice.lang.startsWith("en")) ||
    null
  );
}

if ("speechSynthesis" in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    findLocalVoice(speechLocale);
  };
}

function buildGear() {
  const planeColors = [
    "#fff6bf",
    "#dff8ff",
    "#e3f9df",
    "#ffe6d1",
    "#f4e6ff",
    "#ffdeea",
    "#dff4ed",
    "#fff0c9",
    "#e5edff",
    "#ffe0d9",
  ];

  gear.innerHTML = "";
  const planeBand = gearPlaneBand;
  const firstOuter = gearFirstOuter;

  for (let plane = 10; plane >= 1; plane -= 1) {
    const outer = firstOuter + (plane - 1) * planeBand;
    const inner = Math.max(0, outer - planeBand + 0.25);
    const numberRadius = inner + (outer - inner) / 2;
    const values = multiples(plane, 10);
    const layer = document.createElement("button");
    layer.className = `gear-plane plane-layer-${plane}`;
    layer.type = "button";
    layer.dataset.plane = plane;
    layer.style.setProperty("--plane-rotation", "0deg");
    layer.style.zIndex = `${20 - plane}`;
    layer.title = `Select plane ${plane}`;

    const band = document.createElement("span");
    band.className = "gear-band";
    band.style.setProperty("--ring-color", planeColors[plane - 1]);
    band.style.setProperty("--inner", `${inner}%`);
    band.style.setProperty("--outer", `${outer}%`);
    layer.append(band);

    values.forEach((value, index) => {
      const angle = index * 36;
      const radians = (angle * Math.PI) / 180;
      const marker = document.createElement("span");
      marker.className = `gear-number plane-${plane}`;
      marker.textContent = value;
      marker.dataset.gearPlane = plane;
      marker.dataset.gearValue = value;
      marker.style.setProperty("--ring-color", planeColors[plane - 1]);
      marker.style.left = `${50 + Math.sin(radians) * numberRadius}%`;
      marker.style.top = `${50 - Math.cos(radians) * numberRadius}%`;
      marker.title = `Plane ${plane}: ${plane} x ${index + 1} = ${value}`;
      layer.append(marker);
    });

    gear.append(layer);
  }

  const reference = document.createElement("div");
  reference.className = "gear-reference";
  gear.append(reference);

  const center = document.createElement("div");
  center.className = "gear-center";
  center.innerHTML = "<strong>0</strong>";
  gear.append(center);
  buildPlanePicker();
  selectPlane(1);
}

function selectPlaneFromGear(event) {
  const rect = gear.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const distance = Math.hypot(event.clientX - centerX, event.clientY - centerY);
  const percentFromCenter = (distance / (rect.width / 2)) * 50;

  for (let plane = 1; plane <= 10; plane += 1) {
    const outer = gearFirstOuter + (plane - 1) * gearPlaneBand;
    const inner = Math.max(0, outer - gearPlaneBand + 0.25);
    if (percentFromCenter >= inner && percentFromCenter <= outer) {
      selectPlane(plane);
      return;
    }
  }
}

function buildPlanePicker() {
  if (!planePicker) return;
  planePicker.innerHTML = "";
  for (let plane = 1; plane <= 10; plane += 1) {
    const values = multiples(plane, 10);
    const button = document.createElement("button");
    button.className = "plane-button";
    button.type = "button";
    button.dataset.planeButton = plane;
    button.innerHTML = `<strong>${plane}</strong><span>${values[0]}-${values[values.length - 1]}</span>`;
    button.title = `Plane ${plane}: ${values[0]} to ${values[values.length - 1]}`;
    button.addEventListener("click", () => selectPlane(plane));
    planePicker.append(button);
  }
}

function multiples(step, count) {
  return Array.from({ length: count }, (_, index) => step * (index + 1));
}

function rotateGear(direction) {
  rotatePlane(selectedPlane, direction * 36);
  updateInterpreter("rotateGuide", {}, "point");
}

function rotatePlane(plane, degrees) {
  planeRotations[plane] = (planeRotations[plane] + degrees) % 360;
  const layer = document.querySelector(`[data-plane="${plane}"]`);
  layer.style.transform = `rotate(${planeRotations[plane]}deg)`;
  layer.style.setProperty("--plane-rotation", `${planeRotations[plane]}deg`);
}

function selectPlane(plane) {
  selectedPlane = plane;
  const values = multiples(plane, 10);
  gear.querySelectorAll(".gear-plane").forEach((layer) => {
    layer.classList.toggle("selected", Number(layer.dataset.plane) === plane);
  });
  document.querySelectorAll(".plane-button").forEach((button) => {
    button.classList.toggle("selected", Number(button.dataset.planeButton) === plane);
  });
  selectedPlaneLabel.textContent = `Plane ${plane}`;
  selectedPlaneRange.textContent = `${values[0]}-${values[values.length - 1]}`;
  selectedPlaneNumbers.innerHTML = "";
  values.forEach((value) => {
    const chip = document.createElement("span");
    chip.textContent = value;
    selectedPlaneNumbers.append(chip);
  });
  gearMessage.textContent = t("planeSelected", { plane, start: values[0], end: values[values.length - 1] });
  updateInterpreter("planeSelected", { plane, start: values[0], end: values[values.length - 1] }, "point");
}

function mixGear() {
  for (let plane = 1; plane <= 10; plane += 1) {
    const turns = randomNumber(0, 9) * 36;
    planeRotations[plane] = turns;
    const layer = document.querySelector(`[data-plane="${plane}"]`);
    layer.style.transform = `rotate(${turns}deg)`;
    layer.style.setProperty("--plane-rotation", `${turns}deg`);
  }
  gearMessage.textContent = t("gearMixed");
  updateInterpreter("gearMixed", {}, "wave");
}

function alignAllPlanes() {
  for (let plane = 1; plane <= 10; plane += 1) {
    planeRotations[plane] = 0;
    const layer = document.querySelector(`[data-plane="${plane}"]`);
    layer.style.transform = "rotate(0deg)";
    layer.style.setProperty("--plane-rotation", "0deg");
  }
  selectPlane(1);
  gearMessage.textContent = t("gearReset");
  updateInterpreter("gearReset", {}, "clap");
}

function toggleGearOperationPanel() {
  const isOpen = gearOperationPanel.classList.toggle("active");
  toggleGearOperation.textContent = isOpen ? "Hide addition and subtraction" : "Use gear to do addition and subtraction";

  if (isOpen) {
    alignAllPlanes();
    gearOperationPlane = 1;
    setGearOperation("addition");
  } else {
    clearGearOperationHighlights();
  }
}

function setGearOperation(operation) {
  gearOperation = operation;
  gearOperationPlane = 1;
  gearAdditionTab.classList.toggle("active", operation === "addition");
  gearSubtractionTab.classList.toggle("active", operation === "subtraction");
  renderGearExampleList();
  makeGearOperationExample();
  updateInterpreter(operation === "addition" ? "addGuide" : "subtractGuide", {}, "point");
}

function renderGearExampleList() {
  gearExampleList.innerHTML = "";
  gearExampleBank[gearOperation].forEach((example) => {
    const prepared = prepareGearOperationExample(example, gearOperation);
    const symbol = gearOperation === "addition" ? "+" : "-";
    const button = document.createElement("button");
    button.className = "gear-example-button";
    button.type = "button";
    button.textContent = `${prepared.start} ${symbol} ${prepared.change}`;
    button.title = `Plane ${prepared.plane}: ${prepared.start} ${symbol} ${prepared.change}`;
    button.addEventListener("click", () => useListedGearExample(example));
    gearExampleList.append(button);
  });
}

function useListedGearExample(example) {
  clearGearOperationHighlights();
  alignAllPlanes();
  const prepared = prepareGearOperationExample(example, gearOperation);
  gearOperationExample = prepared;
  selectPlane(prepared.plane);
  renderGearOperationExample(true);
}

function prepareGearOperationExample(example, operation) {
  const start = example.plane * example.startIndex;
  const change = example.plane * example.steps;
  const answer = operation === "addition" ? start + change : start - change;
  return { plane: example.plane, start, steps: example.steps, change, answer };
}

function makeGearOperationExample() {
  clearGearOperationHighlights();
  alignAllPlanes();
  const plane = gearOperationPlane;
  selectPlane(plane);

  if (gearOperation === "addition") {
    const startIndex = randomNumber(1, 7);
    const maxSteps = Math.min(3, 10 - startIndex);
    const steps = randomNumber(1, maxSteps);
    const start = plane * startIndex;
    const change = plane * steps;
    gearOperationExample = { plane, start, steps, change, answer: start + change };
  } else {
    const startIndex = randomNumber(4, 10);
    const steps = randomNumber(1, Math.min(4, startIndex - 1));
    const start = plane * startIndex;
    const change = plane * steps;
    gearOperationExample = { plane, start, steps, change, answer: start - change };
  }

  renderGearOperationExample();
  gearOperationPlane = gearOperationPlane === 10 ? 1 : gearOperationPlane + 1;
}

function renderGearOperationExample(showPopup = false) {
  const { plane, start, steps, change, answer } = gearOperationExample;
  const symbol = gearOperation === "addition" ? "+" : "-";
  const direction = gearOperation === "addition" ? "clockwise" : "anticlockwise";
  const stepValues = getGearStepValues(start, steps, plane, gearOperation);

  gearOperationEquation.textContent = `Plane ${plane}: ${start} ${symbol} ${change} = ${answer}`;
  gearOperationExplanation.textContent =
    `Find ${start} on Plane ${plane}. Plane ${plane} counts in ${plane}s, so ${change} means ` +
    `${steps} ${steps === 1 ? "step" : "steps"}. Move ${direction}: ${stepValues.join(", ")}. You reach ${answer}.`;
  gearMessage.textContent =
    gearOperation === "addition"
      ? `Addition on Plane ${plane}: start at ${start}, move ${steps} steps clockwise, and land on ${answer}.`
      : `Subtraction on Plane ${plane}: start at ${start}, move ${steps} steps anticlockwise, and land on ${answer}.`;
  highlightGearOperation(plane, start, stepValues, answer);
  if (showPopup) {
    showGearOperationPopup();
  }
}

function getGearStepValues(start, steps, plane, operation) {
  return Array.from({ length: steps }, (_, index) => {
    return operation === "addition" ? start + plane * (index + 1) : start - plane * (index + 1);
  });
}

function highlightGearOperation(plane, start, stepValues, answer) {
  clearGearOperationHighlights();
  const startMarker = gear.querySelector(`[data-gear-plane="${plane}"][data-gear-value="${start}"]`);
  startMarker?.classList.add("operation-start");
  stepValues.forEach((value) => {
    const marker = gear.querySelector(`[data-gear-plane="${plane}"][data-gear-value="${value}"]`);
    marker?.classList.add(value === answer ? "operation-end" : "operation-path");
  });
}

function clearGearOperationHighlights() {
  gear.querySelectorAll(".operation-start, .operation-path, .operation-end").forEach((marker) => {
    marker.classList.remove("operation-start", "operation-path", "operation-end");
  });
}

function showGearOperationPopup() {
  const { plane, start, steps, change, answer } = gearOperationExample;
  const symbol = gearOperation === "addition" ? "+" : "-";
  const direction = gearOperation === "addition" ? "clockwise" : "anticlockwise";
  gearPopupTitle.textContent = `${start} ${symbol} ${change}`;
  gearPopupText.textContent =
    `Identify number ${start} on Plane ${plane}. Move ${steps} ${steps === 1 ? "step" : "steps"} ` +
    `${direction} to get number ${answer}.`;
  gearOperationPopup.classList.add("active");
}

function closeGearOperationPopup() {
  gearOperationPopup.classList.remove("active");
}

function buildAdvancedGear() {
  if (!advancedGear) return;
  const planeColors = [
    "#fff0a6",
    "#bdefff",
    "#c9f5c0",
    "#ffd1ad",
    "#e6d3ff",
    "#ffc3d8",
    "#b9eee0",
    "#d6c05f",
    "#7db7e8",
    "#f28f6b",
    "#8ccf7e",
  ];

  advancedGear.innerHTML = "";
  const planeBand = advancedGearPlaneBand;
  const firstOuter = advancedGearFirstOuter;

  for (let plane = 11; plane >= 1; plane -= 1) {
    const outer = firstOuter + (plane - 1) * planeBand;
    const inner = Math.max(0, outer - advancedGearRingWidth);
    const numberRadius = inner + (outer - inner) / 2;
    const values = advancedPlaneValues(plane);
    const layer = document.createElement("button");
    layer.className = `gear-plane advanced-plane-layer advanced-plane-layer-${plane}`;
    layer.type = "button";
    layer.dataset.advancedPlane = plane;
    layer.style.setProperty("--plane-rotation", "0deg");
    layer.style.zIndex = `${24 - plane}`;
    layer.title = `Select plane ${plane}: ${values[0]}-${values[values.length - 1]}`;

    const band = document.createElement("span");
    band.className = "gear-band advanced-gear-band";
    band.style.setProperty("--ring-color", planeColors[plane - 1]);
    band.style.setProperty("--inner", `${inner}%`);
    band.style.setProperty("--outer", `${outer}%`);
    layer.append(band);

    values.forEach((value, index) => {
      const angle = index * 36;
      const radians = (angle * Math.PI) / 180;
      const marker = document.createElement("span");
      marker.className = `gear-number advanced-gear-number advanced-plane-${plane}`;
      marker.textContent = value;
      marker.style.setProperty("--ring-color", planeColors[plane - 1]);
      marker.style.left = `${50 + Math.sin(radians) * numberRadius}%`;
      marker.style.top = `${50 - Math.cos(radians) * numberRadius}%`;
      marker.title = `Plane ${plane}: ${plane} x ${index + 11} = ${value}`;
      layer.append(marker);
    });

    advancedGear.append(layer);
  }

  const reference = document.createElement("div");
  reference.className = "gear-reference advanced-reference";
  advancedGear.append(reference);

  const center = document.createElement("div");
  center.className = "gear-center advanced-center";
  center.innerHTML = "<strong>0</strong>";
  advancedGear.append(center);
  buildAdvancedPlanePicker();
  selectAdvancedPlane(1);
}

function selectAdvancedPlaneFromGear(event) {
  const rect = advancedGear.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const distance = Math.hypot(event.clientX - centerX, event.clientY - centerY);
  const percentFromCenter = (distance / (rect.width / 2)) * 50;

  for (let plane = 1; plane <= 11; plane += 1) {
    const outer = advancedGearFirstOuter + (plane - 1) * advancedGearPlaneBand;
    const inner = Math.max(0, outer - advancedGearRingWidth);
    if (percentFromCenter >= inner && percentFromCenter <= outer) {
      selectAdvancedPlane(plane);
      return;
    }
  }
}

function buildAdvancedPlanePicker() {
  if (!advancedPlanePicker) return;
  advancedPlanePicker.innerHTML = "";
  for (let plane = 1; plane <= 11; plane += 1) {
    const values = advancedPlaneValues(plane);
    const button = document.createElement("button");
    button.className = "advanced-plane-button";
    button.type = "button";
    button.dataset.advancedPlaneButton = plane;
    button.innerHTML = `<strong>${plane}</strong><span>${values[0]}-${values[values.length - 1]}</span>`;
    button.title = `Plane ${plane}: ${values[0]} to ${values[values.length - 1]}`;
    button.addEventListener("click", () => selectAdvancedPlane(plane));
    advancedPlanePicker.append(button);
  }
}

function advancedPlaneValues(plane) {
  return Array.from({ length: 10 }, (_, index) => plane * (index + 11));
}

function rotateAdvancedGear(direction) {
  rotateAdvancedPlane(selectedAdvancedPlane, direction * 36);
  updateInterpreter("rotateGuide", {}, "point");
}

function rotateAdvancedPlane(plane, degrees) {
  advancedPlaneRotations[plane] = (advancedPlaneRotations[plane] + degrees) % 360;
  const layer = advancedGear.querySelector(`[data-advanced-plane="${plane}"]`);
  layer.style.transform = `rotate(${advancedPlaneRotations[plane]}deg)`;
  layer.style.setProperty("--plane-rotation", `${advancedPlaneRotations[plane]}deg`);
}

function selectAdvancedPlane(plane) {
  selectedAdvancedPlane = plane;
  const values = advancedPlaneValues(plane);
  advancedGear.querySelectorAll(".advanced-plane-layer").forEach((layer) => {
    layer.classList.toggle("selected", Number(layer.dataset.advancedPlane) === plane);
  });
  advancedPlanePicker.querySelectorAll(".advanced-plane-button").forEach((button) => {
    button.classList.toggle("selected", Number(button.dataset.advancedPlaneButton) === plane);
  });
  advancedSelectedPlane.textContent = `Plane ${plane}`;
  advancedSelectedRange.textContent = `${values[0]}-${values[values.length - 1]}`;
  advancedSelectedNumbers.innerHTML = "";
  values.forEach((value) => {
    const chip = document.createElement("span");
    chip.textContent = value;
    advancedSelectedNumbers.append(chip);
  });
  advancedGearMessage.textContent = t("advancedPlaneSelected", { plane, start: values[0], end: values[values.length - 1] });
  updateInterpreter("advancedPlaneSelected", { plane, start: values[0], end: values[values.length - 1] }, "point");
}

function mixAdvancedGear() {
  for (let plane = 1; plane <= 11; plane += 1) {
    const turns = randomNumber(0, 9) * 36;
    advancedPlaneRotations[plane] = turns;
    const layer = advancedGear.querySelector(`[data-advanced-plane="${plane}"]`);
    layer.style.transform = `rotate(${turns}deg)`;
    layer.style.setProperty("--plane-rotation", `${turns}deg`);
  }
  advancedGearMessage.textContent = t("advancedMixed");
  updateInterpreter("advancedMixed", {}, "wave");
}

function resetAdvancedGear() {
  for (let plane = 1; plane <= 11; plane += 1) {
    advancedPlaneRotations[plane] = 0;
    const layer = advancedGear.querySelector(`[data-advanced-plane="${plane}"]`);
    layer.style.transform = "rotate(0deg)";
    layer.style.setProperty("--plane-rotation", "0deg");
  }
  selectAdvancedPlane(1);
  advancedGearMessage.textContent = t("advancedReset");
  updateInterpreter("advancedReset", {}, "clap");
}

function buildPrimeGear() {
  if (!primeGear) return;
  const planeColors = [
    "#fff0a6",
    "#bdefff",
    "#c9f5c0",
    "#ffd1ad",
    "#e6d3ff",
    "#ffc3d8",
    "#b9eee0",
    "#ffe09b",
    "#cbd8ff",
    "#ffbbb0",
  ];

  primeGear.innerHTML = "";
  const planeBand = primeGearPlaneBand;
  const firstOuter = primeGearFirstOuter;

  for (let plane = 10; plane >= 1; plane -= 1) {
    const outer = firstOuter + (plane - 1) * planeBand;
    const inner = Math.max(0, outer - planeBand + 0.2);
    const numberRadius = inner + (outer - inner) / 2;
    const values = primePlaneValues(plane);
    const layer = document.createElement("button");
    layer.className = `gear-plane prime-plane-layer prime-plane-layer-${plane}`;
    layer.type = "button";
    layer.dataset.primePlane = plane;
    layer.style.setProperty("--plane-rotation", "0deg");
    layer.style.zIndex = `${22 - plane}`;
    layer.title = `Select prime plane ${plane}: ${values[0]}-${values[values.length - 1]}`;

    const band = document.createElement("span");
    band.className = "gear-band prime-gear-band";
    band.style.setProperty("--ring-color", planeColors[plane - 1]);
    band.style.setProperty("--inner", `${inner}%`);
    band.style.setProperty("--outer", `${outer}%`);
    layer.append(band);

    values.forEach((value, index) => {
      const angle = index * 36;
      const radians = (angle * Math.PI) / 180;
      const marker = document.createElement("span");
      marker.className = `gear-number prime-gear-number prime-plane-${plane}`;
      marker.textContent = value;
      marker.style.left = `${50 + Math.sin(radians) * numberRadius}%`;
      marker.style.top = `${50 - Math.cos(radians) * numberRadius}%`;
      marker.title = `Prime plane ${plane}: prime ${((plane - 1) * 10) + index + 1} is ${value}`;
      layer.append(marker);
    });

    primeGear.append(layer);
  }

  const reference = document.createElement("div");
  reference.className = "gear-reference prime-reference";
  primeGear.append(reference);

  const center = document.createElement("div");
  center.className = "gear-center prime-center";
  center.innerHTML = "<strong>P</strong>";
  primeGear.append(center);
  buildPrimePlanePicker();
  selectPrimePlane(1);
}

function selectPrimePlaneFromGear(event) {
  const rect = primeGear.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const distance = Math.hypot(event.clientX - centerX, event.clientY - centerY);
  const percentFromCenter = (distance / (rect.width / 2)) * 50;

  for (let plane = 1; plane <= 10; plane += 1) {
    const outer = primeGearFirstOuter + (plane - 1) * primeGearPlaneBand;
    const inner = Math.max(0, outer - primeGearPlaneBand + 0.2);
    if (percentFromCenter >= inner && percentFromCenter <= outer) {
      selectPrimePlane(plane);
      return;
    }
  }
}

function buildPrimePlanePicker() {
  if (!primePlanePicker) return;
  primePlanePicker.innerHTML = "";
  for (let plane = 1; plane <= 10; plane += 1) {
    const values = primePlaneValues(plane);
    const button = document.createElement("button");
    button.className = "advanced-plane-button";
    button.type = "button";
    button.dataset.primePlaneButton = plane;
    button.innerHTML = `<strong>${plane}</strong><span>${values[0]}-${values[values.length - 1]}</span>`;
    button.title = `Prime plane ${plane}: ${values[0]} to ${values[values.length - 1]}`;
    button.addEventListener("click", () => selectPrimePlane(plane));
    primePlanePicker.append(button);
  }
}

function primePlaneValues(plane) {
  const start = (plane - 1) * 10;
  return firstPrimes(100).slice(start, start + 10);
}

function firstPrimes(count) {
  const primes = [];
  let candidate = 2;
  while (primes.length < count) {
    if (isPrime(candidate)) primes.push(candidate);
    candidate += 1;
  }
  return primes;
}

function isPrime(number) {
  if (number < 2) return false;
  for (let divisor = 2; divisor * divisor <= number; divisor += 1) {
    if (number % divisor === 0) return false;
  }
  return true;
}

function rotatePrimeGear(direction) {
  rotatePrimePlane(selectedPrimePlane, direction * 36);
  updateInterpreter("rotateGuide", {}, "point");
}

function rotatePrimePlane(plane, degrees) {
  primePlaneRotations[plane] = (primePlaneRotations[plane] + degrees) % 360;
  const layer = primeGear.querySelector(`[data-prime-plane="${plane}"]`);
  layer.style.transform = `rotate(${primePlaneRotations[plane]}deg)`;
  layer.style.setProperty("--plane-rotation", `${primePlaneRotations[plane]}deg`);
}

function selectPrimePlane(plane) {
  selectedPrimePlane = plane;
  const values = primePlaneValues(plane);
  primeGear.querySelectorAll(".prime-plane-layer").forEach((layer) => {
    layer.classList.toggle("selected", Number(layer.dataset.primePlane) === plane);
  });
  primePlanePicker.querySelectorAll(".advanced-plane-button").forEach((button) => {
    button.classList.toggle("selected", Number(button.dataset.primePlaneButton) === plane);
  });
  primeSelectedPlane.textContent = `Plane ${plane}`;
  primeSelectedRange.textContent = `${values[0]}-${values[values.length - 1]}`;
  primeSelectedNumbers.innerHTML = "";
  values.forEach((value) => {
    const chip = document.createElement("span");
    chip.textContent = value;
    primeSelectedNumbers.append(chip);
  });
  primeGearMessage.textContent = t("primePlaneSelected", { plane, start: values[0], end: values[values.length - 1] });
  updateInterpreter("primePlaneSelected", { plane, start: values[0], end: values[values.length - 1] }, "point");
}

function mixPrimeGear() {
  for (let plane = 1; plane <= 10; plane += 1) {
    const turns = randomNumber(0, 9) * 36;
    primePlaneRotations[plane] = turns;
    const layer = primeGear.querySelector(`[data-prime-plane="${plane}"]`);
    layer.style.transform = `rotate(${turns}deg)`;
    layer.style.setProperty("--plane-rotation", `${turns}deg`);
  }
  primeGearMessage.textContent = t("primeMixed");
  updateInterpreter("primeMixed", {}, "wave");
}

function resetPrimeGear() {
  for (let plane = 1; plane <= 10; plane += 1) {
    primePlaneRotations[plane] = 0;
    const layer = primeGear.querySelector(`[data-prime-plane="${plane}"]`);
    layer.style.transform = "rotate(0deg)";
    layer.style.setProperty("--plane-rotation", "0deg");
  }
  selectPrimePlane(1);
  primeGearMessage.textContent = t("primeReset");
  updateInterpreter("primeReset", {}, "clap");
}

function makeGearQuestion() {
  if (!equation || !answerRow) return;
  const plane = randomNumber(1, 10);
  const step = randomNumber(1, 10);
  const answer = plane * step;
  gearQuestion = { plane, step, answer };
  equation.textContent = `${plane} + ${plane} repeated ${step} times = ?`;
  gearMessage.textContent = `Use plane ${plane}. Count clockwise to mark ${step}.`;
  renderGearAnswers();
}

function renderGearAnswers() {
  const options = new Set([gearQuestion.answer]);
  while (options.size < 4) {
    options.add(Math.max(0, gearQuestion.answer + randomNumber(-8, 8)));
  }

  answerRow.innerHTML = "";
  shuffle([...options]).forEach((number) => {
    const button = document.createElement("button");
    button.className = "answer";
    button.type = "button";
    button.textContent = number;
    button.addEventListener("click", () => checkGearAnswer(button, number));
    answerRow.append(button);
  });
}

function checkGearAnswer(button, number) {
  const correct = number === gearQuestion.answer;
  button.classList.add(correct ? "correct" : "wrong");
  gearMessage.textContent = correct
    ? `Yes. Plane ${gearQuestion.plane}, mark ${gearQuestion.step}, is ${gearQuestion.answer}.`
    : `Almost. Stay on plane ${gearQuestion.plane} and count clockwise.`;

  if (correct) {
    setTimeout(makeGearQuestion, 900);
  }
}

function setPracticeTab(tabName) {
  const showBeginner = tabName === "beginner";
  const showCounters = tabName === "counters";
  beginnerCountersTab.classList.toggle("active", showBeginner);
  countersTab.classList.toggle("active", showCounters);
  countThingsTab.classList.toggle("active", tabName === "things");
  beginnerCountersPanel.classList.toggle("active", showBeginner);
  countersPanel.classList.toggle("active", showCounters);
  countThingsPanel.classList.toggle("active", tabName === "things");
}

function getBeginnerExampleBank() {
  return [
    { count: 3, item: "ball", label: "Balls" },
    { count: 2, item: "cat", label: "Cats" },
    { count: 4, item: "bag", label: "Bags" },
    { count: 1, item: "apple", label: "Apple" },
    { count: 4, item: "cat", label: "Cats" },
    { count: 3, item: "apple", label: "Apples" },
    { count: 2, item: "ball", label: "Balls" },
    { count: 4, item: "apple", label: "Apples" },
    { count: 1, item: "bag", label: "Bag" },
    { count: 4, item: "ball", label: "Balls" },
    { count: 3, item: "cat", label: "Cats" },
    { count: 2, item: "bag", label: "Bags" },
    { count: 2, item: "apple", label: "Apples" },
    { count: 3, item: "bag", label: "Bags" },
    { count: 1, item: "cat", label: "Cat" },
    { count: 4, item: "ball", label: "Balls" },
  ];
}

function getBeginnerExamples() {
  const examples = getBeginnerExampleBank();
  return Array.from({ length: 4 }, (_, index) => examples[(beginnerExampleSet + index) % examples.length]);
}

function renderBeginnerExamples() {
  beginnerFormulaRow.innerHTML = "";
  const examples = getBeginnerExamples();
  beginnerExample = examples[0];
  examples.forEach((example) => {
    const button = document.createElement("button");
    button.className = "formula-button";
    button.type = "button";
    button.textContent = `${example.count} ${formatCountNoun(example.count, example.item)}`;
    button.addEventListener("click", () => {
      beginnerExample = example;
      renderBeginnerCounter();
    });
    beginnerFormulaRow.append(button);
  });
  renderBeginnerCounter();
}

function renderBeginnerCounter() {
  beginnerObjectName.textContent = beginnerExample.label;
  beginnerPrompt.textContent = `Write ${beginnerExample.count}`;
  beginnerFeedback.textContent = `Count each ${beginnerExample.item}, then choose the number.`;
  beginnerItems.innerHTML = "";
  beginnerChoiceRow.innerHTML = "";

  for (let index = 0; index < beginnerExample.count; index += 1) {
    beginnerItems.append(makeBeginnerItem(beginnerExample.item, index));
  }

  makeBeginnerChoices(beginnerExample.count).forEach((number) => {
    const button = document.createElement("button");
    button.className = "beginner-choice";
    button.type = "button";
    button.textContent = number;
    button.addEventListener("click", () => checkBeginnerChoice(button, number));
    beginnerChoiceRow.append(button);
  });
}

function makeBeginnerChoices(answer) {
  const options = new Set([answer]);
  if (answer > 1) {
    options.add(answer - 1);
  }
  options.add(answer + 1);
  while (options.size < 3) {
    options.add(Math.max(1, answer + options.size));
  }
  return [...options].sort((a, b) => a - b);
}

function checkBeginnerChoice(button, number) {
  const correct = number === beginnerExample.count;
  beginnerChoiceRow.querySelectorAll("button").forEach((choice) => {
    choice.classList.remove("correct", "wrong");
  });
  button.classList.add(correct ? "correct" : "wrong");
  beginnerFeedback.textContent = correct
    ? `Yes. There are ${formatCountNoun(beginnerExample.count, beginnerExample.item, true)}.`
    : `Try again. Count the ${beginnerExample.label.toLowerCase()} one by one.`;
  if (correct) {
    updateInterpreter("correct", { number: numberToLocalizedWord(beginnerExample.count) }, "clap");
    speakPhrase(`${formatCountNoun(beginnerExample.count, beginnerExample.item, true)}, correct`);
  } else {
    updateInterpreter("wrong", { number: numberToLocalizedWord(beginnerExample.count) }, "point");
  }
}

function makeBeginnerItem(itemName) {
  const item = document.createElement("span");
  item.className = `beginner-item ${itemName}`;
  item.setAttribute("aria-label", itemName);
  const photo = document.createElement("img");
  photo.className = "beginner-photo";
  photo.src = getBeginnerImage(itemName);
  photo.alt = itemName;
  photo.loading = "lazy";
  const label = document.createElement("span");
  label.className = "thing-label";
  label.textContent = itemName;
  item.append(photo, label);
  return item;
}

function getBeginnerImage(itemName) {
  const images = beginnerImagePools[itemName];
  const offset = (beginnerExampleSet + beginnerExample.count) % images.length;
  return images[offset];
}

function resetBeginnerExampleSet() {
  beginnerExampleSet = (beginnerExampleSet + 1) % getBeginnerExampleBank().length;
  renderBeginnerExamples();
}

function setCounterOperation(operation) {
  counterOperation = operation;
  counterExampleSet = 0;
  additionTab.classList.toggle("active", operation === "addition");
  subtractionTab.classList.toggle("active", operation === "subtraction");
  renderCounterExamples();
  updateInterpreter(operation === "addition" ? "addGuide" : "subtractGuide", {}, "point");
}

function getCounterExamples() {
  const examples = counterOperation === "addition"
    ? [
        { a: 1, b: 1 },
        { a: 1, b: 2 },
        { a: 2, b: 2 },
        { a: 2, b: 3 },
        { a: 3, b: 3 },
        { a: 4, b: 5 },
        { a: 5, b: 5 },
        { a: 6, b: 7 },
        { a: 8, b: 3 },
      ]
    : [
        { a: 2, b: 1 },
        { a: 3, b: 1 },
        { a: 4, b: 2 },
        { a: 5, b: 2 },
        { a: 6, b: 3 },
        { a: 8, b: 4 },
        { a: 10, b: 4 },
        { a: 13, b: 6 },
        { a: 15, b: 5 },
      ];
  return examples.slice(counterExampleSet, counterExampleSet + 3);
}

function renderCounterExamples() {
  formulaRow.innerHTML = "";
  const examples = getCounterExamples();
  counterExample = examples[0];
  examples.forEach((example) => {
    const button = document.createElement("button");
    button.className = "formula-button";
    button.type = "button";
    button.textContent =
      counterOperation === "addition" ? `${example.a} + ${example.b}` : `${example.a} - ${example.b}`;
    button.addEventListener("click", () => {
      counterExample = example;
      renderCounterEquation();
      updateInterpreter(counterOperation === "addition" ? "addGuide" : "subtractGuide", {}, "point");
    });
    formulaRow.append(button);
  });
  renderCounterEquation();
  counterStage.innerHTML = "";
}

function resetCounterExamples() {
  const totalExamples = 9;
  counterExampleSet = (counterExampleSet + 3) % totalExamples;
  renderCounterExamples();
  updateInterpreter(counterOperation === "addition" ? "addGuide" : "subtractGuide", {}, "wave");
}

function renderCounterEquation(result = "?") {
  const symbol = counterOperation === "addition" ? "+" : "-";
  counterEquation.textContent = `${counterExample.a} ${symbol} ${counterExample.b} = ${result}`;
  computeCounters.textContent = counterOperation === "addition" ? "Add" : "Subtract";
}

async function computeCounterExample() {
  computeCounters.disabled = true;
  counterStage.innerHTML = "";
  updateInterpreter(counterOperation === "addition" ? "addGuide" : "subtractGuide", {}, "point");

  if (counterOperation === "addition") {
    await computeAdditionCounters(counterExample.a, counterExample.b);
  } else {
    await computeSubtractionCounters(counterExample.a, counterExample.b);
  }

  computeCounters.disabled = false;
}

async function computeAdditionCounters(first, second) {
  const firstGroup = makeCounterGroup("First number");
  const plusSign = makeOperatorSign("+");
  const secondGroup = makeCounterGroup("Second number");
  const equalSign = makeOperatorSign("=");
  const resultGroup = makeCounterGroup("All counters");
  const result = first + second;

  counterStage.append(firstGroup);
  await countIntoGroup(firstGroup, 1, first);
  addWrittenNumber(firstGroup, first, "stick");
  counterStage.append(plusSign);
  await speakAndPause("plus");
  counterStage.append(secondGroup);
  await countIntoGroup(secondGroup, 1, second);
  addWrittenNumber(secondGroup, second, "stick");
  counterStage.append(equalSign);
  await speakAndPause("equals to");
  counterStage.append(resultGroup);
  await countIntoGroup(resultGroup, 1, result);
  renderCounterEquation(result);
  addResultNumber(resultGroup, result, "stick");
}

async function computeSubtractionCounters(first, second) {
  const startGroup = makeCounterGroup("Start with");
  const minusSign = makeOperatorSign("-");
  const takenGroup = makeCounterGroup("Take away");
  const equalSign = makeOperatorSign("=");
  const resultGroup = makeCounterGroup("Left");
  const result = first - second;

  counterStage.append(startGroup);
  await countIntoGroup(startGroup, 1, first);
  addWrittenNumber(startGroup, first, "stick");
  counterStage.append(minusSign);
  await speakAndPause("minus");
  counterStage.append(takenGroup);
  await moveSticksAway(startGroup, takenGroup, second);
  addWrittenNumber(takenGroup, second, "stick");
  counterStage.append(equalSign);
  await speakAndPause("equals to");
  counterStage.append(resultGroup);
  await countIntoGroup(resultGroup, 1, result);
  renderCounterEquation(result);
  addResultNumber(resultGroup, result, "stick");
}

function makeCounterGroup(label) {
  const group = document.createElement("div");
  group.className = "counter-group";
  const title = document.createElement("span");
  title.className = "counter-label";
  title.textContent = label;
  const counters = document.createElement("div");
  counters.className = "counter-sticks";
  group.append(title, counters);
  return group;
}

function makeOperatorSign(sign) {
  const operator = document.createElement("div");
  operator.className = "counter-operator";
  operator.textContent = sign;
  return operator;
}

async function countIntoGroup(group, start, end) {
  const sticks = group.querySelector(".counter-sticks");
  for (let number = start; number <= end; number += 1) {
    const stick = document.createElement("span");
    stick.className = "counter-stick";
    sticks.append(stick);
    await speakAndPause(numberToLocalizedWord(number));
  }
}

async function moveSticksAway(startGroup, takenGroup, count) {
  const startSticks = [...startGroup.querySelectorAll(".counter-stick:not(.taken)")];
  const takenSticks = takenGroup.querySelector(".counter-sticks");
  for (let index = 0; index < count; index += 1) {
    const stick = startSticks[index];
    stick.classList.add("taken");
    const movedStick = document.createElement("span");
    movedStick.className = "counter-stick moved";
    takenSticks.append(movedStick);
    await speakAndPause(numberToLocalizedWord(index + 1));
  }
}

function addWrittenNumber(group, number, itemName) {
  const writtenNumber = document.createElement("strong");
  writtenNumber.className = "counter-written-number";
  writtenNumber.textContent = formatCountLabel(number, itemName);
  group.append(writtenNumber);
}

function addResultNumber(group, number, itemName) {
  const resultNumber = document.createElement("strong");
  resultNumber.className = "counter-result-number";
  resultNumber.textContent = formatCountLabel(number, itemName);
  group.append(resultNumber);
}

function formatCountLabel(number, itemName) {
  return formatCountNoun(number, itemName, true);
}

function formatCountNoun(number, itemName, includeNumber = false) {
  const plural = number === 1 ? itemName : `${itemName}s`;
  return includeNumber ? `${number} ${plural}` : plural;
}

function speakAndPause(text) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, 1050);
  });
}

function setThingsType(type) {
  thingsType = type;
  fruitsTab.classList.toggle("active", type === "fruits");
  toysTab.classList.toggle("active", type === "toys");
  thingsExampleSet = 0;
  renderThingsExamples();
  updateInterpreter("numberTouched", { number: type === "fruits" ? "fruits" : "toys" }, "point");
}

function setThingsOperation(operation) {
  thingsOperation = operation;
  thingsAdditionTab.classList.toggle("active", operation === "addition");
  thingsSubtractionTab.classList.toggle("active", operation === "subtraction");
  thingsExampleSet = 0;
  renderThingsExamples();
  updateInterpreter(operation === "addition" ? "addGuide" : "subtractGuide", {}, "point");
}

function getThingsExamples() {
  const examples =
    thingsOperation === "addition"
      ? [
          { a: 2, b: 1 },
          { a: 2, b: 2 },
          { a: 3, b: 2 },
          { a: 4, b: 3 },
          { a: 5, b: 4 },
          { a: 6, b: 5 },
        ]
      : [
          { a: 3, b: 1 },
          { a: 4, b: 2 },
          { a: 5, b: 2 },
          { a: 7, b: 3 },
          { a: 8, b: 4 },
          { a: 9, b: 5 },
        ];
  return examples.slice(thingsExampleSet, thingsExampleSet + 3);
}

function renderThingsExamples() {
  thingsFormulaRow.innerHTML = "";
  const examples = getThingsExamples();
  thingsExample = examples[0];
  examples.forEach((example) => {
    const button = document.createElement("button");
    button.className = "formula-button";
    button.type = "button";
    button.textContent =
      thingsOperation === "addition" ? `${example.a} + ${example.b}` : `${example.a} - ${example.b}`;
    button.addEventListener("click", () => {
      thingsExample = example;
      renderThingsEquation();
      updateInterpreter(thingsOperation === "addition" ? "addGuide" : "subtractGuide", {}, "point");
    });
    thingsFormulaRow.append(button);
  });
  renderThingsEquation();
  thingsStage.innerHTML = "";
}

function renderThingsEquation(result = "?") {
  const symbol = thingsOperation === "addition" ? "+" : "-";
  currentThingName = pickThingForExample(thingsExample);
  thingsEquation.textContent = `${thingsExample.a} ${symbol} ${thingsExample.b} = ${result}`;
  computeThings.textContent = thingsOperation === "addition" ? "Add" : "Subtract";
}

function pickThingForExample(example) {
  const collection = thingsType === "fruits" ? fruitThings : toyThings;
  return collection[(example.a + example.b) % collection.length];
}

function resetThingsExampleSet() {
  thingsExampleSet = (thingsExampleSet + 3) % 6;
  renderThingsExamples();
  updateInterpreter(thingsOperation === "addition" ? "addGuide" : "subtractGuide", {}, "wave");
}

async function computeThingsExample() {
  computeThings.disabled = true;
  thingsStage.innerHTML = "";
  updateInterpreter(thingsOperation === "addition" ? "addGuide" : "subtractGuide", {}, "point");

  if (thingsOperation === "addition") {
    await computeThingsAddition(thingsExample.a, thingsExample.b);
  } else {
    await computeThingsSubtraction(thingsExample.a, thingsExample.b);
  }

  computeThings.disabled = false;
}

async function computeThingsAddition(first, second) {
  currentThingName = pickThingForExample(thingsExample);
  const firstGroup = makeThingGroup(thingsType === "fruits" ? "First fruits" : "First toys");
  const plusSign = makeOperatorSign("+");
  const secondGroup = makeThingGroup(thingsType === "fruits" ? "More fruits" : "More toys");
  const equalSign = makeOperatorSign("=");
  const resultGroup = makeThingGroup("All together");
  const result = first + second;

  thingsStage.append(firstGroup);
  await addThings(firstGroup, first);
  addWrittenNumber(firstGroup, first, currentThingName);
  thingsStage.append(plusSign);
  await pauseOnly();
  thingsStage.append(secondGroup);
  await addThings(secondGroup, second);
  addWrittenNumber(secondGroup, second, currentThingName);
  thingsStage.append(equalSign);
  await pauseOnly();
  thingsStage.append(resultGroup);
  await addThings(resultGroup, result);
  addResultNumber(resultGroup, result, currentThingName);
  renderThingsEquation(result);
}

async function computeThingsSubtraction(first, second) {
  currentThingName = pickThingForExample(thingsExample);
  const startGroup = makeThingGroup(thingsType === "fruits" ? "Start with fruits" : "Start with toys");
  const minusSign = makeOperatorSign("-");
  const takenGroup = makeThingGroup("Taken away");
  const equalSign = makeOperatorSign("=");
  const resultGroup = makeThingGroup("Left");
  const result = first - second;

  thingsStage.append(startGroup);
  await addThings(startGroup, first);
  addWrittenNumber(startGroup, first, currentThingName);
  thingsStage.append(minusSign);
  await pauseOnly();
  thingsStage.append(takenGroup);
  await moveThingsAway(startGroup, takenGroup, second);
  addWrittenNumber(takenGroup, second, currentThingName);
  thingsStage.append(equalSign);
  await pauseOnly();
  thingsStage.append(resultGroup);
  await addThings(resultGroup, result);
  addResultNumber(resultGroup, result, currentThingName);
  renderThingsEquation(result);
}

function makeThingGroup(label) {
  const group = document.createElement("div");
  group.className = "thing-group";
  const title = document.createElement("span");
  title.className = "counter-label";
  title.textContent = label;
  const items = document.createElement("div");
  items.className = "thing-items";
  group.append(title, items);
  return group;
}

async function addThings(group, count) {
  const items = group.querySelector(".thing-items");
  for (let index = 0; index < count; index += 1) {
    items.append(makeThingItem(currentThingName));
    await pauseOnly();
  }
}

async function moveThingsAway(startGroup, takenGroup, count) {
  const startItems = [...startGroup.querySelectorAll(".thing-item:not(.taken)")];
  const takenItems = takenGroup.querySelector(".thing-items");
  for (let index = 0; index < count; index += 1) {
    const item = startItems[index];
    item.classList.add("taken");
    takenItems.append(makeThingItem(item.dataset.thingName, index, true, item.dataset.imageSrc));
    await pauseOnly();
  }
}

function makeThingItem(thingName, index = 0, isTaken = false, imageSrc = "") {
  const item = document.createElement("span");
  const itemType = thingsType === "fruits" ? "fruit-item" : "toy-item";
  const itemClass = thingName.replace(/\s+/g, "-");
  item.className = `thing-item ${itemType} ${itemClass}${isTaken ? " moved" : ""}`;
  item.dataset.thingName = thingName;
  const resolvedImageSrc = imageSrc || getThingImage(thingName, index);
  item.dataset.imageSrc = resolvedImageSrc;
  const photo = document.createElement("img");
  photo.className = "thing-photo";
  photo.src = resolvedImageSrc;
  photo.alt = thingName;
  photo.loading = "lazy";
  const label = document.createElement("span");
  label.className = "thing-label";
  label.textContent = thingName;
  item.append(photo, label);
  return item;
}

function getThingImage(thingName) {
  const images = thingImagePools[thingName] || beginnerImagePools.apple;
  const offset = (thingsExampleSet + thingsExample.a + thingsExample.b) % images.length;
  return images[offset];
}

function pauseOnly() {
  return new Promise((resolve) => {
    window.setTimeout(resolve, 650);
  });
}

levelOneTab.addEventListener("click", () => showLevel(1));
levelTwoTab.addEventListener("click", () => showLevel(2));
levelThreeTab.addEventListener("click", () => showLevel(3));
levelFourTab.addEventListener("click", () => showLevel(4));
levelFiveTab.addEventListener("click", () => showLevel(5));
gear.addEventListener("click", selectPlaneFromGear);
advancedGear.addEventListener("click", selectAdvancedPlaneFromGear);
primeGear.addEventListener("click", selectPrimePlaneFromGear);
speakButton.addEventListener("click", speakCurrentNumber);
nextButton.addEventListener("click", () => chooseTarget());
previousBatch.addEventListener("click", () => changeMapBatch(-1));
nextBatch.addEventListener("click", () => changeMapBatch(1));
spinLeft.addEventListener("click", () => rotateGear(-1));
spinRight.addEventListener("click", () => rotateGear(1));
shuffleGear.addEventListener("click", mixGear);
alignGearButton.addEventListener("click", alignAllPlanes);
advancedSpinLeft.addEventListener("click", () => rotateAdvancedGear(-1));
advancedSpinRight.addEventListener("click", () => rotateAdvancedGear(1));
advancedShuffleGear.addEventListener("click", mixAdvancedGear);
advancedResetGear.addEventListener("click", resetAdvancedGear);
toggleGearOperation.addEventListener("click", toggleGearOperationPanel);
gearAdditionTab.addEventListener("click", () => setGearOperation("addition"));
gearSubtractionTab.addEventListener("click", () => setGearOperation("subtraction"));
resetGearOperation.addEventListener("click", makeGearOperationExample);
closeGearPopup.addEventListener("click", closeGearOperationPopup);
primeSpinLeft.addEventListener("click", () => rotatePrimeGear(-1));
primeSpinRight.addEventListener("click", () => rotatePrimeGear(1));
primeShuffleGear.addEventListener("click", mixPrimeGear);
primeResetGear.addEventListener("click", resetPrimeGear);
newGearQuestion?.addEventListener("click", makeGearQuestion);
beginnerCountersTab.addEventListener("click", () => setPracticeTab("beginner"));
countersTab.addEventListener("click", () => setPracticeTab("counters"));
countThingsTab.addEventListener("click", () => setPracticeTab("things"));
resetBeginnerExamples.addEventListener("click", resetBeginnerExampleSet);
additionTab.addEventListener("click", () => setCounterOperation("addition"));
subtractionTab.addEventListener("click", () => setCounterOperation("subtraction"));
resetExamples.addEventListener("click", resetCounterExamples);
computeCounters.addEventListener("click", computeCounterExample);
fruitsTab.addEventListener("click", () => setThingsType("fruits"));
toysTab.addEventListener("click", () => setThingsType("toys"));
thingsAdditionTab.addEventListener("click", () => setThingsOperation("addition"));
thingsSubtractionTab.addEventListener("click", () => setThingsOperation("subtraction"));
resetThingsExamples.addEventListener("click", resetThingsExampleSet);
computeThings.addEventListener("click", computeThingsExample);
languageSelect.addEventListener("change", (event) => changeLanguage(event.target.value));

languageSelect.value = currentLanguage;
document.documentElement.lang = currentLanguage;
document.documentElement.dir = languagePacks[currentLanguage].dir;
updateInterpreter("interpreterIntro", {}, "wave");
renderNumberGrid();
renderProgress();
if (developmentUnlockLevelTwo) {
  unlockGear();
}
chooseTarget();
buildGear();
buildAdvancedGear();
buildPrimeGear();
renderBeginnerExamples();
renderCounterExamples();
renderThingsExamples();
