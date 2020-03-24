import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyComponentComponent } from '.c:/Users/1/Desktop/1 angular/my-app/src/my-component/my-component.component';

@NgModule({
   declarations: [
      AppComponent,
      MyComponentComponent
   ],
   imports: [
      BrowserModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
