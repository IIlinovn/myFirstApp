import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  desc = '1111111';

  // Комментарий
  /* Комментарий */
  products = [
    {
      title: 'Продукт 1',
      desc: 'Описание 1',
    },
    {
      title: 'Продукт 2',
      desc: 'Описание 2',
    },
  ]
}
