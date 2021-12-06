import { Component, OnInit, Optional, Self } from '@angular/core';
import { FlowerService } from '../Services/flower.service';
import { LeafService } from '../Services/leaf.service';

@Component({
  selector: 'app-self-no-data',
  templateUrl: './self-no-data.component.html',
  styleUrls: ['./self-no-data.component.scss']
})
export class SelfNoDataComponent implements OnInit {

  constructor(@Self() @Optional() public leaf?:LeafService) { }

  ngOnInit(): void {
  }

}
