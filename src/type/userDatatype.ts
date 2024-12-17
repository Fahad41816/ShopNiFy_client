export interface TUser {
    firstName: string;
    lastName: string;
    role: "user" | "vendor"; 
    email: string;
    password: string; 
}
  
export interface TCategory {
    id: string,
    name : string,
    image: string,
    createAt: string,
    updateAt : string
}