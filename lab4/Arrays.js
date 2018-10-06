// const arr = [`item1`, `item2`];

//let arr = new Array(10);

// arr = 1;

// arr[0] = `first item`;

// const cats = [`Bobby`, `Frederick`, `Tim`]

// for (let i = 0; i < cats.length; i++) {
//     console.log(i + "; " + cats[i])
// }

// console.log (`Cats: ${cats}`)

// cats[0] = "Tiger"

// console.log (`Cats: ${cats}`)

// cats[1] = "Peaches"

// console.log(cats.length);

// const animals = [`Cats`, `Dogs`, `Birds`]

// function addPet(name) {
//     animals.push(name)
// }

// function adoptPet (name) {
//     let index = pets.indexOf(name)
//     console.log(index)
//     animals.splice(index, 1)
// }

// function currentPets(){
//     animals.forEach(item => console.log(item))

//     for (let i = 0; i < pets.length; i++){
//         console.log(pets[i])
//     }
// }

// console.log (animals)


// let obj = {
//     name: `Vincent`
// }

// obj.name = `applablab`

// console.log (obj)

// let cats = [
//     {
//         name : `Bob Ross`,
//         lovescatnip: true

//     },
//     {
//         name : `Dude Cat`,
//         lovesskating: true
//     }
// ]

// console.log (cats[0].name)

const cats = [
    {
        name : 'BobRoss',
        lovescatnip : false
    },
    {
        name : 'DudeCat',
        lovescatnip : true
    }
];

function lovesCatNip(name){
    let cat = cats.filter(function (item){
        return item.name == name;
    })

    console.log(cat);
}

lovesCatNip (BobRoss)