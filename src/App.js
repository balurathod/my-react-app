import "./App.css";
import { BrowserRouter as Router, Route, Routes }
    from 'react-router-dom';

// import MyButton from "./Components/Button/MyButton";
// import ShoppingList from './Components/List/List';
// import TicTacToe from './Components/TicTacToe/ticTacToe';
// import CreateFolderFiles from './Components/CreateFolderFile/CreateFolderFiles';
import Navbar from "./Components/common/Navbar/Navbar";
// import TextForm from "./Components/TextForm/TextForm";
// import EntryForm from "./Components/EntryForm/EntryForm";

import Create from './Components/CRUDOperation/Create';
import Edit from './Components/CRUDOperation/Edit';
import Home from './Components/CRUDOperation/Home';

function App() {
  return (
    <div className="App">
      {/* <MyButton />
      <MyButton /> */}
      {/* <ShoppingList /> */}
      {/* <TicTacToe /> */}
      {/* <CreateFolderFiles /> */}
      <Navbar title="TextUtils" service="Service" entryForm="EntryForm" aboutText="About TextUtils"/>
      {/* <TextForm heading="Enter the text to analyze below"/> */}
      {/* <EntryForm /> */}
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/edit' element={<Edit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
