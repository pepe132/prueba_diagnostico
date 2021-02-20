import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {
  us:any[]=[];
  constructor(private _usersService:UsersService,
              private _router:Router) { }

  ngOnInit(): void {
    this.get_us();
  }
  get_us(){
    this.us=this._usersService.get_users();
  }
  editar_info(cr:string){
    this._usersService.get_email(cr);
    this._router.navigateByUrl(`/editar-usuario`);

  }


}
