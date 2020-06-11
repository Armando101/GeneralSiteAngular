import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  random() {
		let number = Math.floor(Math.random()*255).toString(16);
		return number.length == 1 ? 0+number : number;
	}

  randomColor(event) {
  	const red = this.random();
		const green = this.random();
		const blue = this.random();
		
		event.target.style.backgroundColor = `#${red}${green}${blue}`;

		// return `#${red}${green}${blue}`;
  }

}
