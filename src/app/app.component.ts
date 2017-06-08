import { Component, OnInit } from '@angular/core';
import { Tile } from "./tile/tile.component";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    this.tiles = [
      new Tile(1, 0, 0),
      new Tile(2, 2, 0),
      new Tile(0, 2, 0),
      new Tile(0, 4, 0),
      new Tile(2, 4, 0),
      new Tile(1, 6, 0),
      new Tile(4, 3, 0),
      new Tile(1, 3, 1)
    ]

    this.tilesToDraw = [];
    this.drawTile(0);

  }


  private drawTile(index){
    if(index == this.tiles.length) return; //done
     this.tilesToDraw.push(this.tiles[index]);
     setTimeout(() => {  this.drawTile(index + 1)  }, 100);
  }

  title = 'app works!';

  public tiles: Tile[]
  public tilesToDraw: Tile[];


}
