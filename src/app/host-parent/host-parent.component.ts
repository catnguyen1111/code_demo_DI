import { Component, OnInit } from '@angular/core';
import { FlowerService } from '../Services/flower.service';

@Component({
  selector: 'app-host-parent',
  templateUrl: './host-parent.component.html',
  styleUrls: ['./host-parent.component.scss'],
  providers: [{ provide: FlowerService, useValue: { data: 'data from Host-parent' } }],
})
export class HostParentComponent implements OnInit {

  constructor(public flower:FlowerService) { }

  ngOnInit(): void {
  }

}
