import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Catalog } from 'src/app/shared/models/catalog.model';

@Component({
  selector: 'app-catalog-add',
  templateUrl: './catalog-add.component.html',
  styleUrls: ['./catalog-add.component.css'],
})
export class CatalogAddComponent implements OnInit {
  form: FormGroup;
  error = false;

  constructor(
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (this.data) {
      this.form = new FormGroup({
        id: new FormControl(this.data.element.id),
        href: new FormControl(this.data.element.href),
        catalogType: new FormControl(this.data.element.catalogType),
        description: new FormControl(this.data.element.description),
        lastUpdate: new FormControl(this.data.element.lastUpdate),
        lifecycleStatus: new FormControl(this.data.element.lifecycleStatus),
        name: new FormControl(this.data.element.name),
        version: new FormControl(this.data.element.version),
        validFor: new FormControl(this.data.element.validFor),
        category: new FormControl(this.data.element.category),
        relatedParty: new FormControl(this.data.element.relatedParty),
      });
    } else {
      this.form = new FormGroup({
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
      });
    }
  }

  ngOnInit() {}
}
