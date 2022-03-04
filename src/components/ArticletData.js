import React from 'react'
import { useSelector } from 'react-redux';

function ArticletData() {
    const item = useSelector((state) => state);
    const topicData = item.demo
    console.log("ArticletData",topicData)
  return (
    <div>ArticletData</div>
  )
}

export default ArticletData