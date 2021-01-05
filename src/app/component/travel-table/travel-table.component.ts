import { Component, OnInit } from '@angular/core';
import { TravelsService } from '@app/core';

@Component({
  selector: 'app-travel-table',
  templateUrl: './travel-table.component.html',
  styleUrls: ['./travel-table.component.css']
})
export class TravelTableComponent implements OnInit {
  displayedColumns: string[];
  dataSource;

  constructor(private travelsService: TravelsService) { }

  ngOnInit(): void {
   this.displayedColumns = ['state', 'startDate', 'endDate', 'note'];
   this.dataSource = this.travelsService.travels$;
  }

}
