import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { VistaComponent } from './vista/vista.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';

// Material Angular
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    LoginComponent,
    MenuComponent,
    VistaComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    // Material Angular
    MatTableModule,
    MatFormFieldModule,
    MatIconModule,
    // Darle estilos a los inputs
    MatInputModule
  ],
  exports:[
    LoginComponent,
    MenuComponent,
    VistaComponent
  ]
})
export class ComponentsModule { }
