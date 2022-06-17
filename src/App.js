import Header from "./gameComponents/Header";


function App() {
    return (
        <>
            <Header/>
            <div className="game-screen">
                <button className={'start-game'}>Start Game</button>
            </div>
        </>
    );
}

export default App;
