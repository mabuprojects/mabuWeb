import {Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-one-page',
  templateUrl: './one-page.component.html',
  styleUrls: ['./one-page.component.css']
})
export class OnePageComponent implements OnInit {


  @Input() vsize:string = '100';
  constructor() { }

  ngOnInit() {
  }

}
