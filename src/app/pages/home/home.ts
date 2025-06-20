import { Component } from '@angular/core';
import { BigCard } from '../../components/big-card/big-card';
import { MenuBar } from '../../components/menu-bar/menu-bar';
import { MenuTitle } from '../../components/menu-title/menu-title';
import { SmallCard } from '../../components/small-card/small-card';

@Component({
  selector: 'app-home',
  imports: [
    BigCard,
    MenuBar,
    MenuTitle,
    SmallCard
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
