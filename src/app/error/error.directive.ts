import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { Injectable } from '@angular/core';

@Directive({
  selector: '[error-cust]',//tage 自定的指令名稱 ex: <div error-cust></div> <div error-cust="abc"></div>
})

@Injectable()
export class ErrorDirective {
  @Input('error-cust') msg: string;
  //Renderer angular4後已棄用 更改為Renderer2 
  constructor(public el: ElementRef,public renderer: Renderer2) { }

    ngOnInit() {
      let el = this.el.nativeElement;//取得自定指令的el
      el.style.fontSize = '20px';
      el.style.color = 'red';

      let renderer = this.renderer;//dom 操作
      let h1 = renderer.createElement('h1');
      let text = renderer.createText(this.msg);
      renderer.appendChild(h1, text);
      renderer.appendChild(el, h1);
    }
    
}


