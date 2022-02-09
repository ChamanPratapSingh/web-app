import { Directive, ElementRef, HostListener,} from '@angular/core';


@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective {
 
  constructor(private e1 : ElementRef){
    
  }

  @HostListener('mouseenter') onMouseEnter(){
    
    this.highlight( 'yellow');
  }
 
  @HostListener('mouseLeave') onMouseLeave(){
    this.highlight('');
  }
  highlight(color : string) {
    this.e1.nativeElement.style.backgroundColor = color;
  } 

}
