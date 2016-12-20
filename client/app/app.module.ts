import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';
import { TaskComponent }  from './components/task.component';

@NgModule({
  imports:      [ BrowserModule,HttpModule,FormsModule ],
  declarations: [ AppComponent,TaskComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
