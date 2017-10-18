import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Hero } from './hero'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class HeroesService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  // Get all posts from the API
  getAllHeroes() {
    return this.http.get('/api/heroes')
      .map(res => res.json());
  }

  getDashboardHeroes() {
    return this.http.get('/api/dashboard')
      .map(res => res.json());
  }

  // getHero(id: number) {
  //   const url = `/api/heroes/${id}`;
  //   return this.http.get(url).(res => res.json().data)
  // }
  create(name: string): Promise<Hero> {
    const url = `/api/heroes/create`;
    return this.http
      .post(url, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Hero)
  }

  getHero(id: number): Promise<Hero> {
    const url = `/api/heroes/${id}`;
    console.log(url)
    return this.http.get(url)
      .toPromise()
      .then(res => res.json() as Hero)
  }

  update(hero: Hero): Promise<Hero> {
    const url = `api/heroes/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
  }

}
