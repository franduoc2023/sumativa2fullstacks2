import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule] 
})
export class RegistroComponent {
  registroForm: FormGroup;
  //userData: any = {};

  constructor(private fb: FormBuilder , private router: Router) {
    this.registroForm = this.fb.group({
      firstName: ['', Validators.required],
      secondName: [''],
      firstApp: ['', Validators.required],
      secondApp: [''],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('.*[A-Z].*'), 
        Validators.pattern('.*[a-z].*'), 
        Validators.pattern('.*\\d.*'), 
        Validators.pattern('.*[!@#$%^&*(),.?":{}|<>].*') 
      ])],
      birthdayDate: ['', Validators.required],
      gender: ['', Validators.required],
      emailAddress: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{9}$')]]
    });
  }

  onSubmit() {
    if (this.registroForm.valid) {
      const userData = this.registroForm.value;
      localStorage.setItem('userData', JSON.stringify(userData));  
       alert('Registro Completo');
      this.router.navigate(['/login']);


      console.log('datos guardado para revisar:', this.registroForm.value);
    } else {
      console.log('revisar por que fallo en consola');
    }
  }
}