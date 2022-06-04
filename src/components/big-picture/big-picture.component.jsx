import {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import IMGS from '../images/images.component'
import {CSSTransition} from 'react-transition-group'
import Image from '../big-image/big-image.component'
import close from '../../icons/close.svg';
import left from '../../icons/left.svg';
import right from '../../icons/right.svg';
import './big-picture.styles.css';


const BigPicture = ()=>{
  const {id} = useParams();

  let numID = Number(id);

  const [inProp, setInProp] = useState(false);

  let [image, setImage] = useState({})

  

 useEffect(()=>{
   setImage(()=>{
     let imgInfo = IMGS.filter(img=>numID==img.id)
    return imgInfo[0]
    })
    
   
    setInProp(!inProp)

 },[numID])

 console.log(inProp)
 

  return(
    <div className="big-container" >
      <div className='left-icon' onClick={()=>setInProp(false)}>
        {numID>1 && <Link to={`/${ numID - 1}`}>
         <img src={left} alt='left'/>
        </Link>} 
      </div>
      <div className='img-container'>
       
        <img src={image.url} className={inProp? 'grow':''}/>
      
        
      </div>
      
      <div className='right-icon' onClick={()=>setInProp(false)} > 
        {numID <12 && <Link to={`/${numID + 1}`}>
          <img src={right} alt='right' />
        </Link>}
      </div>
     
      <div className='close-icon'>
        <Link to='/'>
          <img src={close} alt='close' />
        </Link>
      </div>
    
     
    </div>
  )

}


export default BigPicture