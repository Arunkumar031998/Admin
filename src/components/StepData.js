import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { deletesteps } from '../redux';

function StepData(props) {
    console.log("StepData",props)
    const { topicId,articleId} = props
    var count = -1
    const dispatch = useDispatch();
    const item = useSelector((state) => state);
    const currentTopic = item.topicId
    console.log("item",item.demo[topicId].Articles[articleId])
   
    const data = item.demo[topicId].Articles[articleId].steps
    console.log("data",data)
    const deleteItem = (topicId, articleId,count) => {
    console.log("topicId, articleId,count",topicId, articleId,count)
    const data={
        topicId,
        articleId,
        count
    }
    dispatch(deletesteps(data))
    }        
    return (
    <div>
        "topicId"-{topicId}"articleId"-{articleId}
        <table class="table table-hover">
    <thead>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Body</th>
        <th>Operation
        </th>
      </tr>
    </thead>
    <tbody>
      {
       data.map((item, id) => (
          <tr key={id}>
              <td>{count=count+1}</td>
            <td>{item.Title}</td>
            <td>{item.Body}</td>
            <button onClick={() => deleteItem(topicId,articleId,count)}>Delete</button>
            <td> <td><Link to={`/updatearticle/${topicId}/${articleId}/${count}`}>Update Steps</Link></td></td>
          </tr>
        ))
      }
    </tbody>
  </table>
    </div>
  )
}

export default StepData