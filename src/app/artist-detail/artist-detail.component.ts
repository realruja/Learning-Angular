import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html'
})
export class ArtistDetailComponent implements OnInit {

  @Input() artist: any;

  constructor() { }

  ngOnInit(): void {
  }

}
