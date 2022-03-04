import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { connect, useDispatch, useSelector } from 'react-redux';
import { addArticle } from '../redux';


function AddArticle(props) {
    const [LinkURL, setLinkURL] = useState()
    const [ArticleLinkText, setArticleLinkText] = useState()
    const [LinkID, setLinkID] = useState()
    const [LinkAction, setLinkAction] = useState()
    const [Type, setType] = useState()
    const [Desc, setDesc] = useState()
    const [Title, setTitle] = useState()
    const [Body, setBody] = useState()
    const [currentTopicItem,setcurrentTopicItem] = useState()
    const dispatch = useDispatch();
    const { id } = useParams();
    const item = useSelector((state) => state);
    const tableData = item.demo
    console.log(tableData)
    const curretId = ""
    const currentTopic = ""
    const currentItem = tableData.find(item => item.TopicId === parseInt(id));
    console.log("currentItem",currentItem )
    useEffect(() => {
        if (currentItem) {
            setLinkURL(currentItem.LinkURL)
            setArticleLinkText(currentItem.ArticleLinkText)
            setLinkAction(currentItem.LinkAction)
            setLinkID(currentItem.LinkID)
            setType(currentItem.Type)
            setDesc(currentItem.Desc)

        }
    }, [currentItem])
    
    useEffect(()=>{
       
    }, [currentItem])
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
                    steps: [
                        {
                            Title: "",
                            Body: ""
                        }
                    ]
                }
            ]

        }
        console.log("data",data)
        dispatch(addArticle(data))
        console.log("final",tableData)
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

                <button>Add Article</button>
            </form>

        </div>
    )
}

export default AddArticle