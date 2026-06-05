import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Required for *ngIf to work

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
  standalone: false
})
export class Contact {
  // Track submission state
  isSubmitted = false;
  isSubmitting = false;

  async handleFormSubmit(event: Event) {
    event.preventDefault(); // Stop the page from redirecting
    
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
        form.reset(); // Clear the input boxes
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