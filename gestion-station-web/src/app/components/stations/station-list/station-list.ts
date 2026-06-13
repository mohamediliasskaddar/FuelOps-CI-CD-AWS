import { Component, OnInit } from '@angular/core';
import { StationService } from '../../../services/station';
import { Station } from '../../../models/model';
import { RouterLink } from '@angular/router';
import { CommonModule, NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-station-list',
  imports: [NgFor, RouterLink, NgIf, CommonModule],
  templateUrl: './station-list.html',
  styleUrl: '../../lists.css',
})
export class StationListComponent implements OnInit {

  stations: Station[] = [];

  constructor(private stationService: StationService) { }

  ngOnInit(): void {
    this.loadStations();
  }

  loadStations() {
    this.stationService.getStations().subscribe(
      data => this.stations = data,
      err => console.error(err)
    );
  }

  deleteStation(id: number) {
    if(confirm("Voulez-vous vraiment supprimer cette station ?")) {
      this.stationService.deleteStation(id).subscribe(
        () => this.loadStations(),
        err => console.error(err)
      );
    }
  }
}