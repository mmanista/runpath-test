/* Hello Runpath, this is the frontend test you requested.
* Hopefully the code quality is not THAT bad.. :) */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ImagesService } from './services/images.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { FilterByPropertyPipe } from './pipes/filter-by-property.pipe';

@NgModule({
    declarations: [
        AppComponent,
        FilterByPropertyPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        NgxPaginationModule
    ],
    providers: [ImagesService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
