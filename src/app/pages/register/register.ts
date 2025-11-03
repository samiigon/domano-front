import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router'; // ✅ IMPORTAR Router y RouterLink

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  user = {
    nombres: '',
    apellidos: '',
    cedula: '',
    fechaNacimiento: '',
    usuario: '',
    password: ''
  };

  invalidUser = false;
  invalidPassword = false;

  constructor(private router: Router) {} // ✅ Ya funciona porque importamos Router

  onSubmit(form: NgForm) { // ✅ NgForm ya importado arriba
    const usernameRegex = /^[a-zA-Z0-9_]+$/;
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*()_\-+=]).+$/;

    this.invalidUser = !usernameRegex.test(this.user.usuario);
    this.invalidPassword = !passwordRegex.test(this.user.password);

    if (!this.invalidUser && !this.invalidPassword && form.valid) {
      alert('✅ Usuario registrado correctamente.');
      this.router.navigate(['/login']); // redirige al login
    }
  }
}
