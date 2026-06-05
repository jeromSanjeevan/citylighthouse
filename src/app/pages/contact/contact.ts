import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Required for *ngIf to work

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
  standalone: false
})
export class Contact {
  // Explicit tracking properties exposed directly to our template view
  isSubmitted = false;
  isSubmitting = false;

  async handleFormSubmit(event: Event) {
    event.preventDefault(); // Intercept form submission and prevent a full browser redirect

    if (this.isSubmitting) return;
    this.isSubmitting = true;

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        this.isSubmitted = true;
        form.reset(); // Safely scrub raw input data out of form elements
      } else {
        alert('Something went wrong. Please try emailing admin@citylighthouse.org directly.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Network error. Please check your connection and try again.');
    } finally {
      this.isSubmitting = false;
    }
  }
}