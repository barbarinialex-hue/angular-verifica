import { Component } from '@angular/core';
import { Third } from '../third/third';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [Third],
  templateUrl: './second.html',
  styleUrl: './second.css',
})
export class Second {
  public tuo_nome = 'secondo';

}
