import React, { useState } from 'react'
import { demo } from '../redux'
import AddArticle from './AddArticle';
import ArticletData from './ArticletData';
import TopicData from './TopicData';
import { connect, useDispatch, useSelector } from 'react-redux';
import ArticleData from './ArticleData';

function TopicCotainer(props) {
    const dispatch = useDispatch();
    const [topicName,setTopicName] = useState("")
    console.log("TopicCotainer:one",props.count.demo)
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
                    TopicId: (props.count.demo.length - 1)+1,
                    LinkText: topicName,
                    Articles: [
                        {
                            LinkURL: "",
                            ArticleLinkText:"",
                            LinkAction: "",
                            LinkID: 0,
                            Type: "",
                            Desc: "",
                            steps: [
                                {
                                    Title: "",
                                    Body: ""
                                }
                            ]
                        }
                    ]
           
        }
        console.log("TopicCotainer:two",data)
        dispatch(demo(data))
        console.log("TopicCotainer:three",props.count.demo)
      }
  return (
    <div>
        <form onSubmit={handleSubmit}>
         <label>Add Topic</label>
         <input type='text' value={topicName}  onChange={e => setTopicName(e.target.value)}/><br/>
         <button>Add Topic</button>
        </form>
       <TopicData/>
     
    </div>
  )
}


const mapStateToProps = state => {
    
    return {
        count: state
    }
}

// const mapDispatchToProps = dispatch => {
//     return{
//         demo: count => dispatch(demo(count)),
//     }
// }


export default connect(mapStateToProps)(TopicCotainer)