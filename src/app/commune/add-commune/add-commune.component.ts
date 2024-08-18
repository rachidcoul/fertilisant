import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet, Router } from '@angular/router';
import { ProvinceService } from '../../province/province.service';
import { CommuneService } from '../commune.service';
import { Province } from '../../model/province';

@Component({
  selector: 'app-add-commune',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterOutlet
  ],
  providers: [ProvinceService, CommuneService],
  templateUrl: './add-commune.component.html',
  styleUrl: './add-commune.component.css'
})
export class AddCommuneComponent implements OnInit{
  
  communeForm: FormGroup;
  provinces: Province[] = [];

  constructor(
    private fb: FormBuilder,
    private communeService: CommuneService,
    private provinceService: ProvinceService,
    private router: Router
  ) {
    this.communeForm = this.fb.group({
      //id: ['', Validators.required],
      codeDgess: ['', Validators.required],
      codeIgb: ['', Validators.required],
      libelle: ['', Validators.required],
      province: [null, Validators.required]  // Assurez-vous de sélectionner une région
    });
  }

  ngOnInit(): void {
    this.provinceService.getProvinces().subscribe((provinces) => {
      this.provinces = provinces;
    });
  }

  onSubmit() {
    if (this.communeForm.valid) {
      // la console pour voir le code de posteman
      console.log(this.communeForm.value);
      this.communeService.createCommune(this.communeForm.value).subscribe(() => {
        this.router.navigate(['/communes']);
      });
    }
  }

}
