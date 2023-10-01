import "./App.css";
// import MyButton from "./Components/Button/MyButton";
// import ShoppingList from './Components/List/List';
// import TicTacToe from './Components/TicTacToe/ticTacToe';
// import CreateFolderFiles from './Components/CreateFolderFile/CreateFolderFiles';
import Navbar from "./Components/common/Navbar/Navbar";
import TextForm from "./Components/TextForm/TextForm";

function App() {
  return (
    <div className="App">
      {/* <MyButton />
      <MyButton /> */}
      {/* <ShoppingList /> */}
      {/* <TicTacToe /> */}
      {/* <CreateFolderFiles /> */}
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
      <Navbar /> 
<TextForm heading="Enter the text to analyze below"/>
    </div>
  );
}

export default App;
