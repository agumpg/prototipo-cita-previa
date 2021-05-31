import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
} )
export class ToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openPage( url: string ): void {
    window.open( url, '_blank' );
  }

}
