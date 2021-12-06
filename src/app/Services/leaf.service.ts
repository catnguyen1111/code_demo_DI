import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeafService {
  data:any = 'data from Leaf Service'
  constructor() { }
}
