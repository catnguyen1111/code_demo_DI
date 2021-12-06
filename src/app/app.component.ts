import { Component } from '@angular/core';
import { FlowerService } from './Services/flower.service';
import { LeafService } from './Services/leaf.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'appDI';
  constructor(public flower:FlowerService, public leaf:LeafService){}
}
