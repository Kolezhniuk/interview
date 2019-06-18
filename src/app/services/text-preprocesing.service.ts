import { Injectable, Inject, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class TextPreprocessingService implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {

  }

  makeBold(selector: string) {
    const elem = this.document.getElementById(selector);
    this.swithStyle(elem, 'fontWeight', 'bold', 'normal');
  }

  makeItalic(selector: string) {
    const elem = this.document.getElementById(selector);
    this.swithStyle(elem, 'fontStyle', 'italic', 'normal');
  }

  makeUnderline(selector: string) {
    const elem = this.document.getElementById(selector);
    this.swithStyle(elem, 'textDecoration', 'underline', 'none');
  }

  swithStyle(elem: HTMLElement, styleProp: string, styleValue: string, styleDefaultValue) {
    const isElemHasProperty = elem.style[styleProp] === styleValue;
    if (isElemHasProperty) {
      elem.style[styleProp] = styleDefaultValue;
    } else {
      elem.style[styleProp] = styleValue;
    }

  }

  wrapWordsWithSpan(wholeText: string) {
    return wholeText
      .split(' ')
      .map((i, index) => `<span id="word${index}">${i}</span>`)
      .join(' ');
  }
}

