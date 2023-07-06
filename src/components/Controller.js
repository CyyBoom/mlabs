import Home from './Home';
import Schedueler from './Schedueler';
// import PostList from './PostList';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from './Header';

function Controller() {
    return (
        <>
            <Header />
            <BrowserRouter >
                <Routes>   
                    <Route path="/" element={<Home />}/>
                    <Route path="/schedueler" element={<Schedueler />}/>
                    {/* <Route path="/postList" element={<PostList />}/> */}
                </Routes>
            </BrowserRouter >
        </>
    )
  }
  
  
  export default Controller;