import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Image, ImagesService } from './services/images.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(private readonly imagesService: ImagesService) {
    }

    @ViewChild('bigImageContainer') bigImageContainer: ElementRef;

    images: Image[];
    bigImage: Image;

    ngOnInit() {
        // get images data
        this.imagesService.getImages().subscribe(
            (value: Image[]) => {
                this.images = value;
            }
        );
    }

    // show big image when clicked on thumbnail
    showBigImage(image: Image) {
        this.bigImage = image;
        this.bigImageContainer.nativeElement.className = 'blackout-overlay';
    }

    // hide big image when clicked on "X"
    hideBigImage() {
        this.bigImage = undefined;
        this.bigImageContainer.nativeElement.className = 'blackout-overlay overlay-hidden';
    }

}
