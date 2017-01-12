import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  title = 'Adrian Ramirez';

  constructor() {}

  ngOnInit() {}

  pageUp():void{

    window.scrollTo(0, 0);
  }

}
