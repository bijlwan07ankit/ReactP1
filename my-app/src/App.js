import './App.css';
import Navbar from './component/Navbar.mjs';
import TextForm from './component/TextForm.mjs';
function App() {
  return (
    <>
<Navbar title="Textutil2" aboutText="About me"/>
<div className="container" my-3> 
<TextForm heading="Enter the text to Analyze below"/>
</div>
   </>
  );
}

export default App;
