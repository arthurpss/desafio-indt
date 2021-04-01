import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/interfaces/produto.interface';

@Component({
  selector: 'app-vitrine',
  templateUrl: './vitrine.component.html',
  styleUrls: ['./vitrine.component.css']
})
export class VitrineComponent implements OnInit {

  produtos: Produto[] | undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

}
