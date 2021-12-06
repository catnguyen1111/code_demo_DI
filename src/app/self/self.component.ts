import { Component, OnInit, Optional, Self } from '@angular/core';
import { FlowerService } from '../Services/flower.service';

@Component({
  selector: 'app-self',
  templateUrl: './self.component.html',
  styleUrls: ['./self.component.scss'],
  providers: [{ provide: FlowerService, useValue: { data: 'data from Self ' } }]
})
export class SelfComponent implements OnInit {

  constructor(@Self() @Optional() public flower:FlowerService) { }

  ngOnInit(): void {
  }

}
