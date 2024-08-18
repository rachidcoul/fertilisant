import { Component, OnInit } from '@angular/core';
import { Province } from '../../model/province';
import { ProvinceService } from '../province.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-liste-province',
  standalone: true,
  templateUrl: './liste-province.component.html',
  styleUrl: './liste-province.component.css',
  providers: [ProvinceService],
  imports: [HttpClientModule, CommonModule]
})
export class ListeProvinceComponent implements OnInit {
  provinces: Province[] = []; // Initialisé à un tableau vide

  constructor(private provinceService: ProvinceService) {}

  ngOnInit(): void {
    this.loadProvince();
  }

  delete(id:number){
    this.provinceService.deleteProvince(id).subscribe((response)=>{
      this.loadProvince();
    });
  }

  loadProvince(): void {
    this.provinceService.getProvinces().subscribe((response) => {
      this.provinces = response;
      console.log(this.provinces);
    });
  }


}
