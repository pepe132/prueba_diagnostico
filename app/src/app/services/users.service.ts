import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  correo:string;
  private datos_users=[
    {
      'nombre': 'Juan',
      'apellido': 'Dominguez',
      'correo': 'juan.dominguez45@gmail.com',
      'status': 'activo',
    },
    {
      'nombre': 'Pedro Alberto',
      'apellido': 'Garcia',
      'correo': 'pedro.agar@gmail.com',
      'status': 'inactivo',
      
    },
    {
      'nombre': 'Juan Carlos',
      'apellido': 'Del Rio',
      'correo': 'juan.dlr@gmail.com',
      'status': 'activo',
    },
    {
      'nombre': 'Luis',
      'apellido': 'Robledo',
      'correo': 'luis.rob60@gmail.com',
      'status': 'activo',
    }
  ]

  constructor() {
   }
   get_users(){
     return this.datos_users;
   }
   get_email(cr:string){
     this.correo=cr;//almaceno el correo mandado desde el boton

   }
   back_correo(){
     return this.correo;
   }
   get_user_correo(correo:string){
    return this.datos_users.find(user => user.correo === correo);//en el json buscame la propiedad del json en el que el correo sea igual al que yo te estoy dando
    
   }

}
