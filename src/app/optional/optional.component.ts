import { Component, OnInit, Optional } from '@angular/core';
import { FlowerService } from '../Services/flower.service';
import { OptionalService } from '../Services/optional.service';

@Component({
  selector: 'app-optional',
  templateUrl: './optional.component.html',
  styleUrls: ['./optional.component.scss'],
  providers: [{ provide: FlowerService, useValue: { data: 'data from Self ' } }]
})
export class OptionalComponent implements OnInit {

  constructor(@Optional() public optional:FlowerService) { }

  ngOnInit(): void {
  }

}
