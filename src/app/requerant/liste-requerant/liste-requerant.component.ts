import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Requerant } from '../../model/requerant';
import { RequerantService } from '../requerant.service';

@Component({
  selector: 'app-liste-requerant',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  providers: [RequerantService],
  templateUrl: './liste-requerant.component.html',
  styleUrl: './liste-requerant.component.css'
})
export class ListeRequerantComponent implements OnInit {
  requerants: Requerant[] = [];

  constructor(private requerantService: RequerantService) { }

  ngOnInit(): void {
    this.loadRequerant();

  }

  loadRequerant(): void {
    this.requerantService.getRequerants().subscribe((response) => {
      this.requerants = response;
      console.log(this.requerants);
    });
  }

  delete(id: number) {
    this.requerantService.deleteRequerant(id).subscribe((response) => {
      this.loadRequerant();
    });
  }

}
