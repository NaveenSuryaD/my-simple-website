import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class AppComponent {
  messageVisible = false;

  showMessage() {
    console.log('Gift box clicked');
    this.messageVisible = true;
    setTimeout(() => this.animateTulips(), 500);
  }

  animateTulips() {
    const tulipContainer = document.querySelector('.tulip-container');
    console.log('Animating tulips');
    if (tulipContainer) {
      for (let i = 0; i < 50; i++) {
        const tulip = document.createElement('div');
        tulip.classList.add('tulip');
        tulip.style.top = Math.random() * 100 + 'vh';
        tulip.style.left = Math.random() * 100 + 'vw';
        tulipContainer.appendChild(tulip);
        console.log(`Tulip ${i} added at ${tulip.style.top}, ${tulip.style.left}`);
      }
    } else {
      console.log('Tulip container not found');
    }
  }
}
