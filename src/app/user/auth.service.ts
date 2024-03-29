import { InjectableCompiler } from '@angular/compiler/src/injectable_compiler';
import { Injectable } from '@angular/core'
import { IUser } from './user.model'

@Injectable()
export class AuthService{
    currentUser : IUser
    loginUser(username: string, password: string){
        this.currentUser = {
            id : 1,
            userName : username,
            firstName : 'Prince',
            lastName : 'Harsha'
            }
    }
    isAuthenticated(){
        return !!this.currentUser;
    }

    updateCurrentUser(firstName: string, lastName: string){
        this.currentUser.firstName = firstName
        this.currentUser.lastName = lastName
    }
}