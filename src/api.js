import { database } from "./firebase";

const db=database.ref('mindspace-2a3a2-default-rtdb');

const Post=(key)=>{
    let data={
        key:key,
        mood:'angry',
        value:0.3
    }
    db.push(data);
}

export default Post;