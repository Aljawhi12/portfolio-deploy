import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { flush } from '@angular/core/testing';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  isMenuOpen: boolean = false;
  isProfileOpen:boolean =false;
  isDarkMode = false;

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    const target = event.target as HTMLElement;
    
    // Prevent closing when clicking the toggle button itself
    if (event.target && (target.closest('[data-toggle="menu"]') || target.closest('[data-toggle="profile"]'))) {
      return;
    }
    
    // Close menu when clicking outside
    if (this.isMenuOpen && 
        !target.closest('.mobile-menu-container') && 
        !target.closest('.mobile-menu-dropdown')) {
      this.isMenuOpen = false;
    }
    
    // Close profile dropdown when clicking outside
    if (this.isProfileOpen && !target.closest('.profile-container')) {
      this.isProfileOpen = false;
    }
  }

  ngOnInit(): void {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.isDarkMode = true;
      document.documentElement.classList.add('dark');
    } else if (savedTheme === 'light') {
      this.isDarkMode = false;
      document.documentElement.classList.remove('dark');
    } else {
      // If no saved preference, check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.isDarkMode = prefersDark;
      document.documentElement.classList.toggle('dark', prefersDark);
      localStorage.setItem('theme', prefersDark ? 'dark' : 'light');
    }
  }

  toggleProfile(event?: Event):void{
    if (event) {
      event.stopPropagation();
    }
    this.isProfileOpen = !this.isProfileOpen;
    // Close menu if profile is being opened
    if (this.isProfileOpen) {
      this.isMenuOpen = false;
    }
  }
  
  toggleMenu(event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    this.isMenuOpen = !this.isMenuOpen;
    // Close profile if menu is being opened
    if (this.isMenuOpen) {
      this.isProfileOpen = false;
    }
  }
  
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    
    // Apply dark class to HTML element
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Save preference to localStorage
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }
}