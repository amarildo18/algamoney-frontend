import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]',
  exportAs: 'campoColorido'
})
export class CampoColoridoDirective {

  @HostBinding('style.backgroundColor') corFundo: string;
  @Input() cor = 'black';

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {

  }

  @HostListener('focus') colorir(): void{

    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
    this.corFundo = this.cor;
  }

  @HostListener('blur') descolorir(): void{

    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    this.corFundo = 'transparent';
  }

}
