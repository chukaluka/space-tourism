import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Data, Crew } from '../data';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss']
})
export class CrewComponent implements OnInit {

  crewJson: Crew[] = [];

  selectedCrew?: Crew;

  activeCircle: number = 0; // Set default to 0

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getJsonData().subscribe((res: Data) => {
      console.log(res);
      this.crewJson = res.crew;
    })
  }

  onSelect(crew: Crew): void {
    this.selectedCrew = crew;
      // Select the first crew member by default
      this.selectCircle(0);
  }

  selectCircle(circle: number) {
    this.activeCircle = circle;
    // Adjust index for zero-based array (circle 1 corresponds to index 0)
    this.selectedCrew = this.crewJson[circle - 1];

  }

}
