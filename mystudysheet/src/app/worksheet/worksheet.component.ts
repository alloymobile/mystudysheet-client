import { DataService } from './../service/data.service';
import { Topic } from './../model/topic';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-worksheet',
  templateUrl: './worksheet.component.html',
  styleUrls: ['./worksheet.component.css'],
})
export class WorksheetComponent implements OnInit {
  topic: Topic;
  constructor(private dataService: DataService) {
    this.topic = dataService.topic;
  }

  ngOnInit(): void {}
}
