export interface _Course {
    id: string;
    title: string;
    description: string;
    detail?: string;
    credits: string;
    totalRegistration?: number;
    imageURL?: string;
    department: string;
    dateCreated?: Date;
    isRegistered?: boolean;
    completed: boolean;
};
  
export interface _Department {
    id: string;
    title: string;
    description: string;
    detail: string;
    numberOfCourses: number;
    imageURL: string;
    dateCreated: Date;
    isRegistered?: boolean;
    completed?:boolean;
    isCompleted?: boolean;
};
  
export interface _Registration {
    userId: string;
    courseId: string;
    departmentId: string;
    dateOfRegistration: Date;
    completionPercentage: number;
    dateRegistered: Date;
}
  
export interface _User {
    id?: number;
    name?: string;
    dob?: string;
    gender?: gender;
    email: string;
    password: string;
    admin?: boolean;
    imageURL?: string;
    address?: string;
    mobile?: string;
    dateRegistered?: Date;
}
  
export interface _CourseDept {
    courseId: string;
    deptId: string;
}
  
export interface _CarouselItem {
    sequenceNo: number;
    imageURL: string;
    title: string;
    description: string;
    status: string;
}

export enum gender {
    male, female
}