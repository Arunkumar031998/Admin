import React, { useState } from 'react'
import { connect, useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletetopic } from '../redux';
import ArticleData from './ArticleData';


function TopicData(props) {
  const [data,setData] =useState()
    const item = useSelector((state) => state);
    const dispatch = useDispatch();
    const topicData = item.demo
    console.log("topicData",topicData)
    console.log("table",topicData)

    const handleTopic=(id) =>{

      console.log("id",id)
      const currentItem = topicData.find(item => item.TopicId === parseInt(id));
      console.log("id",currentItem)
      setData(currentItem)
    }
    const deleteItem = (id) => {
      // dispatch({ type: "DELETE_ITEM", payload: id })
    console.log("deleteItem:id",id)
    dispatch(deletetopic(id))

    }
  return (
    <div>
        <table class="table table-hover">
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Opertaion</th>
      </tr>
    </thead>
    <tbody>
      {
        topicData.map((item, id) => (
          <tr key={id}>
            <td>{item.TopicId}</td>
            <td onClick={()=>handleTopic(id)}>{item.LinkText}</td>
            <button onClick={() => deleteItem(id)}>Delete</button>
            <td> <td><Link to={`/updatetopic/${id}`}>Update </Link></td></td>
            <td> <td><Link to={`/addarticle/${id}`}>Manage Article</Link></td></td>
          </tr>
        ))
      }
    </tbody>
  </table>
 {data?  <ArticleData data={data}/>: null}
  </div>
  )
}






export default TopicData