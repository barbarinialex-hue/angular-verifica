import { Component } from '@angular/core';
import { Fourth } from '../fourth/fourth';

@Component({
  selector: 'app-third',
  standalone: true,
  imports: [Fourth],
  templateUrl: './third.html',
  styleUrl: './third.css',
})
export class Third {
  public tuo_nome = 'terzo';

}
