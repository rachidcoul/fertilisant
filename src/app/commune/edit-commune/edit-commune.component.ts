import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProvinceService } from '../../province/province.service';
import { CommuneService } from '../commune.service';
import { ActivatedRoute, Router} from '@angular/router';

import { Commune } from '../../model/commune';

@Component({
  selector: 'app-edit-commune',
  standalone: true,
  imports: [ReactiveFormsModule],
  providers: [ProvinceService, CommuneService],
  templateUrl: './edit-commune.component.html',
  styleUrl: './edit-commune.component.css'
})
export class EditCommuneComponent {
  
    editCommuneForm: FormGroup;
    communeId: number | null = null;
  
    constructor(
      private fb: FormBuilder,
      private communeService: CommuneService,
      private route: ActivatedRoute,
      private router: Router 
    ) {
      this.editCommuneForm = this.fb.group({
        id: ['', Validators.required],
        codeDgess: ['', Validators.required],
        codeIgb: ['', Validators.required],
        libelle: ['', Validators.required]
        });
      }
  
      ngOnInit(): void {
        let id = this.route.snapshot.paramMap.get('id');
        if (id !== null) {
          this.communeId = +id;
          this.communeService.getCommune(this.communeId).subscribe((commune: Commune) => {
            console.log(commune);
            this.editCommuneForm.patchValue(commune);
          });
        }
      }
  
      onSubmit(): void {
      
        if (this.editCommuneForm.valid && this.communeId !== null) {
          this.communeService.updateCommune(this.communeId, this.editCommuneForm.value).subscribe(() => {
            this.router.navigate(['/communes']);
          });
        }
      }  
  

}
