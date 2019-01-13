import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'change-ip', loadChildren: './change-ip/change-ip.module#ChangeIPPageModule' },
  { path: 'send', loadChildren: './send/send.module#SendPageModule' },
  { path: 'finish', loadChildren: './finish/finish.module#FinishPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
