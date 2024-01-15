import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
  showOptions = true;

  @Input() options: any;

  @Input()
  placeholder: string = '';

  @Input()
  values: string[] = [];

  @Input()
  value: string = '';

  @Output()
  valueChange: EventEmitter<string> = new EventEmitter();

  select(value: string) {
    this.valueChange.emit(value);
  }

  toggleOptions() {
    this.showOptions = !this.showOptions;
  }
}
