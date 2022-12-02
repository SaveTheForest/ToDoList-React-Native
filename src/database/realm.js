import Realm from "realm";

import { TaskSchema } from './Schema/TaskSchema'


export const getRealm = async () => await Realm.open({
    path:'DataBase-Task',
    schema:[TaskSchema]
})


export default getRealm


