import React from "react";

//we use route in order to define different routes in our applicatoin
import { Route, Routes } from "react-router-dom";

//we import all the components we need in our app

import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";

const App = () => {
    return(
        <div>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<RecordList />} />
                <Route path="/edit/:id" element={<Edit />} />
                <Route path="/create" element={<Create />}/>

            </Routes>
        </div>
    );
};

export default App;