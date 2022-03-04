import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { updateArticle } from '../redux'
function UpdateArticle() {
    const [LinkURL, setLinkURL] = useState()
    const [ArticleLinkText, setArticleLinkText] = useState()
    const [LinkID, setLinkID] = useState()
    const [LinkAction, setLinkAction] = useState()
    const [Type, setType] = useState()
    const [Desc, setDesc] = useState()
    const { id } = useParams();
    const { aid } = useParams();
    const item = useSelector((state) => state);
    const dispatch = useDispatch();
    const tableData = item.demo
    const currentItem = tableData.find(item => item.TopicId === parseInt(id));
    console.log("currentItem",currentItem )

    console.log("id",id)
    console.log("aid",aid)
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            TopicId:currentItem.TopicId ,
            LinkText: currentItem.LinkText,
            Articles: [
                {
                    LinkURL: LinkURL,
                    ArticleLinkText:ArticleLinkText,
                    LinkAction:LinkAction,
                    LinkID: LinkID,
                    Type: Type,
                    Desc: Desc,
                    // steps: [
                    //     {
                    //         Title: currentItem.Articles.Title,
                    //         Body: currentItem.Articles.Body,
                    //     }
                    // ]
                }
            ]

        }
        console.log("UpdateArticle:data",data)
        dispatch(updateArticle(data))
    }
  return (
    <div>
         <form onSubmit={handleSubmit}>
                <label>LinkURL</label>
                <input type='text' value={LinkURL} onChange={e => setLinkURL(e.target.value)} /><br />
                <label> LinkText</label>
                <input type='text' value={ArticleLinkText} onChange={e => setArticleLinkText(e.target.value)} /><br />
                <label>LinkAction</label>
                <input type='text' value={LinkAction} onChange={e => setLinkAction(e.target.value)} /><br />
                <label>Link Id</label>
                <input type='text' value={LinkID} onChange={e => setLinkID(e.target.value)} /><br />
                <label>Type</label>
                <input type='text' value={Type} onChange={e => setType(e.target.value)} /><br />
                <label>Desc</label>
                <input type='text' value={Desc} onChange={e => setDesc(e.target.value)} /><br />

                <button>Update Article</button>
            </form>
    </div>
  )
}

export default UpdateArticle