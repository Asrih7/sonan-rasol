import { Component, OnInit } from '@angular/core';
import { D1Service } from './d1.service';

@Component({
  selector: 'app-d1',
  standalone: false,
  
  templateUrl: './d1.component.html',
  styleUrl: './d1.component.css'
})
export class D1Component implements OnInit{
  items: any[] = [];
    constructor(private d1service: D1Service) {}
  
  ngOnInit(): void {
    this.d1service.getData().subscribe((data: any) => {
      this.items = data; 
    });  }

}
