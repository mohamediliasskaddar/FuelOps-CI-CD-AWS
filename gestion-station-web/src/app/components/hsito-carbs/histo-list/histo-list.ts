
import { Component, OnInit } from '@angular/core';
import { HistoCarbService } from '../../../services/histo-carb';
import { HistoCarb } from '../../../models/model';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-histo-list',
  imports: [NgFor, RouterLink],
  templateUrl: './histo-list.html',
  styleUrl: '../../lists.css',
})
export class HistoCarbListComponent implements OnInit {

  histos: HistoCarb[] = [];
  filteredHistos: HistoCarb[] = [];

  constructor(private histoService: HistoCarbService) { }

  ngOnInit(): void {
    this.loadHistos();
  }

  loadHistos() {
    this.histoService.getAllFull().subscribe(
      data => this.histos = data,
      err => console.error(err)
    );
  }

  deleteHisto(id: number) {
    if(confirm("Voulez-vous supprimer ce prix ?")) {
      this.histoService.delete(id).subscribe(
        () => this.loadHistos(),
        err => console.error(err)
      );
    }
  }
  filterCity(city: string) {
  this.filteredHistos = this.histoService.filterByCity(this.histos, city);
}

filterStation(station: string) {
  this.filteredHistos = this.histoService.filterByStation(this.histos, station);
}
}

