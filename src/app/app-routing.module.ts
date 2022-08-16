import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  }
];
// Registering the RouterModule.forRoot() in the AppModule imports 
// array makes the Router service available everywhere in the application.
@NgModule({
  imports: [
    // The RouterModule.forRoot() method is a pattern used 
    // to register application-wide providers. 
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
