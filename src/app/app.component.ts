import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>{{title}}</h1>
  <h2> My favorite hero is :{{myHero}}</h2>
  <p>Heroes:</p>
  <ul>
  aaa
    <li *ngFor="let hero of heros">
      {{ hero }}
    </li>
  </ul>
  `        
})
export class AppComponent {
    title = 'Tour of Heroes';
    heros = ['Windstorm','Bombasto','Magneta','Tornado'];
    myHero = this.heros[0];
}
