import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlowerService {
  data:any = 'data from Flower Service'
  constructor() { }
}
