import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageServie: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageServie.add('Hero Serice: Fetched All Heroes...');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.

    const hero = HEROES.find(h => h.id === id)!;
    this.messageServie.add(`Hero Service: Fetched hero id:${hero.id}`);
    return of(hero);
  }
}
