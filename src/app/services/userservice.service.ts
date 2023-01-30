import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserTs } from '../models/user.ts';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) { }

  getVista():Observable<UserTs[]>{
    let ruta1 = environment.apiUrl+'vista/';
    return this.http.get<UserTs[]>(ruta1);
  }

}
