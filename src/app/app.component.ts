import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
	loadedFeature = 'recipes';

	ngOnInit() {
		firebase.initializeApp({
			apiKey: "AIzaSyBMG74EbROhjBIXeF9tBS3TTH5ItRS11sQ",
    		authDomain: "maciejbak-recipe-book.firebaseapp.com"
		});
	}

	onNavigate(feature: string) {
		this.loadedFeature = feature;
	}
}
