import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PraticeComponent } from './pratices/pratice/pratice.component'

import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {CdkTableModule} from '@angular/cdk/table';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    PraticeComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    CdkTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
