import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() format: string | null = null;
  @Input() size: string | null = null;
  @Input() disabled: boolean = false;
  @Input() rounded: boolean = false;

  @Output() click = new EventEmitter<Event>();

  constructor() {}

  ngOnInit(): void {}

  onClick(event: Event) {
    event.stopPropagation();

    this.click.emit(event);
  }
}
