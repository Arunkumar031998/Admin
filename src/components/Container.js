import React from 'react'
import { demo } from '../redux'
import { connect } from 'react-redux'
function Container(props) {
    const json = props.count
    console.log("json",json)
    const jsondata = JSON.stringify(json)
    console.log("jsondata",jsondata)
  return (
    <div>
        Num of count - 
    {/* <button onClick={props.demo(5)}>Click</button> */}
    </div>
  )
}


const mapStateToProps = state => {
    console.log("state",state)
    return {
        count: state
    }
}

const mapDispatchToProps = dispatch => {
    return{
        demo: count => dispatch(demo(count)),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Container)