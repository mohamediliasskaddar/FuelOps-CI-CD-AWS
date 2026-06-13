import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HistoCarbService } from '../../../services/histo-carb';
import { StationService } from '../../../services/station';
import { CarburantService } from '../../../services/carburant';
import { Station, Carburant, HistoCarb } from '../../../models/model';
import { NgFor, NgIf } from '@angular/common';

  

@Component({
  selector: 'app-histo-form',
  imports: [NgIf, NgFor, ReactiveFormsModule],
  templateUrl: './histo-form.html',
  styleUrl: '../../forms.css',
})
export class HistoCarbFormComponent implements OnInit {

  histoForm!: FormGroup;
  stations: Station[] = [];
  carburants: Carburant[] = [];
  histoId?: number;
  isEdit = false;

  constructor(
    private fb: FormBuilder,
    private histoService: HistoCarbService,
    private stationService: StationService,
    private carburantService: CarburantService,
    public router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.histoForm = this.fb.group({
      stationId: [null, Validators.required],
      carburantId: [null, Validators.required],
      date: ['', Validators.required],
      prix: [0, Validators.required]
    });

    this.stationService.getStations().subscribe(data => this.stations = data);
    this.carburantService.getAll().subscribe(data => this.carburants = data);

    this.histoId = this.route.snapshot.params['id'];
    if (this.histoId) {
      this.isEdit = true;
      this.histoService.getAll().subscribe(data => {
        const histo = data.find(h => h.id === this.histoId);
        if (histo) this.histoForm.patchValue({
          stationId: histo.stationId,
          carburantId: histo.carburantId,
          date: histo.date,
          prix: histo.prix
        });
      });
    }
  }

  onSubmit() {
    const histo: HistoCarb = {
      date: this.histoForm.value.date,
      prix: this.histoForm.value.prix
    } as HistoCarb;

    const stationId = this.histoForm.value.stationId;
    const carburantId = this.histoForm.value.carburantId;

    if (this.isEdit && this.histoId) {
      this.histoService.update(this.histoId, histo).subscribe(
        () => this.router.navigate(['/histo']),
        err => console.error(err)
      );
    } else {
      this.histoService.add(stationId, carburantId, histo).subscribe(
        () => this.router.navigate(['/histo']),
        err => console.error(err)
      );
    }
  }
}
