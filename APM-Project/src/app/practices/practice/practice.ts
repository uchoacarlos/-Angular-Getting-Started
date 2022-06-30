
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table'; // import this


import { User } from '../user'


@Component({
  selector: 'pm-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {

  data: any;
  formulario!: FormGroup;
  userList: any = [];
  ELEMENT_DATA: any = [];

  /* ELEMENT_DATA: User[] = this.userList; */
  displayedColumns: string[] = ['nome', 'email'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  /* employee: { id: string; name: string; }; */


  constructor(private formBuilder: FormBuilder) { }


  ngOnInit(): void {

    this._initForm()


  }

  private _initForm() {

    this.formulario = this.formBuilder.group({
      nome: [null],
      email: [null]
    })

    // console.log(this.formulario.value);

  }

  addNew() {
    this.ELEMENT_DATA.push(this.formulario.value)
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    this.formulario.reset();
  }

  /*  obterDados() {
     this.userList.push(this.formulario.value)

     this.dataSource = this.userList;

     console.log(this.userList);

     this.formulario.reset();

   } */


}

