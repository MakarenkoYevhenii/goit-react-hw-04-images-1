import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Audio } from 'react-loader-spinner';

const Loader =()=>
{
    return(
        <Audio heigth="100" width="100" color="grey" ariaLabel="loading" />
    )
}

export default Loader