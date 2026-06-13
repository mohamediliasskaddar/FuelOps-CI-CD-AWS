import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {CarburantService} from '../../../services/carburant';
import {Carburant} from '../../../models/model';
import { NgFor, NgIf} from '@angular/common';

@Component({
  selector: 'app-carburant-list',
  imports: [NgFor,NgIf, RouterLink],
  templateUrl: './carburant-list.html',
  styleUrl: '../../lists.css',
})
export class CarburantListComponent implements OnInit {
  carburants: Carburant[] = [];

  constructor(
    private carburantService: CarburantService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCarburants();
  }

  loadCarburants(): void {
    this.carburantService.getAll().subscribe(
      data => this.carburants = data,
      err => console.error(err)
    );
  }

  deleteCarburant(id: number): void {
    if(confirm('Voulez-vous vraiment supprimer ce carburant ?')) {
      this.carburantService.delete(id).subscribe(
        () => this.loadCarburants(),
        err => console.error(err)
      );
    }
  }

  editCarburant(id: number): void {
    this.router.navigate(['/carburants/edit', id]);
  }
}
