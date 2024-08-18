import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router  } from '@angular/router';
import { Region } from '../../model/region';
import { RegionService } from '../region.service';

@Component({
  selector: 'app-edit-region',
  standalone: true,
  imports: [ReactiveFormsModule],
  providers: [RegionService],
  templateUrl: './edit-region.component.html',
  styleUrl: './edit-region.component.css'
})
export class EditRegionComponent implements OnInit {
//region: Region = new Region();
editRegionForm: FormGroup;
regionId: number | null = null;

constructor(
  private fb: FormBuilder,
  private regionService: RegionService,
  private route: ActivatedRoute,
  private router: Router 
) {
  this.editRegionForm = this.fb.group({
    id: ['', Validators.required],
    codeDgess: ['', Validators.required],
    codeIgb: ['', Validators.required],
    libelle: ['', Validators.required]
    });
  }

ngOnInit(): void {
  

  let id = this.route.snapshot.paramMap.get('id');
  if (id !== null) {
    this.regionId = +id;
    this.regionService.getRegion(this.regionId).subscribe((region: Region) => {
      this.editRegionForm.patchValue(region);
    });
  }
}

onSubmit(): void {
  
  if (this.editRegionForm.valid && this.regionId !== null) {
    this.regionService.updateRegion(this.regionId, this.editRegionForm.value).subscribe(() => {
      this.router.navigate(['/regions']);
    });
  }
  //alert("hello");
}



}
