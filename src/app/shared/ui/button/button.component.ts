import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements AfterViewInit {
  @Input() type: 'default' = 'default';
  @Output() btnClick = new EventEmitter<Event>();

  @ViewChild('button', { static: true }) btn!: ElementRef<HTMLButtonElement>;

  ngAfterViewInit() {
    const button = this.btn.nativeElement;

    const addActive = () => button.classList.add('active');
    const removeActive = () => button.classList.remove('active');

    const handleClick = (event: Event) => {
      removeActive();
      this.btnClick.emit(event);
    };

    button.addEventListener('touchstart', addActive);
    button.addEventListener('touchend', () => {
      removeActive();
      this.btnClick.emit(new Event('click'));
    });

    button.addEventListener('mousedown', addActive);
    button.addEventListener('mouseup', (event) => {
      setTimeout(() => removeActive(), 100);
      handleClick(event);
    });

    button.addEventListener('mouseleave', removeActive);
  }
}
