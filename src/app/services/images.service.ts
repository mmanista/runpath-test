import { HttpClient } from '@angular/common/http';
import { mergeMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ImagesService {
    constructor(private readonly http: HttpClient) {
    }

    getImages(): Observable<Image[]> {
        /* assuming the data source is constant, we can store them in local storage, so we don't
        * have to call the api everytime the page gets refreshed / the method gets called.
        * Can add some more validation of this, but this test is not about it. */
        if (localStorage.imagesData) {
            const parsedImagesData = JSON.parse(localStorage.imagesData);
            if (parsedImagesData instanceof Array) {
                return of(parsedImagesData);
            }
        }
        return this.http.get('http://jsonplaceholder.typicode.com/photos').pipe(
            mergeMap((response: Image[]) => {
                localStorage.imagesData = JSON.stringify(response);
                return of(response);
            })
        //    should handle the errors here
        );
    }
}

export interface Image {
    albumId: number;
    id: number;
    thumbnailUrl: string;
    title: string;
    url: string;
}
