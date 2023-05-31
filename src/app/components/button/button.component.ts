import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  //  typescript 2.7.2 included a strict class checking where all properties should be declared in constructor. So to work around that, just add a bang sign (!) like: name!:string;

  @Input() text!: string; // That's where the "!" comes in
  @Input() color!: string; // That's where the "!" comes in
  @Output() btnClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.btnClick.emit();
  }
}
