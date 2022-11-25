

import { promesaLenta,promesaMedia,promesaRapida } from './js/promesas'

import { buscarHeroe, buscarHeroeAsync} from './js/promesas'

import { obtenerHeroesArr, obtenerHeroeAwait } from './js/await';

// promesaLenta.then( console.log);
// promesaMedia.then( console.log );
// promesaRapida.then( console.log );


// Promise.race([promesaLenta,promesaMedia,promesaRapida])
// .then( console.log).catch(console.warn)


// buscarHeroe('capi2')
//     .then(HEROE => console.log(HEROE))
//     .catch( console.warn);


// buscarHeroeAsync('iron2')
//     .then(heroe => console.log( heroe ))
//     .catch(console.warn)
//  obtenerHeroesArr().then(console.table)



obtenerHeroeAwait( 'capi2' ).then( heroes => {
   console.log( heroes )

}).catch ( console.warn )



