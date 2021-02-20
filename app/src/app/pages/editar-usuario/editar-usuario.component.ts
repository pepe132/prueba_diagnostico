import { Component, OnInit } from '@angular/core';
import { user_info } from 'src/app/models/users.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  correo_bueno:string;
  usuario2:user_info={
    nombre:'default',
    apellido:'default',
    correo:'default',
    status:'default',
  }
  constructor(private _service:UsersService) { }

  ngOnInit(): void {
    this.correo_bueno=this._service.back_correo();//mando de la lista el correo y la devuelvo y ya tiene el correo
    this.usuario2=this._service.get_user_correo(this.correo_bueno);//mandamos el correo a impresion recuperado de la funcion get user correo
  }

}
