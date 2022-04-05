import Chessground from 'react-chessground'
import 'react-chessground/dist/styles/chessground.css'


const App = () =>{

  const config = {
    animation : {
      enabled:false
    }
  };
  return <div>
    <h1>React Chessground</h1>
    <h2>https://github.com/ruilisi/react-chessground</h2>
    <Chessground config={config}/>
    <h2>Configurcaiones</h2>
    <h2>https://github.com/lichess-org/chessground/blob/master/src/config.ts</h2>
  </div>

}

export default App;
