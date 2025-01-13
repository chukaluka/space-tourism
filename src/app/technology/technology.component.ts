import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Data, Technology } from '../data';


@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {

  technologyJson: Technology[] = [];

  selectedTechnology?: Technology;

  activeCircle: number = 0; // Set default to 0

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getJsonData().subscribe((res: Data) => {
      console.log(res);
      this.technologyJson = res.technology;
    })
  }

  onSelect(tech: Technology): void {
    this.selectedTechnology = tech;
      // Select the first crew member by default
      this.selectCircle(0);
  }

  selectCircle(circle: number) {
    this.activeCircle = circle;
    // Adjust index for zero-based array (circle 1 corresponds to index 0)
    this.selectedTechnology = this.technologyJson[circle - 1];

  }

}
