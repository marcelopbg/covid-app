import { Component, OnInit } from '@angular/core';
import { ISummary } from '../entities/ISummary.model';
import { SummaryService } from '../services/summary.service';

@Component({
  selector: 'app-covid-dashboard',
  templateUrl: './covid-dashboard.component.html',
  styleUrls: ['./covid-dashboard.component.scss']
})
export class CovidDashboardComponent implements OnInit {

  summary: ISummary | null = null;
  constructor(private summaryService: SummaryService) {

   }

  ngOnInit(): void {
    this.summaryService.getSummary().subscribe(r => this.summary = r)
  }

}
