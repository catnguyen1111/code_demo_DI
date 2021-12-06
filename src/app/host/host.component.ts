import { Component, Host, OnInit, Optional } from '@angular/core';
import { FlowerService } from '../Services/flower.service';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.scss'],
  providers: [{ provide: FlowerService, useValue: { data: 'data from Host' } }],
})
export class HostComponent implements OnInit {

  constructor(@Host() @Optional() public flower:FlowerService) { }

  ngOnInit(): void {
  }

}
