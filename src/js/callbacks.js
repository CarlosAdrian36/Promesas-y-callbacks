
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


export const buscarHeroe = (id, callback)=>{


    const heroe = heroes[id];

    callback( heroe );
}

