import './style.css';
import { buscarHeroe } from './js/callbacks'

const heroeId = 'capi';



buscarHeroe( heroeId, (heroe) => {
    
    if( heroe ) {
        console.log( heroe );
    }else{
        console.error('ALgo salio mal' )
    }

    
} );






