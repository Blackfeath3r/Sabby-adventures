import {Routes, Route} from 'react-router-dom';
import App from '../app/App'
import BigPicture from '../big-picture/big-picture.component';


const Home = ()=>{

  return(
    <Routes>
      <Route index element={<App />} />
      <Route path=':id' element={<BigPicture />} />
    </Routes>
  )

}

export default Home