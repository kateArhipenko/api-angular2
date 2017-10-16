const express = require('express');
const router = express.Router();

const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';
var HEROES = [
  { 
    id: 1,
    name: 'Example1',
    score: 20
  },
  { 
    id: 11, 
    name: 'Example2',
    score: 11
  },
  { 
    id: 12, 
    name: 'Example3',
    score: 12
  },
  { 
    id: 13, 
    name: 'Example4',
    score: 13 
  },
  { id: 14, 
    name: 'Example5',
    score: 14 
  },
  { 
    id: 15, 
    name: 'Example6',
    score: 16 
  },
  { 
    id: 16, 
    name: 'Example7',
    score: 17
  },
  { 
    id: 17, 
    name: 'Example8',
    score: 18
  }
]
router.get("/", function(req, res) {
  var heroes = HEROES.sort(function(hero1, hero2) {
    return hero2.score - hero1.score
  }).slice(0,4);
  res.json(heroes)
  // res.render('dashboard.ejs', { heroes: heroes });
});

router.get("/dashboard", function(req, res) {
  var heroes = HEROES.sort(function(hero1, hero2) {
    return hero2.score - hero1.score
  }).slice(0,4);
  res.json(heroes)
  //res.render('dashboard.ejs', { heroes: heroes });
});

router.get("/heroes", function(req, res) {
  var heroes = HEROES.sort(function(hero1, hero2) {
    return hero2.score - hero1.score
  })
  res.json(heroes)
  //res.render('heroes.ejs', { heroes: HEROES });
});

router.get("/heroes/:id", function(req, res) {
  var id = req.params.id;
  var hero;
  for (var i = 0; i < HEROES.length; i++) {
    if(Number(id) === HEROES[i].id) {
      hero = HEROES[i];
    }
  }
  res.json(hero)  
  // res.render("hero-detail.ejs", { hero: hero });
});

router.put("/heroes/:id", function(req, res) {
  var id = req.params.id;
  var hero;
  for (var i = 0; i < HEROES.length; i++) {
    if(Number(id) === HEROES[i].id) {
      HEROES[i].name = req.body.name;
      HEROES[i].score = req.body.score;
      hero = HEROES[i];
    }
  }

  res.json(hero);
})


// router.get("/create", function(req, res) {
//   res.render("hero-form.ejs");
// })

router.post("/heroes/create", function(req, res) {
  var name = req.body.name,
      score = Number(req.body.score),
      id = (HEROES[HEROES.length - 1].id + 1);

  hero = HEROES.push({
    id: id,
    name: name,
    score: score
  });
  res.json(HEROES[HEROES.length - 1])
})


module.exports = router;