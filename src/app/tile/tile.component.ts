import { Component, OnInit, Input, trigger, transition, style, animate } from '@angular/core';

export class Tile{
  x: number;
  y: number;
  z: number;

  constructor(x, y, z){
    this.x = x;
    this.y = y;
    this.z = z;
  }

  getStyle(): any{
    return {
      'left': (this.x * 18) + 'px',
      'top' : (this.y * 28 - (this.z * 2)) + 'px',
      'z-index': (this.z * 100) - this.x + this.y
    }
  }
}

@Component({
  selector: 'tile',
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateY(-700%)', opacity: 0.2}),
          animate('200ms', style({transform: 'translateY(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateY(0)', opacity: 1}),
          animate('200ms', style({transform: 'translateY(-100%)', opacity: 0}))
        ])
      ]
    )
  ],
  template: `
    <div class="tile" [@enterAnimation] [ngStyle]="tile.getStyle()"></div>
  `,
  styles: [`
    .tile{
      background-image: url("/assets/img/tile.png");
      background-size: cover;
      position:absolute;
      width:40px; height:60px;
    }
  `]
})
export class TileComponent implements OnInit {

  @Input()
  public tile: Tile;

  constructor() { }

  ngOnInit() {
  }

}
