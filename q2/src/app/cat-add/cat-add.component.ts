import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms'
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Category } from '../category';
@Component({
  selector: 'app-cat-add',
  templateUrl: './cat-add.component.html',
  styleUrls: ['./cat-add.component.css']
})
export class CatAddComponent implements OnInit {

  constructor( private fb : FormBuilder,
    private service:ProductService,
    private routes:Router
    ) { 
      this.addForm=fb.group({
        Cname:new FormControl(''),  
        image:new FormControl('')    
      })
    }
  addForm:any
  ngOnInit(): void {
  }
  onSubmit(){
      console.log(this.addForm.value)
      this.service.postCategory(this.addForm.value)
      .subscribe((data:any)=>{ 
        console.log(data)
      })
      this.routes.navigate(['Product-list']); 
  }
}
