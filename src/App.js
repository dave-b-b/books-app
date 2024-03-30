
import Landing from "./components/Landing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookDeck from "./components/BookDeck";
import Navigation from "./components/Navigation";
import BookDeck2 from "./components/BookDeck2";
import NotFound from "./components/NotFound";

function App() {

    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/deck" element={<BookDeck />} />
                <Route path="/deck2" element={<BookDeck2 />} />
            </Routes>
        </Router>

    );
}

export default App;
