import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { TestDataService } from '../services/test-data.service';
import {ActivatedRoute} from '@angular/router';
import { DataTest } from '../models/snippet.model';

@Component({
  selector: 'app-test-data-details',
  templateUrl: './test-data-details.component.html',
  styleUrls: ['./test-data-details.component.css']
})
export class TestDataDetailsComponent implements OnInit {
  data: DataTest;
  uid: string;
  list: DataTest;

  constructor(private _location: Location,
              private _route: ActivatedRoute,
              private _dataService: TestDataService
) { }

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


}
