
import React, { useState,useEffect } from 'react';
import ToDolist from './ToDolist';
import './App.css';

const App = () => {
     const[inputItem,setinputItem]=useState("");
     const [list,setlist]=useState([]);
    const itemEvent=(event)=>{
          setinputItem(event.target.value)
    }
    const addItem=()=>{
        // console.log("clicked");
        setlist((oldItems)=>{
            return [...oldItems,inputItem];
        }
       
        );
      setinputItem("");
        
      
    };

 
    const deleteit=(id)=>{
        console.log("deleted");
        setlist((oldItems)=>{
            return oldItems.filter((  arrElem,index)=>{
              return index!==id;
            })
        })
    }
    return (
        <>
        <div id="mainheading"> MAKE YOUR DAY PRODUCTIVE</div>
      
            <div className='main_div'>
            
                <div className='center_div'>
                    <br />
                    <div id="heading"><h2>ToDo List</h2></div>
                    <br />
                    <input type="text" placeholder='Add items' value={inputItem} onChange={itemEvent}/>
                    <button id="additem"onClick={addItem} > + </button>
                    <div className='list'>
                            
                           {list.map((itemval,index)=>{
                              return <ToDolist 
                              key={index}
                              id={index}
                               text={itemval}
                               onSelect={deleteit}/>
                           })}
                      
                    </div>
                </div>

            </div>

        </>
    );
};

export default App;