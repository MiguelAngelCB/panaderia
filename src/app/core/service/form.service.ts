import { Injectable } from '@angular/core';
import {MyFormGroup} from '../model/validators/MyFormGroup';
import {MyFormControl} from '../model/validators/MyFormControl';

import {Validators} from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class FormService {
  private _myFormGroup: MyFormGroup;
  private nombreCampos=["cantidad","busqueda"];
  public nombreControles = ['spinner',"palabras"];
  private controles = [
    new MyFormControl('', [Validators.min(1)]),
    new MyFormControl('', [Validators.pattern("^[A-Za-z]+([\ A-Za-z]+)*")]),
  ];
  constructor() {
    this._myFormGroup = new MyFormGroup(this.nombreCampos,this.nombreControles,this.controles);
    this.insertarValidationMessages("spinner",["min"],["La cantidad introducida no es valida"]);
    this.insertarValidationMessages("palabras",["pattern"],["El texto introducido no es valido"]);
  }

  public get myFormGroup(): MyFormGroup {
    return this._myFormGroup;
  }

  validateControl(element): boolean {
    return this.myFormGroup.getControl(element).valid;
  }

  insertarValidationMessages(controlName:string,errors:Array<string>,message:Array<string>):void {
    this.myFormGroup.insertarValidationMessages(controlName,errors,message);
  }

  gerFormGroup(): any {
    return this.myFormGroup.formGroup;
  }

  getErrorMessage(controlName) {
    let control=this.myFormGroup.getControl(controlName)
    let errores= control.errors;
    return control.getValidationMessage(Object.keys(errores)[0]);
  }
}
