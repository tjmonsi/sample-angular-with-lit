import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import '@tjmonsi/small-snackbar/small-snackbar.js';

@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FormInputComponent {
  @ViewChild('snackbar') snackbar: any | undefined;

  afterText = '';

  form = new FormGroup({
    text: new FormControl('')
  });

  onSubmit() {
    const { text } = this.form.value;
    this.afterText = '';
    this.snackbar?.nativeElement.open(text);
  }

  onHide(event: Event) {
    const { text } = (event as CustomEvent<any>).detail;
    this.afterText = text;
  }
}
