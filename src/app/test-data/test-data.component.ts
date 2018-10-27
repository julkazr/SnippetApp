import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TestDataService } from '../services/test-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DataTest } from '../models/snippet.model';

@Component({
  selector: 'app-test-data',
  templateUrl: './test-data.component.html',
  styleUrls: ['./test-data.component.css']
})
export class TestDataComponent implements OnInit {
  data: DataTest;
  @ViewChild('dataForm') formDeclaration: NgForm;

  constructor(private _dataService: TestDataService,
              private _route: ActivatedRoute,
              private _router: Router) { }

  ngOnInit() {
  }

  createSnippet() {
    const newSnippet = this.formDeclaration.form.value;
    this._dataService.createSnippet(newSnippet);
    this._router.navigate(['my-snippets']);
  }

  resetForm() {
    this.formDeclaration.reset();
  }

  isDataPrivate(p: boolean): void {
      this.data.isPrivate = p;
      console.log(this.data.isPrivate);
  }


}
