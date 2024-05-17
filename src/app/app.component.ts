// Angular'dan gerekli modülleri ve bileşenleri alınır
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

// AppComponent bileşeni oluşturulur ve gerekli özellikler verilir
@Component({
  selector: 'app-root', // Bileşenin kullanılacağı HTML elementi belirlenir
  standalone: true, // Bileşenin bağımsız olacağı belirtilir
  imports: [RouterOutlet, FormsModule, CommonModule], // Bileşenin kullandığı modüller eklenir
  templateUrl: './app.component.html', // Bileşenin HTML şablonu belirlenir
  styleUrl: './app.component.css' // Bileşenin CSS dosyası belirlenir
})
export class AppComponent {
  title = 'deneme'; // Bileşen başlığı
  birthDate: string = ''; // Doğum tarihi alanı
  email: string = ''; // E-posta adresi alanı
  name: string = ''; // İsim alanı
  password: string = ''; // Şifre alanı
  rePassword: string = ''; // Şifre tekrarı alanı
  gender: string[] = []; // Cinsiyet seçimi
  address: string = ''; // Adres alanı
  phone: string = ''; // Telefon numarası alanı
  isSubmitted: boolean = false; // Formun gönderilip gönderilmediğini belirleyen değişken
  maleChecked: boolean = false; // Erkek cinsiyet seçeneğinin durumu
  femaleChecked: boolean = false; // Kadın cinsiyet seçeneğinin durumu

  // Form gönderildiğinde çağrılan fonksiyon
  Gonder() {
    this.isSubmitted = true; // Formun gönderildiği belirtilir
    
  }
  
  // Kadın cinsiyet seçildiğinde çağrılan fonksiyon
  onFemaleChecked() {
    this.maleChecked = false; // Erkek cinsiyet seçeneği temizlenir
    this.femaleChecked = true; // Kadın cinsiyet seçeneği işaretlenir
  }
  
  // Erkek cinsiyet seçildiğinde çağrılan fonksiyon
  onMaleChecked() {
    this.maleChecked = true; // Erkek cinsiyet seçeneği işaretlenir
    this.femaleChecked = false; // Kadın cinsiyet seçeneği temizlenir
  }
}
