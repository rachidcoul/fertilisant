import { Component, OnInit } from '@angular/core';
import { RequerantService } from '../requerant.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet, Router } from '@angular/router';
import { CommuneService } from '../../commune/commune.service';
import { Commune } from '../../model/commune';
import { DemandeAgrementService } from '../../demande-agrement/demande-agrement.service';
import { DemandeAgrement } from '../../model/demande-agrement';
import { Requerant } from '../../model/requerant';

@Component({
  selector: 'app-add-requerant',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterOutlet
    
  ],
  providers: [CommuneService, RequerantService, DemandeAgrementService],
  templateUrl: './add-requerant.component.html',
  styleUrl: './add-requerant.component.css'
})
export class AddRequerantComponent {
  [x: string]: any;
  requerant: Requerant = new Requerant();
  demandeAgrement: DemandeAgrement = new DemandeAgrement();

  // requerantForm: FormGroup;
  // demandeForm: FormGroup;
   communes: Commune[] = [];
  // demandeAgrements: DemandeAgrement[] = [];

  // constructor(
  //   private fb: FormBuilder,
  //   private requerantService: RequerantService,
  //   private communeService: CommuneService,
  //   private demandeAgrementservice: DemandeAgrementService,
  //   private router: Router
  // ) {
  //   this.requerantForm = this.fb.group({
  //     //id: ['', Validators.required],
  //     commune: ['', Validators.required],
  //     nomPrenom: ['', Validators.required],
  //     dateNaissance: ['', Validators.required],
  //     cnib: ['', Validators.required],
  //     numRccm: ['', Validators.required],
  //     numIfu: ['', Validators.required],
  //     contact: ['', Validators.required],
  //     email: ['', Validators.required]  // Assurez-vous de sélectionner une région
  //   });

 

 
  constructor(
    private requerantService: RequerantService,
     private communeService: CommuneService,
     private demandeAgrementservice: DemandeAgrementService,
     private router: Router
    ) { }

  

  ngOnInit(): void {
    this.communeService.getCommunes().subscribe((communes) => {
           this.communes = communes;
         });
  }
  
  
  saveRequerant(): void {
    this.requerantService.createRequerant(this.requerant).subscribe();
  }
  saveDemandeAgrement(): void {
    this.demandeAgrementservice.createDemandeAgrement(this.demandeAgrement).subscribe(() => {
      this.router.navigate(['/communes']);
    });
  }

  onSubmit(): void {
    this.saveRequerant()
    // Save Requerant first
    // this.requerantService.createRequerant(this.requerant).subscribe((requerant) => {
    //   // Assign the saved requerant to the demandeAgrement
    //   this.demandeAgrement.requerant = requerant;

      // Then save DemandeAgrement
    //   this.demandeAgrementService.createDemandeAgrement(this.demandeAgrement).subscribe(() => {
    //     this.router.navigate(['/communes']);
    //   });
    // });
    this.saveDemandeAgrement();
  }

 
}
