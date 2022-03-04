import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { deletearticle } from '../redux';
import AddStep from './AddStep';
import StepData from './StepData';


function ArticleData({ data }) {
    // console.log("ArticleData:CurrentItem", data)
    // console.log("ArticleData:CurrentItem:id", data.TopicId)
    const [callStep, setCallStep] = useState(false)
    const [topicId, setTopicId] = useState()
    const [articleId, setArticleId] = useState()
    const [currentItem, setcurrentItem] = useState(data)
    const [callStepTable, setcallStepTable] = useState(false)
    console.log("ArticleData:CurrentItem", data)
    const dispatch = useDispatch();
    const handleManageSteps = () => {
        console.log("calling")
        console.log("handleManageSteps:CurrentItem", data)
        setCallStep(true)
    }
    useEffect((data) => {
        setCallStep(false)
    }, [data])

    const handleTopic = (id) => {

        console.log("id", id)
        setTopicId(data.TopicId)
        setArticleId(id)
        setcallStepTable(true)
        // const currentItem = topicData.find(item => item.TopicId === parseInt(id));
        // console.log("id",currentItem)
        // setData(currentItem)
    }
    const deleteItem = (topicId, articleId) => {
        console.log("deleteItem:topicId", topicId)
        console.log("deleteItem:articleId", articleId)
        const data = {
            topicId,
            articleId
        }
        dispatch(deletearticle(data))
    }

    return (
        <div>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Operation</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.Articles.map((item, id) => (
                            <tr key={id}>
                                <td>{item.LinkID}</td>
                                <td onClick={() => handleTopic(id)}>{item.LinkURL}</td>
                                <button onClick={() => deleteItem(data.TopicId, item.LinkID)}>Delete</button>
                                <td> <td><Link to={`/updatearticle/${data.TopicId}/${item.LinkID}`}>Update Article</Link></td></td>
                                <td> <td><Link to={`/addsteps/${data.TopicId}/${item.LinkID}`}>Manage Steps</Link></td></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            {
                callStepTable ? <StepData topicId={topicId} articleId={articleId} /> : null
            }
        </div>
    )
}

export default ArticleData