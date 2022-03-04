import { ADD_ARTICLE, ADD_STEPS, DELETE_ARTICLE, DELETE_STEPS, DELETE_TOPIC, DEMO, UPDATE_ARTICLE, UPDATE_STEPS, UPDATE_TOPIC } from "./demoTypes"

export const demo =(data)=> {
    console.log("action",data)
    return {
        type: DEMO,
        payload: data
    }
}

export const addArticle = (addArticleData)=>{
    console.log("action",addArticleData)
    return{
        type: ADD_ARTICLE,
        payload:addArticleData
    }
}

export const addSteps = (addStepData)=>{
    console.log("action",addStepData)
    return{
        type: ADD_STEPS,
        payload:addStepData
    }
}

export const updateTopic = (updateTopicData)=>{
    console.log("updateTopic:action",updateTopicData)
    return{
        type: UPDATE_TOPIC,
        payload:updateTopicData
    }
}
export const updateArticle = (updateArticleData)=>{
    console.log("updateArticleData:action",updateArticleData)
    return{
        type: UPDATE_ARTICLE,
        payload:updateArticleData
    }
}

export const updateSteps = (updateStepsData)=>{
    console.log("updateStepsData:action",updateStepsData)
    return{
        type: UPDATE_STEPS,
        payload:updateStepsData
    }
}
export const deletetopic = (data)=>{
    return{
        type:DELETE_TOPIC,
        payload:data
    }
}

export const deletearticle = (data)=>{
    return{
        type:DELETE_ARTICLE,
        payload:data
    }
}

export const deletesteps = (data)=>{
    return{
        type:DELETE_STEPS,
        payload:data
    }
}