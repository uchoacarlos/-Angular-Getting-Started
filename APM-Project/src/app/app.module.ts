import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';



import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { PraticeComponent } from './pratices/pratice/pratice.component'
import { StarComponent } from './shared/star.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {CdkTableModule} from '@angular/cdk/table';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductListComponent,
    PraticeComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    NavigationComponent,

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
    HttpClientModule,
    AppRoutingModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
