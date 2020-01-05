import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiAccount } from 'src/environments/environment';
import { UserAuthenticate } from '../models/user-authenticate';

@Injectable({ providedIn: 'root' })
export class AccountService {
    constructor(private _http: HttpClient) {} 
}