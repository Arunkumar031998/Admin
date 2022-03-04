import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { updateSteps } from '../redux';

function UpdateSteps() {
    const { id } = useParams();
    const { aid } = useParams();
    const { sid } = useParams();
    const [Title, setTitle] = useState()
    const [Body, setBody] = useState()
    const item = useSelector((state) => state);
    const currentTopicId = item.demo[id].TopicId
    const currentArticleId = item.demo[id].Articles[aid].LinkID
    console.log("currentTopicId",currentTopicId)
    console.log("currentArticleId",currentArticleId)
    const dispatch = useDispatch();
   
    console.log("id",id)
    console.log("aid",aid)
    console.log("sid",sid)
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            currentTopicId:currentTopicId,
            currentArticleId:currentArticleId,
            currentStepId:sid,
            steps: [
                {
                    Title:Title,
                    Body:Body
                }
            ]
        }
        console.log('handleSubmit:data',data)
        dispatch(updateSteps(data))
    }
  return (
    <div>
<form onSubmit={handleSubmit}>
                <label>Title</label>
                <input type='text' value={Title} onChange={e => setTitle(e.target.value)} /><br />
                <label> Body</label>
                <input type='text' value={Body} onChange={e => setBody(e.target.value)} /><br />
                <button>Update Steps</button>
            </form>
    </div>
  )
}

export default UpdateSteps