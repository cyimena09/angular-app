import { Component } from '@angular/core';
import {MyLibService} from 'emile-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-client-lib';

  constructor(private service:MyLibService) {

    const message = service.getDatas();
    console.log(message);
  }

}
