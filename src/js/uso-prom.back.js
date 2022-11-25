import './style.css';
import { buscarHeroe as buscarHeroeCallback } from './js/callbacks'
import { buscarHeroe } from './js/promesas';

const heroeId1 = 'capi1';
const heroeId2 = 'spider '



// buscarHeroe( heroeId, (heroe) => {
    
//     if( heroe ) {
//         console.log( heroe );
//     }else{
//         console.error('ALgo salio mal' )
//     }

    
// } );

// buscarHeroe( heroeId1).then(heroe1 => {
//     // console.log(`Enviando a ${heroe.nombre} a la msion` )
//     buscarHeroe( heroeId2).then( heroe2 =>{
//         console.log( `Enviando a  ${heroe1.nombre} y ${ heroe2.nombre} a la mision` )
//     });

// })

Promise.all([buscarHeroe(heroeId1),buscarHeroe(heroeId2)])
    .then( ([heroe1,heroe2]) =>{
    
        console.log( `Enviando a  ${heroe1.nombre} y ${ heroe2.nombre} a la mision` );
} ).catch( err => {
    alert (err)
}).finally( () =>{
    console.log('se termino el promise.all')
})




