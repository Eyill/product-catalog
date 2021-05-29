import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CatalogAddComponent } from '../catalog/add/catalog-add.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(CatalogAddComponent,{
      height: 'auto',
      width: '500px',
    });
  }

  ngOnInit(): void {}
}
