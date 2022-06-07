import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  @Input('childData') childData:any;
  @Output() pData = new EventEmitter<string>();
  static_data: any;
  constructor() { }

  ngOnInit(): void {
    this.static_data = this.childData;
    setTimeout(() => {
      this.childData = 'test 2'
      this.static_data = this.childData;

      console.log(this.childData);
      this.pData.emit(this.childData);
    }, 6000);
  }

}
