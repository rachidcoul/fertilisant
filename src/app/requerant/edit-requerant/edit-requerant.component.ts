import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommuneService } from '../../commune/commune.service';
import { RequerantService } from '../requerant.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Requerant } from '../../model/requerant';

@Component({
  selector: 'app-edit-requerant',
  standalone: true,
  imports: [ReactiveFormsModule],
  providers: [RequerantService, CommuneService],
  templateUrl: './edit-requerant.component.html',
  styleUrl: './edit-requerant.component.css'
})
export class EditRequerantComponent {
  
  editRequerantForm: FormGroup;
  requerantId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private requerantService: RequerantService,
    private route: ActivatedRoute,
    private router: Router 
  ) {
    this.editRequerantForm = this.fb.group({
      //id: ['', Validators.required],
      nomPrenom: ['', Validators.required],
      dateNaissance: ['', Validators.required],
      cnib: ['', Validators.required],
      contact: ['', Validators.required],
      email: ['', Validators.required]
      });
    }

    ngOnInit(): void {
      let id = this.route.snapshot.paramMap.get('id');
      if (id !== null) {
        this.requerantId = +id;
        this.requerantService.getRequerant(this.requerantId).subscribe((requerant: Requerant) => {
          console.log(requerant);
          this.editRequerantForm.patchValue(requerant);
        });
      }
    }

    onSubmit(): void {
    
      if (this.editRequerantForm.valid && this.requerantId !== null) {
        this.requerantService.updateRequerant(this.requerantId, this.editRequerantForm.value).subscribe(() => {
          this.router.navigate(['/requerants']);
        });
      }
    }  

}
