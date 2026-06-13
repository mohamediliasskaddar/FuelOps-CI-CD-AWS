// import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarburantService } from '../../../services/carburant';
import { Carburant } from '../../../models/model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-carburant-form',
  imports: [ReactiveFormsModule],
  templateUrl: './carburant-form.html',
  styleUrl: '../../forms.css',
})
export class CarburantForm {
 carburantForm!: FormGroup;
  id?: number;
  isEditMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private carburantService: CarburantService
  ) {}

  ngOnInit(): void {
    this.carburantForm = this.fb.group({
      nom: ['', Validators.required],
      description: ['']
    });

    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.isEditMode = true;
      this.carburantService.get(this.id).subscribe(
        data => this.carburantForm.patchValue(data),
        err => console.error(err)
      );
    }
  }

  save(): void {
    const carburant: Carburant = this.carburantForm.value;

    if (this.isEditMode && this.id) {
      this.carburantService.update(this.id, carburant).subscribe(
        () => this.router.navigate(['/carburants']),
        err => console.error(err)
      );
    } else {
      this.carburantService.create(carburant).subscribe(
        () => this.router.navigate(['/carburants']),
        err => console.error(err)
      );
    }
  }
}