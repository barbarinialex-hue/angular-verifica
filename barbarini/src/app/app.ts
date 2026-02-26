import { Component, signal } from '@angular/core';
// RouterOutlet isn't used in App template, remove the import or keep if routing will be added later
// import { RouterOutlet } from '@angular/router';
import { Second } from './second/second';
import { Third } from './third/third';
import { Fourth } from './fourth/fourth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // RouterOutlet, // add routing modules when needed
    Second,
    Third,
    Fourth,
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('barbarini');
  public tuo_nome = 'app';
}
