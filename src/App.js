import Form from './Components/Form';
import Students from './Components/Students';

function App() {
  return (
    <div className="App"style={{display:'flex',flexDirection:'row'}}>
     <Form/>
     <div style={{marginLeft:30}}>
     <Students/>
     </div>
    </div>
  );
};

export default App;
