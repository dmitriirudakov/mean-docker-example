import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule, MatToolbarModule, MatInputModule, MatButtonModule, MatCheckboxModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResourceModule } from 'ngx-resource';

import { AppComponent } from './app.component';
import { TodoResourceService } from './todo-resource.service';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		CommonModule,
		ResourceModule.forRoot(),
		BrowserAnimationsModule,
		MatToolbarModule,
		MatTableModule,
		MatInputModule,
		MatButtonModule,
		MatCheckboxModule
	],
	providers: [TodoResourceService],
	bootstrap: [AppComponent]
})
export class AppModule { }
