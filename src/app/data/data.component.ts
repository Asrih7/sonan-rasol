import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-data',
  standalone: false,
  
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent implements OnInit{
  items: any[] = [];
    constructor(private d1service: DataService) {}
  
  ngOnInit(): void {
    this.d1service.getData().subscribe((data: any) => {
      this.items = data; 
    });  }

}
