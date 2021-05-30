import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { CatalogAddComponent } from '../catalog/add/catalog-add.component';
import { Catalog } from '../../shared/models/catalog.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {


  //private service: FbBaseService<Catalog>
  constructor(public dialog: MatDialog, private service: FbBaseService<Catalog>) {}

  ngOnInit(): void {}

  openDialog() {
    const dialogRef = this.dialog.open(CatalogAddComponent,{
      height: 'auto',
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result: Catalog) => {
      console.log(result);
      if(result){
        this.service.add('catalog',result);
      }
    },err => { 
      console.log(err)
    });
  } 
}