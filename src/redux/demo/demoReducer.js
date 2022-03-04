import { ADD_ARTICLE, ADD_STEPS, DELETE_ARTICLE, DELETE_STEPS, DELETE_TOPIC, DEMO, UPDATE_ARTICLE, UPDATE_STEPS, UPDATE_TOPIC } from "./demoTypes"

const initialState = [
    {
        TopicId: 0,
        LinkText: "First topic",
        Articles: [
            {
                LinkURL: "First topic article",
                ArticleLinkText: "",
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
        ],

    },
    {
        TopicId: 1,
        LinkText: "Second topic",
        Articles: [
            {
                LinkURL: "second topic article",
                ArticleLinkText: "",
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
        ],

    },
]
const demoReducer = (state = initialState, action) => {
    console.log("reducer", action.payload)
    switch (action.type) {
        case DEMO:
            state = [...state, action.payload];
            return state;
        case ADD_ARTICLE:
            const index = state.findIndex((item) => action.payload.TopicId === item.TopicId)
            state[index].Articles.push(action.payload.Articles[0])
            return state
        case ADD_STEPS:
            const topicIndex = state.findIndex((item) => action.payload.TopicId === item.TopicId)
            const currentTopic = state[topicIndex]
             const currentArticleIndex =action.payload.Articles[0].LinkID
            const articleIndex = state.findIndex((item) => action.payload.Articles.LinkID === item.Articles.LinkID)
           console.log("topicIndex",topicIndex)
           console.log("articleIndex",articleIndex)
           console.log("currentTopic",currentTopic)
           console.log("action.payload",action.payload.Articles[0].LinkID)
            state[topicIndex].Articles[currentArticleIndex].steps.push(action.payload.Articles[0].steps[0])
            return state
         case UPDATE_TOPIC:
             console.log("UPDATE_TOPIC:reducer",action.payload)   
             const topicIndexUpdate = action.payload.TopicId
            state[topicIndexUpdate].LinkText = action.payload.LinkText
             return state
         case UPDATE_ARTICLE:
            console.log("UPDATE_ARTICLE:reducer",action.payload)  
            const updateArticleTopicId = action.payload.TopicId 
            const updateArticleId = action.payload.Articles[0].LinkID 
            console.log("updateArticleTopicId",updateArticleTopicId)
            console.log("updateArticleId",updateArticleId)
            state[updateArticleTopicId].Articles[updateArticleId].LinkURL = action.payload.Articles[0].LinkURL
            state[updateArticleTopicId].Articles[updateArticleId].ArticleLinkText =action.payload.Articles[0].ArticleLinkText
            state[updateArticleTopicId].Articles[updateArticleId].LinkAction =action.payload.Articles[0].LinkAction
            state[updateArticleTopicId].Articles[updateArticleId].LinkID =action.payload.Articles[0].LinkID
            state[updateArticleTopicId].Articles[updateArticleId].Desc =action.payload.Articles[0].Desc
            state[updateArticleTopicId].Articles[updateArticleId].Type =action.payload.Articles[0].Type
            return state
         case UPDATE_STEPS:
             console.log("UPDATE_STEPS",action.payload) 
             const currentTopicId = action.payload.currentTopicId
             const currentArticleId = action.payload.currentArticleId 
             const currentStepId = action.payload.currentStepId 
             state[currentTopicId].Articles[currentArticleId].steps[currentStepId].Body = action.payload.steps[0].Body
             state[currentTopicId].Articles[currentArticleId].steps[currentStepId].Title = action.payload.steps[0].Title
             return state
             case DELETE_TOPIC:
                 console.log("DELETE_TOPIC:reducer",action.payload)
                 const filteritems = state.filter((item) => item.TopicId !== action.payload && item);
                 state = filteritems;
                 for(var i=action.payload;i<state.length;i++){
                    console.log("i",i)
                    console.log("state.length",state.length)
                    console.log("state[i]",state[i].TopicId)
                    state[i].TopicId = i
                    console.log("state[i]",state[i].TopicId)
                }
                 return state;
            case DELETE_ARTICLE:
                console.log("DELETE_ARTICLE:reducer",action.payload) 
                const delete_currentTopic = action.payload.topicId
                const delete_currentArticle = action.payload.articleId
                console.log("delete_currentTopic",delete_currentTopic)
                console.log("delete_currentArticle",delete_currentArticle)
                console.log("state[delete_currentTopic]",state[delete_currentTopic])
                console.log("state[delete_currentTopic]",state[delete_currentTopic].Articles[delete_currentArticle].LinkID)
                state[delete_currentTopic].Articles.splice(state[delete_currentTopic].Articles[delete_currentArticle].LinkID,1)
                for(var i=delete_currentArticle;i<state[delete_currentTopic].Articles.length;i++)
                {
                  state[delete_currentTopic].Articles[i].LinkID = i
                }
                return state
            case DELETE_STEPS:
                console.log("DELETE_STEPS",action.payload)

        default:
            return state

            
    }
}

export default demoReducer