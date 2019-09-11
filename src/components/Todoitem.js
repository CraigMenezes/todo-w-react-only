import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class Todoitem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '7px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    markComplete=(e)=>{
        console.log(this.props) 
    }

    delTodo=(e)=>{
        console.log(this.props)
    }

    render() {
        const {title,id}=this.props.todo
        return (
            <div style={this.getStyle()}>
                <p>
                  {/* console.log() */}
                    <input type='checkbox' onChange={this.props.markComplete.bind(this,id)} />
                    {title}
                    <button onClick={this.props.delTodo.bind(this,id)} style ={btnStyle}>X</button>
                </p>
            </div>
        )
    }
}

//PropTypes
Todoitem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

const btnStyle={
    background:'#00f',
    color:'#0f0',
    border:'none',
    padding:'5px 9px',
    borderRadius:'50%',
    cursor :'pointer',
    float:"right"
}

export default Todoitem
