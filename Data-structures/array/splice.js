/* Splice: 
se utiliza para añadir, eliminar o reemplazar elementos en un array. Modifica el array original.

array.splice(índiceInicio, númeroElementosAEliminar, elemento1, elemento2, ...);
*/

//1. Eliminar elementos


let arr1 = ['a', 'b', 'c', 'd'];
arr1.splice(1, 2);  // Elimina 2 elementos desde la posición 1
console.log(arr1);  // ['a', 'd']



//1. Añadir elementos:


let arr2 = ['a', 'b', 'c', 'd'];
arr2.splice(2, 0, 'x', 'y');  // No elimina nada, pero añade 'x', 'y' en la posición 2
console.log(arr2);  // ['a', 'b', 'x', 'y', 'c', 'd']



//1. Reemplazar elementos:


let arr3 = ['a', 'b', 'c', 'd'];
arr3.splice(1, 2, 'x', 'y');  // Elimina 2 elementos desde la posición 1 y añade 'x', 'y'
console.log(arr3);  // ['a', 'x', 'y', 'd']

