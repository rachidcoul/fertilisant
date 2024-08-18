import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Region } from '../../model/region';
import { RegionService } from '../region.service';

@Component({
  selector: 'app-liste-region',
  standalone: true,
  providers: [RegionService],
  imports: [HttpClientModule, CommonModule],
  templateUrl: './liste-region.component.html',
  styleUrl: './liste-region.component.css'
})
export class ListeRegionComponent implements OnInit{
  regions:Region[]=[]; //la variable region de type Region initialisz a vide

  constructor(
    private regionService: RegionService,
  ){

  }

  ngOnInit(): void {
    this.loadRegion();
  }

  
  delete(id:number){
    this.regionService.deleteRegion(id).subscribe((response)=>{
      this.loadRegion();
    });
  }


  loadRegion(): void{
    this.regionService.getRegions().subscribe((response)=>{
      this.regions=response;
      console.log(this.regions);
    });
  }

}
