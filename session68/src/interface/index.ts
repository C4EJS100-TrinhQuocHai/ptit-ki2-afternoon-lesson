// tạo tất cả những interface or type
// export ra các file khác cần dùng type, interface thì import vào
// nestjs

export interface Book{
    id:number,
    status:string,
    name:string
}
export interface Action{
    type:string,
    payload:any,
}