import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { generate, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'https://sheet.best/api/sheets/d4eec545-2c90-4493-9021-bbcc7c348a0b';
  // apiUrl = '';
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      // 'Token': '28031998'
    })
  }
  constructor(private httpClient: HttpClient) { }

  // Cria o usuário (CRUD = Create)
  postUser (user: User): Observable<User> {
    return this.httpClient.post<User>(this.apiUrl, user, this.httpOptions);
  }

  // Retorna a lista de usuários (CRUD = Read)
  getUsers(): Observable<User[]> { // Chama o método User[]
    return this.httpClient.get<User[]>(this.apiUrl); // Trás o método User[]
  }

  // Atualiza o usuário (CRUD = Update)
  putUser(id: string, user: User):Observable<User> {
    return this.httpClient.put<User>(`${this.apiUrl}/id/${id}`, user,this.httpOptions);
  }

  // Deleta o usuário (CRUD = Delete)
  deleteUser(id: string): Observable<User> {
    return this.httpClient.delete<User>(`${this.apiUrl}/id/${id}`);
  }

  getUser (id: string): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.apiUrl}/id/${id}`)
  }
}