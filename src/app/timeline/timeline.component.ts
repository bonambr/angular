import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  constructor(private http: HttpClient) { }
  timelineItems: any[];
  startingYear: number;

  ngOnInit() {
    this.http.get<any[]>('http://localhost:9191/timeline/history').subscribe(data => {
      this.timelineItems = data;
      this.startingYear = data[0].season;
      this.timelineItems.forEach((item) => {
        item.text = `${item.driver} won ${item.wins} races (${item.points} points) with ${item.poles} poles (${item.podiums} podiums) races in a ${item.constructorChassis}`;
      });
    });
  }
}
