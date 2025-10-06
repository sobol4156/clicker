import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements AfterViewInit {
  @Input() type: 'default' = 'default';
  @Output() click = new EventEmitter<Event>();

  @ViewChild('button', { static: true }) btn!: ElementRef<HTMLButtonElement>;

  ngAfterViewInit() {
    const button = this.btn.nativeElement;

    button.addEventListener('click', (event) => this.click.emit(event));

    button.addEventListener('touchstart', () => button.classList.add('active'));
    button.addEventListener('touchend', () => button.classList.remove('active'));
  }
}
