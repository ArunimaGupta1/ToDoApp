import { TaskStatus } from "../enum/enum";
import {Guid} from "guid-typescript";

export class task{
    title:string;
    status!:TaskStatus;
    id:Guid;
    constructor(title:string){
        this.title = title;
        this.status = TaskStatus.Active;
        this.id = Guid.create();
    }
}