import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button'

@Component({
  selector: 'app-dynamicbutton',
  templateUrl: './dynamicbutton.component.html',
  styleUrls: ['./dynamicbutton.component.scss'],
  standalone: true,
  imports: [MatButton]
})
export class DynamicbuttonComponent  implements OnInit {
  count = 0;

  constructor() { }

  ngOnInit() {}

  onClick() {
    this.count++;
  }

}
