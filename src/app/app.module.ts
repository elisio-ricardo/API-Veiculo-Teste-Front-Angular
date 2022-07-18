import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavComponent } from "./components/template/nav/nav.component";
import { FooterComponent } from "./components/template/footer/footer.component";
import { HeaderComponent } from "./components/template/header/header.component";

//eu importei
import { HttpClientModule } from "@angular/common/http";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { HomeComponent } from "./components/views/home/home.component";
import { MatCardModule } from "@angular/material/card";

import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { VeiculoCreateComponent } from "./components/views/veiculo/veiculo-create/veiculo-create.component";
import { VeiculoDeleteComponent } from "./components/views/veiculo/veiculo-delete/veiculo-delete.component";
import { VeiculoReadComponent } from "./components/views/veiculo/veiculo-read/veiculo-read.component";
import { VeiculoUpdateComponent } from "./components/views/veiculo/veiculo-update/veiculo-update.component";
import {MatSelectModule} from '@angular/material/select';
import { VeiculoQuantidadeComponent } from './components/views/veiculo/veiculo-quantidade/veiculo-quantidade.component';








@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    VeiculoCreateComponent,
    VeiculoReadComponent,
    VeiculoDeleteComponent,
    VeiculoUpdateComponent,
    VeiculoQuantidadeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatSnackBarModule,
    MatTableModule,
    MatIconModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
