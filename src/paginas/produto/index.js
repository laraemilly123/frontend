import {Link, useParams} from'react-router-dom'


function Produto() {
  const {id}= useParams();
    return (
      <div className='App'>
         <h1> Produto : {id} </h1>
         <Link to= "/home"> ir para home:P </Link>
      </div>
    );
  }
  
  export default Produto;