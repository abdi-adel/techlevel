var express = require('express');
var router = express.Router();

var title = "TechLevel";

var users = [
  {
    lastname: "Leanne",
    firstname: "Graham",
    skills: ["HTML", "CSS"],
    notation: 75,
    gender: "female"
  }, {
    lastname: "Ervin",
    firstname: "Howell",
    skills: ["HTML", "nodeJS", "Express"],
    notation: 30,
    gender: "male"
  }, {
    lastname: "Clementine",
    firstname: "Bauch",
    skills: ["HTML", "CSS"],
    notation: 49,
    gender: "female"
  }, {
    lastname: "Kurtis",
    firstname: "Weissnat",
    skills: ["Javscript", "jQuery", "nodeJS", "Express"],
    notation: 67,
    gender: "male"
  }, {
    lastname: "Chelsey",
    firstname: "Dietrich",
    skills: ["HTML", "CSS", "Javscript", "nodeJS", "Express"],
    notation: 96,
    gender: "female"
  }, {
    lastname: "Dennis",
    firstname: "Schulist",
    skills: ["HTML", "CSS", "Javscript"],
    notation: 54,
    gender: "male"
  }, {
    lastname: "Patricia",
    firstname: "Lebsack",
    skills: ["HTML", "CSS", "Javscript", "jQuery", "nodeJS", "Express"],
    notation: 76,
    gender: "female"
  }, {
    lastname: "Nicholas",
    firstname: "Runolfsdottir",
    skills: ["HTML", "CSS", "Javscript", "jQuery", "nodeJS"],
    notation: 52,
    gender: "male"
  }, {
    lastname: "Glenna",
    firstname: "Reichert",
    skills: ["HTML", "CSS", "nodeJS", "Express"],
    notation: 87,
    gender: "female"
  }, {
    lastname: "Clementina",
    firstname: "DuBuque",
    skills: ["Javscript", "jQuery", "nodeJS", "Express"],
    notation: 32,
    gender: "female"
  }
]

// Route principale qui, lors de l'appel sur l'URL "/", va renvoyer le fichier index.ejs avec en complement les deux variables que nous avons créées précédemment
router.get('/', function (req, res, next) {
  // Syntaxe courte qui permet de faire directement référence à la variable sans avoir à la stocker dans une autre
  res.render('index', { title, users });

  // Syntaxe classique qui stocke le variable titre global créé ci-dessus dans une autre variable qui porte le même nom et qui sera envoyée sur notre page index
  // res.render('index', { title: title, users: users });
});

module.exports = router;
