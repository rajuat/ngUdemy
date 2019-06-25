import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  AfterContentInit,
  DoCheck,
  OnChanges,
  SimpleChanges,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  ViewChild,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //None, Native
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input('srvElement') element: { name: string, type: string, content: string };
  @ViewChild('heading', null) header: ElementRef;
  @ContentChild('contentParagraph', null) paragraph: ElementRef;

  constructor() {
    console.log('constructor called!')
  }

  ngOnInit() {
    console.log('ngOnInit called!')
    console.log('Header is ' + this.header.nativeElement.textContent);
    console.log('Paragraph is ' + this.paragraph.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called!')
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called!')
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called!')
    console.log('Paragraph is ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called!')
  }

  ngAfterViewInit(): void {
    console.log('ngAfterContentView called!')
    console.log('Header is ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called!')
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called!')
  }

}