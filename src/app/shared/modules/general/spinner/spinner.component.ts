import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
})
export class SpinnerComponent implements OnInit {
  @Input() spinnerType: string = 'border';
  @Input() spinnerColor: string | null = null;
  @Input() spinnerSize: string | null = null;

  constructor() {}

  ngOnInit(): void {}
}
