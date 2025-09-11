import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  img: string = '';

  @Input('img') 
  set changeImg(newImg: string) {
    this.img = newImg;
    console.log('change just img =>', this.img);
  }
  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault: string = '../assets/images/default.png';
  // counter = 0;
  // counterFunction: number | undefined;

  constructor() { 
    // Before render
    // NO async -- once time
    console.log('Constructor', 'imgValue =>', this.img);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Before- during render
    // When input changes - many times
    console.log('ngOnChanges', 'imgValue =>', this.img);
    console.log('changes', changes);
  }

  ngOnInit(): void {
    // Before render
    // Async - once time - fetch
    console.log('ngOnInit', 'imgValue =>', this.img);
    // this.counterFunction = window.setInterval(() => {
    //   this.counter++;
    //   console.log('counter', this.counter);
    // }, 1000);
  }

  ngAfterViewInit(): void {
    // After render
    // Handler children
    console.log('ngAfterViewInit');
    
  }

  ngOnDestroy(): void {
    // Just before destroy
    // delete
    console.log('ngOnDestroy');
    // window.clearInterval(this.counterFunction);
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('log Hijo');
    this.loaded.emit(this.img);
  }

}
