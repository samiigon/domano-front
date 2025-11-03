import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  user = { username: '', password: '' };
  loginError = false;

  onSubmit() {
    // Simulación de autenticación (esto luego se conectará a un servicio real)
    if (this.user.username === 'admin' && this.user.password === '1234') {
      alert('✅ Login exitoso');
      this.loginError = false;
    } else {
      this.loginError = true;
    }
  }
}
