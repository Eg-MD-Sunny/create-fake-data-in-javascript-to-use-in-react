import React from 'react';
import './Animal.css';

const Animal = (props) => {
    const {id, name, email, gender, Number, img} = props.animalItem;
    const dataStyle = {
        float: 'left',
        border: '1px solid rgba(0,0,0,0.2)',
        width: '300px',
        height: '430px',
        marginLeft: '20px',
        display: 'block',
        textAlign: 'left',
        paddingLeft: '10px',
        boxSizing: 'border-box',
        marginBottom: '20px',
        borderRadius: '7px',
    }
    const imageStyle = {
        width: '280px',
        height: '200px',
        marginTop: '10px',
        borderRadius: '5px'
    }
    const fontStyle = {
        fontWeight:'200',
        fontSize: '20px',
        color: 'red'
    }
    return (
        <div style={dataStyle}>
            <div className="user-data">
                {/* <p style={{fontSize:'30px', fontWeight:'200'}}>Hi I am Animal Componenet</p> */}
                <img style={imageStyle} src={img} alt=""></img>
                <h3> <span style={fontStyle}>Name:</span> {name}</h3>
                <p> <span style={fontStyle}>Email:</span> {email}</p>
                <p> <span style={fontStyle}>Gender:</span> {gender}</p>
                <p> <span style={fontStyle}>Number:</span> {Number}</p>
            </div>
        </div>
    );
};

export default Animal;