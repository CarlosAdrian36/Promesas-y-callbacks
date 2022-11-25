
const  heroes = {
    capi:{
        nombre: 'Capitan',
        poder: 'No morir'
    },
    iron:{
        nombre:'Ironman',
        poder: 'Volar'
    },
    spider:{
        nombre:'spiderman',
        poder: 'la mejor reaccion'
    },
}


export const buscarHeroe = ( id ) => {

    const heroe = heroes[ id ];
    
    return new Promise( (resolve,reject) =>{

        if ( heroe){
            resolve( heroe );

        }else {
            reject(`No existe un heroe con el id ${ id }`);
        }

    })

    


}