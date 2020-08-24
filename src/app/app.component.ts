import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {
    var firebaseConfig = {
      apiKey: 'AIzaSyC8kXXzVK8envSqBnifJp-4YpNWY5eGakg',
      authDomain: 'my-library-angular.firebaseapp.com',
      databaseURL: 'https://my-library-angular.firebaseio.com',
      projectId: 'my-library-angular',
      storageBucket: 'my-library-angular.appspot.com',
      messagingSenderId: '738815355200',
      appId: '1:738815355200:web:2b57d022347c031bdef2a5',
      measurementId: 'G-R9H8Z5FHXV',
    };

    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
}
