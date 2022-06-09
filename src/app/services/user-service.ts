import {Injectable} from '@angular/core';

@Injectable()
export class UserService {

  readonly users = ['Dulanga', 'Chamal', 'Thilina', 'Kawmal', 'Loshi', 'Lahiru', 'Shakya'];

  principal:string|null=null;
  constructor() {
  }

  login(name: string): boolean {
    if(this.users.includes(name)){
      this.principal=name;
      return true;
    }else{
      this.principal=null;
      return false;
    }
  }

  getPrincipal():string | null{
    return this.principal;
  }
}
