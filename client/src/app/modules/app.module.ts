import { AuthenticationInterceptor } from './../interceptors/AuthenticationInterceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutComponent } from '../components/layout/layout.component';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { MenuComponent } from '../components/menu/menu.component';
import { HeaderComponent } from '../components/header/header.component';
import { MainComponent } from '../components/main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RoutingModule } from './routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ContentComponent } from '../components/content/content.component';
import { ProductComponent } from '../components/product/product.component';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductModalComponent } from '../components/product-modal/product-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { CartProductComponent } from '../components/cart-product/cart-product.component';
import { CategoryComponent } from '../components/category/category.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBadgeModule } from '@angular/material/badge';
import { PaymentModalComponent } from '../components/payment-modal/payment-modal.component';
import { AdminProductComponent } from '../components/admin-product/admin-product.component';
import { AdminEditModalComponent } from '../components/admin-edit-modal/admin-edit-modal.component';
import { AdminMenuComponent } from '../components/admin-menu/admin-menu.component';
import { ReceiptModalComponent } from '../components/receipt-modal/receipt-modal.component';

@NgModule({
  declarations: [
    LayoutComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    HeaderComponent,
    MainComponent,
    ContentComponent,
    ProductComponent,
    ProductModalComponent,
    CartProductComponent,
    CategoryComponent,
    PaymentModalComponent,
    AdminProductComponent,
    AdminEditModalComponent,
    AdminMenuComponent,
    ReceiptModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    RoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatSliderModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatStepperModule,
    MatSidenavModule,
    MatBadgeModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true,
    },
  ],
  bootstrap: [LayoutComponent],
})
export class AppModule {}
