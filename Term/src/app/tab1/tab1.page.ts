import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  public word = 'hello'
  formulario : FormGroup

  constructor(
    private builder: FormBuilder 
  ) {}

  async ngOnInit() {
    this.formulario = this.builder.group({})
  }
  
}
