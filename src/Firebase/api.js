import { db} from "./../firebase";

const database=db.ref('facesnap');

const Post=(key,mood,date)=>{
    let data={
        id:key,
        mood:mood,
        date:date
    }
    database.push(data).then(data=>{
        console.log('saved')
    }).catch(err=>{
        console.log(err)
    })
}

const Getdata=async (value)=>{
    const data=await database.orderByChild('id').equalTo(value).once('value');
    var datas=[];
    console.log(data);
    data.forEach((childSnapshot)=>{
        console.log(childSnapshot.val());
        datas.push({
            key:childSnapshot.key,
            ...childSnapshot.val()
        })
    })
    return datas;
}

export default Post;
export {Getdata};