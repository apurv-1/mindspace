import { db } from "../firebase";

const database = db.ref("cognigitive");

const Postdata = (key, category, sentiment, values, date, sentences) => {
  console.log(key);
  let data = {
    id: key,
    sentence: sentences,
    catgegory: category,
    sentiment: sentiment,
    value: values,
    date: date,
  };
  database
    .push(data)
    .then((doc) => {
      console.log(doc);
    })
    .catch((err) => {
      console.log(err);
    });
};

const GetCognidata = async (value) => {
  const data = await database.orderByChild("id").equalTo(value).once("value");
  var datas = [];
  data.forEach((item) => {
    datas.push({
      key: item.key,
      ...item.val(),
    });
  });
  console.log(datas);
  return datas;
};

export { GetCognidata };
export default Postdata;
