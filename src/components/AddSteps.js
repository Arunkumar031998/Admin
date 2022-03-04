import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { connect, useDispatch, useSelector } from 'react-redux';
import { addArticle } from '../redux';
import { addSteps } from '../redux';

function AddSteps(props) {
    const [LinkURL, setLinkURL] = useState()
    const [ArticleLinkText, setArticleLinkText] = useState()
    const [LinkID, setLinkID] = useState()
    const [LinkAction, setLinkAction] = useState()
    const [Type, setType] = useState()
    const [Desc, setDesc] = useState()

    const [Title, setTitle] = useState()
    const [Body, setBody] = useState()
  
    const dispatch = useDispatch();
    const { id } = useParams();
    const { aid } = useParams();
    console.log("id",id)
    console.log("aid",aid)
    const item = useSelector((state) => state);
    const tableData = item.demo
    console.log(tableData)
  
    const currentItem = tableData.find(item => item.TopicId === parseInt(id));
    console.log("currentItem",currentItem )
    useEffect(() => {
        if (currentItem) {
            setTitle(currentItem.Title)
            setBody(currentItem.Body)
        }
    }, [currentItem])
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            TopicId:currentItem.TopicId ,
            LinkText: currentItem.LinkText,
            Articles: [
                {
                    LinkURL: currentItem.Articles[aid].LinkURL,
                    ArticleLinkText:currentItem.Articles[aid].ArticleLinkText,
                    LinkAction:currentItem.Articles[aid].LinkAction,
                    LinkID: currentItem.Articles[aid].LinkID,
                    Type: currentItem.Articles[aid].Type,
                    Desc: currentItem.Articles[aid].Desc,
                    steps: [
                        {
                            Title:Title ,
                            Body: Body
                        }
                    ]
                }
            ]

        }
        console.log("data",data)
        dispatch(addSteps(data))
        console.log("final",tableData)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input type='text' value={Title} onChange={e => setTitle(e.target.value)} /><br />
                <label> Body</label>
                <input type='text' value={Body} onChange={e => setBody(e.target.value)} /><br />
                <button>Add Steps</button>
            </form>

        </div>
    )
}

export default AddSteps