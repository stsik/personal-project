import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponentComponent } from './new-component/new-component.component';
import { NewPageComponent } from './new-page/new-page.component';
import { GiorgiComponent } from './giorgi/giorgi.component';


const routes: Routes = [
{
  path:"", component: NewComponentComponent
},
{
  path:"newpage", component: NewPageComponent
},
{
  path:"giorgi", component: GiorgiComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
