import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StationService } from '../../../services/station';
import { Station } from '../../../models/model';

@Component({
  selector: 'app-station-form',
  imports: [ReactiveFormsModule],
  templateUrl: './station-form.html',
  styleUrl: '../../forms.css',
})
export class StationFormComponent implements OnInit {

  stationForm!: FormGroup;
  stationId?: number;
  isEdit = false;

  constructor(
    private fb: FormBuilder,
    private stationService: StationService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.stationForm = this.fb.group({
      nom: ['', Validators.required],
      ville: ['', Validators.required],
      adresse: ['', Validators.required]
    });

    this.stationId = this.route.snapshot.params['id'];
    if (this.stationId) {
      this.isEdit = true;
      this.stationService.getStation(this.stationId).subscribe(
        data => this.stationForm.patchValue(data),
        err => console.error(err)
      );
    }
  }

  onSubmit() {
    const station: Station = this.stationForm.value;

    if (this.isEdit && this.stationId) {
      this.stationService.updateStation(this.stationId, station).subscribe(
        () => this.router.navigate(['/stations']),
        err => console.error(err)
      );
    } else {
      this.stationService.addStation(station).subscribe(
        () => this.router.navigate(['/stations']),
        err => console.error(err)
      );
    }
  }
}
