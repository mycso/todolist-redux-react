import React from 'react';
import { connect } from 'react-redux';
import Todo from "./Todo";

const TodoList = ({todos}) => {
    return (
        <div style={{
            display: 'flex', 
            flexDirection: 'column', 
            maxWidth: '940px', 
            margin: '0 auto', 
            paddingTop: '30px',
            paddingBottom: '30px',
            height: '300px',
            overflowY: 'auto',
            overflowx: 'hidden'
        }}>
            {todos.map((todo, i) => (
                <Todo key={i} todo={todo} idx={i} />
            ))}
        </div>
    )
};

const mapStateToProps = ({todos}) => ({
    todos
})

export default connect(mapStateToProps)(TodoList);