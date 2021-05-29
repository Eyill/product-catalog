import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-catalog-add',
  templateUrl: './catalog-add.component.html',
  styleUrls: ['./catalog-add.component.css']
})
export class CatalogAddComponent implements OnInit {

  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    href: new FormControl(''),
    catalogType: new FormControl(''),
    description: new FormControl(''),
    lastUpdate: new FormControl(''),
    lifecycleStatus: new FormControl(''),
    name: new FormControl(''),
    version: new FormControl(''),
    validFor: new FormControl(''),
    category: new FormControl(''),
    relatedParty: new FormControl(''),
    
    
    // id: new FormControl(''),
    // title: new FormControl('', Validators.required),
    // description: new FormControl('KEKW'),
    // img: new FormControl(''),
    // star: new FormControl(false)
  });

  constructor() { }

  ngOnInit(): void {}
}
