import axios from "axios";
import React from "react";

// interface TodoType {
//   completed: boolean;
//   id: number;
//   title: string;
//   userId: number;
// }
const ApiCallDemo: React.FC = () => {
  const [data, setData] = React.useState<[] | null>([]);
  // const url = "https://jsonplaceholder.typicode.com/todos";
  const url = "http://192.168.1.22:3000/apitest";
     
  //   api call fn
  const callApi = async () => {
    const response = await axios.get(url);
    setData(response?.data.obj);
    console.log(response.data.obj);
  };
 
  // api call
  React.useEffect(() => {
    callApi();
  }, []);
  return<div className="flex flex-wrap  gap-4 p-12">
    {data?.map((todo:any, index:number) => (
      <div key={`TODOTYPE_${index}`} className="border border-blue-950  rounded-2xl p-4">
        <p className="text-gray-400">{todo?.id}</p>
        <h1>{todo?.title}</h1>
        <img src={todo?.imageLink} alt="image missing" />
      </div>
    ))}
  </div>
};

export default ApiCallDemo;
