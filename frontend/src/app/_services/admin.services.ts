import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserProfile } from '@/_models';

@Injectable({ providedIn: 'root' })
export class AdminService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<UserProfile[]>(`http://localhost:3000/api/users`);
    }

    getRestaurantApplications() {
        return this.http.get(`http://localhost:3000/api/admin/restaurant-applications`);
    }
    updateUserProfile(username,options){
        return this.http.post<UserProfile>(`http://localhost:3000/api/user`,{username,options});
    }
}