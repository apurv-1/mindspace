import { db } from "../firebase";

const database = db.ref("writemood");

const Postdata = (key, sentiments, values, date) => {
  let data = {
    id: key,
    sentiments: sentiments,
    values: values,
    date: date,
  };
  database
    .push(data)
    .then((doc) => console.log("saved"))
    .catch((err) => console.log(err));
};

const GetDataById = async (id) => {
  const data=await database
    .orderByChild("id")
    .equalTo(id)
    .once("value");
    var datas=[];
    data.forEach((item)=>{
      datas.push({
          key:item.key,
          ...item.val()
      })
  })
  return datas;
};

export default database;
export { Postdata, GetDataById };
