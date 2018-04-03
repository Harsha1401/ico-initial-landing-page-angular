import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-display',
  templateUrl: './content-display.component.html',
  styleUrls: ['./content-display.component.css']
})
export class ContentDisplayComponent implements OnInit {

  @Input()contentTitle :string ='';
  @Input()contentText :string ='';

  constructor() { }

  ngOnInit() {
  }

}
