import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { IProduct } from '../../interfave/iproduct';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  private readonly _ApiService = inject(ApiService)

  allProducts:IProduct[] = []

  ngOnInit(): void {
    this._ApiService.getData().subscribe({
      next:(res)=>{
        this.allProducts = res
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
}
