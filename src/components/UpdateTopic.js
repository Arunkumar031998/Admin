import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { updateTopic } from '../redux';

function UpdateTopic() {
    const [topicName,setTopicName] = useState("")
    const { id } = useParams();
    const item = useSelector((state) => state);
    const dispatch = useDispatch();
    const tableData = item.demo
    const currentItem = tableData.find(item => item.TopicId === parseInt(id));
    console.log("UpdateTopic:currentItem",currentItem)
    useEffect(() => {
        if (currentItem) {
            setTopicName(currentItem.LinkText)
        }
    }, [currentItem])
    const handleSubmit = (e) => {
        // console.log("currentItem.TopicId",currentItem.TopicId)
        // console.log("topicName",topicName)
        // console.log("currentItem.Articles",currentItem.Articles)
        // console.log("currentItem.Articles.steps",currentItem.Articles.steps)
        e.preventDefault();
        const data = {
            TopicId:currentItem.TopicId ,
            LinkText: topicName,
            // Articles: [
            //     {
            //         LinkURL:currentItem.Articles.LinkURL,
            //         ArticleLinkText:currentItem.Articles.ArticleLinkText,
            //         LinkAction:currentItem.Articles.LinkAction,
            //         LinkID: currentItem.Articles.LinkID,
            //         Type: currentItem.Articles.Type,
            //         Desc: currentItem.Articles.Desc,
            //         steps: [
            //             {
            //                 Body:"",
            //                 Title:"",
            //             }
            //         ]
            //     }
            // ]
        }
        console.log("updateTopic:data",data)
        dispatch(updateTopic(data))
    }
  return (
    <div>
         <form onSubmit={handleSubmit}>
         <label>Add Topic</label>
         <input type='text' value={topicName}  onChange={e => setTopicName(e.target.value)}/><br/>
         <button>Update Topic</button>
        </form>
    </div>
  )
}

export default UpdateTopic