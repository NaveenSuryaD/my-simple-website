import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgStyle } from '@angular/common';

interface Tulip {
  style: {
    top: string;
    left: string;
    position: string;
  };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, NgStyle]
})
export class AppComponent {
  messageVisible = false;
  giftBoxVisible = true;
  tulips: Tulip[] = [];

  showMessage() {
    console.log('Gift box clicked');
    this.giftBoxVisible = false;
    this.messageVisible = true;
    setTimeout(() => this.animateTulips(), 500);
  }

  animateTulips() {
    this.tulips = []; // Clear any existing tulips
    for (let i = 0; i < 50; i++) {
      const tulip: Tulip = {
        style: {
          top: Math.random() * 100 + 'vh',
          left: Math.random() * 100 + 'vw',
          position: 'absolute'
        }
      };
      this.tulips.push(tulip);
      console.log(`Tulip ${i} added at ${tulip.style.top}, ${tulip.style.left}`);
    }
  }
}
