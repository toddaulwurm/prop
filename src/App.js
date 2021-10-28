import React from 'react';
import './App.css';
import PersonCard from './components/Prop';
import FunctionalComponent from './components/FunctionalComponent';


function App() {
  return (
    <div className="App">
      {/* PARAGRAPH is a CHILD of the PERSONCARD                                     vvvvv*/}
      <PersonCard firstName={"Jane"} lastName="Doe" age={45} hairColor="Black"><h1>PARAGRAPH</h1></PersonCard>
      <PersonCard firstName={"John"} lastName="Smith" age={88} hairColor="Brown"/>  
      <PersonCard firstName={"Millard"} lastName="Fillmore" age={50} hairColor="Brown"/>  
      <PersonCard firstName={"Maria"} lastName="Smith" age={62} hairColor="Brown"/>
          {/* below is a synthetic event!!! NOTE: Camel Casing */}
      <button onClick={ ()=> alert("This button has been clicked!") }>Click Me</button>

      {/* FUNCTIONAL COMPONENT USED BELOW (see js file for the difference from CLASS) */}
      <FunctionalComponent firstName={"THIS IS A"} lastName="FUNCTIONAL COMPONENT TEST" age={1} hairColor="Bro"/>
    </div>
  );

}

export default App;