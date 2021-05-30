import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog-add',
  templateUrl: './catalog-add.component.html',
  styleUrls: ['./catalog-add.component.css']
})
export class CatalogAddComponent{

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
  });

  error = false;

  constructor(private router: Router) { }
}
