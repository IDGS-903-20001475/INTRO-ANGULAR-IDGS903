import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumno-reactive',
  templateUrl: './alumno-reactive.component.html',
  styleUrls: ['./alumno-reactive.component.css']
})
export class AlumnoReactiveComponent {
  alumnoForm!:FormGroup;
  matricula!:number 
  nombre!:string
  edad!:number
  correo!:string
  pago!:number
  foto!:string
  calif!:number

  constructor(private readonly fb: FormBuilder){
this.alumnoForm=this.initForm()
  }
  onSubmit():void{
    //console.log('form-> ',this.alumnoForm.value)
    this.obtenerValores();
  }
  obtenerValores(){
    const mat=this.alumnoForm.get('matricula')?.value
    const nom=this.alumnoForm.get('nombre')?.value
    const eda=this.alumnoForm.get('edad')?.value
    const cor=this.alumnoForm.get('correo')?.value
    const pag=this.alumnoForm.get('pago')?.value
    const fot=this.alumnoForm.get('foto')?.value
    const cal=this.alumnoForm.get('calif')?.value
    console.log('Matricula: ',mat)
    console.log('Nombre: ',nom)
    this.matricula=mat
    this.nombre=nom
    this.edad=eda
    this.correo=cor
    this.pago=pag
    this.foto=fot
    this.calif=cal
  }
  initForm():FormGroup{
    return this.fb.group({
      matricula:['',[Validators.required]],
      nombre:['',[Validators.required,Validators.minLength(3)]],
      edad:['',[Validators.required,Validators.pattern('^[0-9]+$')]],
      correo:['',[Validators.required]],
      pago:['',[Validators.required]],
      foto:['',[Validators.required]],
      calif:['',[Validators.required]],
    }
    )
  }
}

