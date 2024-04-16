import { Component } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-get-all',
  templateUrl: './get-all.component.html',
  styleUrl: './get-all.component.scss'
})
export class GetAllComponent {
  products! : Product[];
  constructor (private _ser:ServiceService){}
  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this._ser.getall().subscribe({
      next : (data) => {
        this.products = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })

  }
}
