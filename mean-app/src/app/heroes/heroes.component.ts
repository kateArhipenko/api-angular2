import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Pipe }              from '@angular/core';
import { HeroesService }       from '../heroes.service';
import { Hero }                from '../hero';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css' ]
})

export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero: Hero;
    constructor(private heroesService: HeroesService, private router: Router) { }

    ngOnInit() {
    // Retrieve posts from the API
      this.heroesService.getAllHeroes().subscribe(heroes => {
        this.heroes = heroes;
      });
    }

  // constructor(
  //   private heroService: HeroService,
  //   private router: Router) { }

  // getHeroes(): void {
  //   this.heroService
  //       .getHeroes()
  //       .then(heroes => this.heroes = heroes.sort(function(hero1, hero2){
  //           return hero2.score - hero1.score
  //       }));
  // }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroesService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  // delete(hero: Hero): void {
  //   this.heroService
  //       .delete(hero.id)
  //       .then(() => {
  //         this.heroes = this.heroes.filter(h => h !== hero);
  //         if (this.selectedHero === hero) { this.selectedHero = null; }
  //       });
  // }

  // ngOnInit(): void {
  //   this.getHeroes();
  // }

  onSelect(hero: any): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
