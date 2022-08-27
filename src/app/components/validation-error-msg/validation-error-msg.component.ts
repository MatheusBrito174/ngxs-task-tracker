import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-validation-error-msg',
  templateUrl: './validation-error-msg.component.html',
  styleUrls: ['./validation-error-msg.component.css'],
})
export class ValidationErrorMsgComponent implements OnInit {
  @Input() message: string = '';

  constructor() {}

  ngOnInit(): void {}
}
