import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor(readonly router: Router, private readonly _location: Location) {}

  ngOnInit(): void {}

  goBack() {
    this._location.back();
  }
}
