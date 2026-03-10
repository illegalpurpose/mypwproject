import "@/App.css";
import { PudgeWarsGame } from "@/components/game/PudgeWarsGame";
import { Route, Routes } from "react-router-dom";
import Partner from "./Partner";

function App() {
    return (
        <Routes>
            <Route path="/" element={<PudgeWarsGame />} />
            <Route path="/go/partner" element={<Partner />} />
        </Routes>
    );
}

export default App;
