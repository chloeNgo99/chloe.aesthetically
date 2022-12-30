import React, { Component } from 'react';
import data from '../data.js';

const Project = () => {
    // const left = "<<";
    // const right = ">>"

    const [count, setCount] = React.useState(0);

    const [dataList, setDataList] = React.useState({
        title: data[count].title,
        date: data[count].date,
        description: data[count].description,
        link: data[count].link
    });

    function rightHandle() {
        if (count < 10) {
            setCount(prevCount => prevCount + 1);
            setDatafunction(count + 1);
        }
    }

    function leftHandle() {
        if (count > 0) {
            setCount(prevCount => prevCount - 1);
            setDatafunction(count - 1);
        }
    }

    function setDatafunction(count) {
        const arr = data;
        const newDate = arr[count].date;
        const newTitle = arr[count].title;
        const newDes = arr[count].description;
        const newLink = arr[count].link;
        setDataList(prevData => ({
            title: newTitle,
            date: newDate,
            description: newDes,
            link: newLink
        }));
    }


    return (
        <>
            <div className='projectHeader' id ="projectSection">
                <h1>{dataList.title}</h1>
            </div>
            <div className="projectTitle">
                <iframe src={dataList.link} frameborder='0'></iframe>
            </div>
            <div className="arrow">
    
                    <img className="leftButton" onClick={leftHandle} src="./images/up.png" />
           
          
                    <img className="rightButton" onClick={rightHandle} src="./images/dowb.png" />
    
            </div>
            <div class="project">
                <ul>
                    <p className='projectDate'>{dataList.date}</p>
                    <p>{dataList.description}</p>
                </ul>
            </div>
        </>
    );

};

export default Project;