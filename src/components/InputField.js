import React, {Component} from 'react';
import {connect} from 'react-redux';
import { addTodo, addText, editAddTodo } from '../redux/action/addTodo.action';

const InputField = ({addText, text, selected, addTodo, editAddTodo}) => {
    
    const handleChange = e => addText(e.target.value);
    const handleSubmit = e => {
        e.preventDefault();
        if(selected || selected === 0)
            editAddTodo({
                value: text, 
                selected: selected
            })
        else addTodo(text);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name='todo' 
                value={text}
                placeholder='Enter your to do here...' 
                onChange={handleChange} 
                required
            />
            <button type="submit">Submit</button>
        </form>
    )
}
const mapDispatchToProps = dispatch => ({
    addTodo : todo => dispatch(addTodo(todo)),
    addText : value => dispatch(addText(value)),
    editAddTodo : obj => dispatch(editAddTodo(obj))
});

const mapStateToProps = ({text, selected}) => ({
    text,
    selected
})
export default connect(mapStateToProps, mapDispatchToProps)(InputField);