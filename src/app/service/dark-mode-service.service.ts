import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeServiceService {
  private darkMode = false;

  constructor() {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      this.darkMode = savedMode === 'true';
    } else {
      this.darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    this.applyDarkMode();
  }

  toggleDarkMode(): void {
    this.darkMode = !this.darkMode;
    localStorage.setItem('darkMode', this.darkMode.toString());
    this.applyDarkMode();
  }

  isDarkMode(): boolean {
    return this.darkMode;
  }

  private applyDarkMode(): void {
    document.documentElement.classList.toggle('dark', this.darkMode);
  }
}