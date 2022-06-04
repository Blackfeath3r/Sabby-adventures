import {Link} from 'react-router-dom'
import '../picture/picture.styles.css'


const Photo = ({id, url, name})=>{
 
  return (
    <div className="col-6 image ">
      <Link to={`/${id}`}>
        <img className="img-fluid" src={url} alt={name} />
      </Link>
      
    </div>
  )
}

export default Photo;