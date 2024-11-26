import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FooterComponent } from '../../footer/footer.component';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
/**
 * @description
 * Este componente `LoginComponent` gestiona el formulario de inicio de sesión.
 * Valida los datos ingresados (email y contraseña) contra los datos almacenados
 * en `localStorage`. Si la validación es exitosa, redirige al usuario a la página `/home`.
 */
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NavbarComponent, RouterModule, FooterComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      emailAddress: ['', [Validators.required, Validators.email]],
      password: ['',  ]
    });
  }
/**
 * Revisa si el formulario de login es válido y compara los datos ingresados
 * (correo y contraseña) con los que están guardados en el `localStorage`.
 * Si todo coincide, el usuario entra; si no, lanza un mensaje de error.
 * 
 * @param {string} emailAddress - El correo ingresado en el formulario.
 * @param {string} password - La contraseña ingresada en el formulario.
 * @returns {void} No devuelve nada, solo verifica y redirige o muestra error.
 * @example
 * component.loginForm.controls['emailAddress'].setValue('francisco@gmai.com');
 * component.loginForm.controls['password'].setValue('123456Adsdfsf');
 * component.onLogin();   redirigir.
 * 
 * component.loginForm.controls['emailAddress'].setValue('correo@falso.com');
 * component.loginForm.controls['password'].setValue('1');
 * component.onLogin();  error  
 * @usageNotas
 * 1. Los datos se guardan en localStorage con la clave userData.
 * 2. El objeto `userData` debe tener `emailAddress` y `password`.
 * 3. falta terminar.
 */
  onLogin() {
    if (this.loginForm.valid) {
      const { emailAddress, password } = this.loginForm.value;  
      const datoUsuario = localStorage.getItem('userData');
  
      if (datoUsuario) {
        const { emailAddress: storedEmail, password: storedPassword } = JSON.parse(datoUsuario);
  
         if (emailAddress === storedEmail && password === storedPassword) {
          alert('Login Completo');

          this.router.navigate(['/home']);  
          console.log('Datos almacenados en localStorage:', localStorage.getItem('userData'));
        } else {
          alert('Error contraseña');
          console.log('datos a revisar localstore con contraseña ', localStorage.getItem('userData'));

        }}}}}


  
