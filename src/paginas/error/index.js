import {Link} from'react-router-dom'


function Error() {
    return (
      <div> 
         <h1> :( Sorry, esta pagina nao existe! </h1>
         <Link to= "/"> ir para home:P </Link>
         
      </div>
    );
  }
  
  export default Error;