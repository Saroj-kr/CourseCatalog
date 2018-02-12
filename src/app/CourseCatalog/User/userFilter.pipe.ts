import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'UserFilter'})
export class UserFilterPipe implements PipeTransform {
    transform(Users: any[], nameSearch:string, emailSearch:string): any[] {
        
        // return filter ? value.filter((user) =>
        //     user.name.toLocaleLowerCase().startsWith(filter) != false) : value;
        if(Users && Users.length) {
            return Users.filter(user =>{
                if (nameSearch && !user.name.toLowerCase().startsWith(nameSearch.toLowerCase())){
                    return false;
                }
                if (emailSearch && !user.email.toLowerCase().startsWith(emailSearch.toLowerCase())){
                    return false;
                }
                return true;
            })
        } else {
            return Users;
        }
            
    }
}