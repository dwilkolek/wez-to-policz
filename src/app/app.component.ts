import { Component } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    menu = [
      {link : "/", name: "O nas"},
      {link : "/beton", name: "Beton"}
    ]

    constructor(private route: ActivatedRoute, private location: Location) {}

    isActive(item:any) {
      var url = this.location.path();
      if (url.length == 0) {
        url += "/";
      }
      return url == item.link;
    }

}
