import React from 'react'
const name = "john"
const x= 10;
const y = 20;

const names = ['Brad','Marry','joe']
const loggedIn =true;
const styles={
  color:"red",
  fontSize:'55px'
};
const App = () => {
  return (
    <div className='text-5xl'>
     hello {name}
     <p style={styles}>sum of {x} and {y} is {x+y}</p>
    
    <ul>

      {names.map((name,index)=>(
<li key={index}> {name}</li>
      ))}
    </ul>
    {loggedIn && <h1> Hello Member</h1>
    }
    </div>
  )
}

export default App

