//destination.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Data, Destination } from '../data';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {

  destinationJson: Destination[] = [];

  selectedDestination?: Destination;
  

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getJsonData().subscribe((res: Data) => {
      console.log(res);
      this.destinationJson = res.destinations;
    })
  }

  onSelect(destination: Destination): void {
    this.selectedDestination = destination;
  }


}
