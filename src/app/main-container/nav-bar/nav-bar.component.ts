import {Component, OnInit, HostListener, Inject} from '@angular/core';
import {DOCUMENT} from "@angular/platform-browser";

import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  private languages;
  constructor(              private translateService: TranslateService) { }

  ngOnInit() {
    this.languages = [{value: "en", label: "English", flag: "us"}, {value: "es", label: "Spanish", flag: "es"}];
  }




  select(value) {
    this.translateService.use(value);
  }
}
