import { Component, OnInit } from '@angular/core';
import { RegionService } from '../region.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Region } from '../../model/region';

@Component({
  selector: 'app-add-region',
  standalone: true,
  providers: [RegionService],
  imports: [
    HttpClientModule, 
    CommonModule, 
    FormsModule],
  templateUrl: './add-region.component.html',
  styleUrl: './add-region.component.css'
})
export class AddRegionComponent implements OnInit{
  region: Region = new Region();

  constructor(
    private regionService: RegionService, 
    private router: Router) { }

  ngOnInit(): void {
  }
  saveRegion(): void {
    this.regionService.createRegion(this.region).subscribe(() => {
      this.router.navigate(['/regions']);
    });
  }


}
