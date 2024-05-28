import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgStyle } from '@angular/common';

interface Tulip {
  style: {
    top: string;
    left: string;
    position: string;
  };
  src: string;
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
    this.initializeTulips();
    setInterval(() => this.animateTulips(), 5000); // Adjust interval as needed
  }

  initializeTulips() {
    for (let i = 0; i < 50; i++) {
      const tulip: Tulip = {
        style: {
          top: Math.random() * 100 + 'vh',
          left: Math.random() * 100 + 'vw',
          position: 'absolute'
        },
        src: 'tulip.png' // Ensure this path is correct
      };
      this.tulips.push(tulip);
    }
  }

  animateTulips() {
    for (let i = 0; i < this.tulips.length; i++) {
      this.tulips[i].style.top = Math.random() * 100 + 'vh';
      this.tulips[i].style.left = Math.random() * 100 + 'vw';
    }
  }
}
