import React from 'react';
import Employee from './Employee';
import {FaGithubSquare} from 'react-icons/fa';

function App() {
  return <main>
         <section className="container">
            <div className="title">
                <h2>our employees</h2>
                <div className="underline"></div>
            </div>
            <Employee />
         </section>
         
     </main>;
}

export default App;
