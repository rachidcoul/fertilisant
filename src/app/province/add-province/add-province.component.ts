import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet, Router } from '@angular/router';
import { RegionService } from '../../region/region.service';
import { ProvinceService } from '../province.service';
import { Region } from '../../model/region';
import { Province } from '../../model/province';

@Component({
  selector: 'app-add-province',
  standalone: true,
  providers:[RegionService, ProvinceService],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterOutlet,
  ],
  templateUrl: './add-province.component.html',
  styleUrl: './add-province.component.css'
})
export class AddProvinceComponent implements OnInit {

  //region: Region = new Region();
  province: Province = new Province();
  regions: Region[] = [];

  constructor(
    private provinceService: ProvinceService,
    private regionService: RegionService, 
    private router: Router) { }

  ngOnInit(): void {
    this.regionService.getRegions().subscribe((regions) => {
           this.regions = regions;
         });
  }
  
  saveProvince(): void {
    this.provinceService.createProvince(this.province).subscribe(() => {
      this.router.navigate(['/regions']);
    });
  }

  // provinceForm: FormGroup;
  // regions: Region[] = [];

  // constructor(
  //   private fb: FormBuilder,
  //   private provinceService: ProvinceService,
  //   private regionService: RegionService,
  //   private router: Router
  // ) {
  //   this.provinceForm = this.fb.group({
  //     //id: ['', Validators.required],
  //     codeDgess: ['', Validators.required],
  //     codeIgb: ['', Validators.required],
  //     libelle: ['', Validators.required],
  //     region: [null, Validators.required]  // Assurez-vous de sélectionner une région
  //   });
  // }

  // ngOnInit(): void {
  //   this.regionService.getRegions().subscribe((regions) => {
  //     this.regions = regions;
  //   });
  // }

  // onSubmit() {
  //   if (this.provinceForm.valid) {
  //     // la console pour voir le code de posteman
  //     console.log(this.provinceForm.value);
  //     this.provinceService.createProvince(this.provinceForm.value).subscribe(() => {
  //       this.router.navigate(['/provinces']);
  //     });
  //   }
  // }

}
