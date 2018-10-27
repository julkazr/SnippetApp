import { Component, OnInit, ViewChild } from '@angular/core';
import {Location} from '@angular/common';
import { TestDataService } from '../services/test-data.service';
import {Router, ActivatedRoute} from '@angular/router';
import { DataTest } from '../models/snippet.model';
import { NgForm } from '../../../node_modules/@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-test-data-edit',
  templateUrl: './test-data-edit.component.html',
  styleUrls: ['./test-data-edit.component.css']
})
export class TestDataEditComponent implements OnInit {
  @ViewChild('dataForm') dataForm: NgForm;
  data: DataTest;
  eventSub: Subscription;
  uid: string;

  constructor(private _dataService: TestDataService,
              private _router: Router,
              private _location: Location,
              private _route: ActivatedRoute) { }

  ngOnInit() {
    this.uid = this._route.snapshot.paramMap.get('id');
        this._dataService.getSnippet(this.uid).subscribe((data: DataTest) => {
            data.uid = this.uid;
            this.data = data;
        });

  }

  backClicked() {
    this._location.back();
   }

   isDataPrivate(p: boolean): void {
    this.data.isPrivate = p;

    console.log(this.data.isPrivate);
  }

  onSubmit() {
    console.log(this.data);
    this.data.date = new Date().toLocaleString();
    this._dataService.updateSnippet(this.data);

    this._router.navigate(['/my-snippets']);
  }
}

