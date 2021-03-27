import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';

const routes: Routes = [
    { path: '', redirectTo: '/shop', pathMatch: 'full' }, //just know that the default matching mechanism or any routing expression is a prefix match
    // { path: '', component: ShoppingCartComponent }, //the above line can be written like this line
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'shop', component: ShoppingCartComponent },
    { path: '**', component: PageNotFoundComponent } //pageNotFound has to be the last path cannot be up
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes) //forRoot used for app Module, while forChild used for any child module beneath the app module
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}