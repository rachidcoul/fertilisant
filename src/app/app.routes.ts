import { Routes } from '@angular/router';
import { ListeRegionComponent } from './region/liste-region/liste-region.component';
import { AddRegionComponent } from './region/add-region/add-region.component';
import { EditRegionComponent } from './region/edit-region/edit-region.component';
import { ListeProvinceComponent } from './province/liste-province/liste-province.component';
import { AddProvinceComponent } from './province/add-province/add-province.component';
import { EditProvinceComponent } from './province/edit-province/edit-province.component';
import { ListeCommuneComponent } from './commune/liste-commune/liste-commune.component';
import { AddCommuneComponent } from './commune/add-commune/add-commune.component';
import { EditCommuneComponent } from './commune/edit-commune/edit-commune.component';
import { ListeRequerantComponent } from './requerant/liste-requerant/liste-requerant.component';
import { AddRequerantComponent } from './requerant/add-requerant/add-requerant.component';
import { EditRequerantComponent } from './requerant/edit-requerant/edit-requerant.component';
export const routes: Routes = [
    {path:'regions', component: ListeRegionComponent},
    {path:'edit-region/:id', component: EditRegionComponent},
    {path:'add-region', component: AddRegionComponent},
    {path:'provinces', component: ListeProvinceComponent},
    {path:'edit-province/:id', component: EditProvinceComponent},
    {path:'add-province', component:AddProvinceComponent},
    {path:'communes', component: ListeCommuneComponent},
    {path:'add-commune', component: AddCommuneComponent},
    {path:'edit-commune/:id', component: EditCommuneComponent},
    {path:'requerants', component: ListeRequerantComponent},
    {path:'add-requerant', component: AddRequerantComponent},
    {path:'edit-requerant/:id', component: EditRequerantComponent}
];
