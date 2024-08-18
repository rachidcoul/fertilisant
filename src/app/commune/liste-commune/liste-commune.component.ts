import { Component, OnInit } from '@angular/core';
import { Commune } from '../../model/commune';
import { CommuneService } from '../commune.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-liste-commune',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  providers: [CommuneService],
  templateUrl: './liste-commune.component.html',
  styleUrl: './liste-commune.component.css'
})
export class ListeCommuneComponent implements OnInit {
  communes: Commune[] = []; // Initialisé à un tableau vide
  
  constructor(private communeService: CommuneService) { }

  ngOnInit(): void {
    this.loadCommune();
  }

  delete(id: number) {
    this.communeService.deleteCommune(id).subscribe((response) => {
      this.loadCommune();
    });
  }

  loadCommune(): void {
    this.communeService.getCommunes().subscribe((response) => {
      this.communes = response;
      console.log(this.communes);
    });
  }


}
