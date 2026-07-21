import { UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
//import { RouterOutlet } from '@angular/router';
//import { RoutlerOutler, RouterLink } from './componets/produto/produto';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, UpperCasePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('e-commerce');
  nomeLoja = 'Mercado Alves ';
}
