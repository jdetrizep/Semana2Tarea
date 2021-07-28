import IPhoto from "./IPhoto";

export default interface ITodo{
    userId: number;
    id: number;
    title: string;
    photos?: IPhoto[];
}