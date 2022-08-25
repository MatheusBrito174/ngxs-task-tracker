import { LoremIpsumService } from './../shared/services/lorem-ipsum.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  paragraphs: string[] = [];

  constructor(private readonly _loremService: LoremIpsumService) {}

  ngOnInit(): void {
    for (let i = 0; i <= 4; i++) {
      this.paragraphs.push(
        this._loremService.getInstance().generateParagraphs(1)
      );
    }
  }
}
