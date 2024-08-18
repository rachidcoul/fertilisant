import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegionService } from '../../region/region.service';
import { ProvinceService } from '../province.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Province } from '../../model/province';

@Component({
  selector: 'app-edit-province',
  standalone: true,
  imports: [ReactiveFormsModule],
  providers: [RegionService, ProvinceService],
  templateUrl: './edit-province.component.html',
  styleUrl: './edit-province.component.css'
})
export class EditProvinceComponent {

  editProvinceForm: FormGroup;
  provinceId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private provinceService: ProvinceService,
    private route: ActivatedRoute,
    private router: Router 
  ) {
    this.editProvinceForm = this.fb.group({
      id: ['', Validators.required],
      codeDgess: ['', Validators.required],
      codeIgb: ['', Validators.required],
      libelle: ['', Validators.required]
      });
    }

    ngOnInit(): void {
      let id = this.route.snapshot.paramMap.get('id');
      if (id !== null) {
        this.provinceId = +id;
        this.provinceService.getProvince(this.provinceId).subscribe((province: Province) => {
          console.log(province);
          this.editProvinceForm.patchValue(province);
        });
      }
    }

    onSubmit(): void {
    
      if (this.editProvinceForm.valid && this.provinceId !== null) {
        this.provinceService.updateProvince(this.provinceId, this.editProvinceForm.value).subscribe(() => {
          this.router.navigate(['/provinces']);
        });
      }
    }

}
