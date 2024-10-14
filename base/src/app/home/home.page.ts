import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { AvatarComponent } from '../user/avatar/avatar.component';
import { DynamicbuttonComponent } from '../utils/dynamicbutton/dynamicbutton.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, AvatarComponent, DynamicbuttonComponent],
})
export class HomePage {
  
  constructor() {}
}
