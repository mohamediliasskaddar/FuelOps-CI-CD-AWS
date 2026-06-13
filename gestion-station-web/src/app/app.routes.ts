import { Routes } from '@angular/router';
import { StationListComponent } from './components/stations/station-list/station-list';
import { StationFormComponent } from './components/stations/station-form/station-form';
import { CarburantListComponent } from './components/carburants/carburant-list/carburant-list';
import { CarburantForm } from './components/carburants/carburant-form/carburant-form';
import { HistoCarbListComponent } from './components/hsito-carbs/histo-list/histo-list';
import { HistoCarbFormComponent } from './components/hsito-carbs/histo-form/histo-form';
import { WelcomePage } from './components/welcome-page/welcome-page';

export const routes: Routes = [

    {path: 'welcome', component: WelcomePage},
  // Stations
  { path: 'stations', component: StationListComponent },
  { path: 'stations/add', component: StationFormComponent },
  { path: 'stations/edit/:id', component: StationFormComponent },

  // Carburants
  { path: 'carburants', component: CarburantListComponent },
  { path: 'carburants/add', component: CarburantForm },
  { path: 'carburants/edit/:id', component: CarburantForm },

  // HistoCarb
  { path: 'histo', component: HistoCarbListComponent },
  { path: 'histo/add', component: HistoCarbFormComponent },
  { path: 'histo/edit/:id', component: HistoCarbFormComponent },

  { path: '', redirectTo: '/welcome', pathMatch: 'full' }
];
