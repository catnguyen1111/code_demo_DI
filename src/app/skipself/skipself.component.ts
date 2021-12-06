import { Component, OnInit, Optional, SkipSelf } from '@angular/core';
import { FlowerService } from '../Services/flower.service';
import { LeafService } from '../Services/leaf.service';

@Component({
  selector: 'app-skipself',
  templateUrl: './skipself.component.html',
  styleUrls: ['./skipself.component.scss'],
  providers: [{ provide: LeafService, useValue: { data: 'data from SkipSelf ' } }],
})
export class SkipselfComponent implements OnInit {

  constructor(@SkipSelf()  public leaf:LeafService ) { }

  ngOnInit(): void {
  }

}
