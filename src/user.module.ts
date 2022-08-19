import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
//import { User, Userdocument} from "./user.module"
import { Document } from "mongoose";


export type Userdocument = User & Document

@Schema()
export class User{
    @Prop()
    username: string;
    
@Prop()
    description:string;

@Prop({default:Date.now})
    date_added: Date;
}

export const UserSchema = SchemaFactory.createForClass(User)