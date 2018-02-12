import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'CourseFilter'})
export class CourseFilterPipe implements PipeTransform {
    transform(value: any[], args: string): any[] {
        let filter: string = args ? args.toLocaleLowerCase() : null;
        return filter ? value.filter((course) =>
            course.title.toLocaleLowerCase().startsWith(filter) != false) : value;
            
    }
}

@Pipe({name: 'DepartmentFilter'})
export class DepartmentFilterPipe implements PipeTransform {
    transform(value: any[], args: string): any[] {
        let filter: string = args ? args.toLocaleLowerCase() : null;
        return filter ? value.filter((department) =>
            department.title.toLocaleLowerCase().startsWith(filter) != false) : value;
            
    }
}