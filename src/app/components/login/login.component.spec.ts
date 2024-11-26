import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('´Test del component login', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent, ReactiveFormsModule,FormsModule,CommonModule,RouterTestingModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });





  it('Prueba unitaria para sumativa 2 email', () => {
    component.loginForm.controls['emailAddress'].setValue('francisco@gmail.com');  
    expect(component.loginForm.valid).toBeTrue();

    
  
    component.loginForm.controls['emailAddress'].setValue('francisco');  
    expect(component.loginForm.valid).toBeFalse();
  });


 
  it('boton funciona con spy', () => {
    spyOn(component, 'onLogin'); // 

    const button = fixture.debugElement.query(By.css('button'));
    component.loginForm.controls['emailAddress'].setValue('francisco@gmail.com');
    component.loginForm.controls['password'].setValue('123456');
    fixture.detectChanges();  

     button.nativeElement.click();

     expect(component.onLogin).toHaveBeenCalled();
  });


});
