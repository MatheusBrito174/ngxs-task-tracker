import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  faCalendarCheck = faCalendarCheck;

  constructor(readonly router: Router) {}

  ngOnInit(): void {}
}
