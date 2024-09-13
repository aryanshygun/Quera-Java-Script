// https://quera.org/college/16059/chapter/64208/lesson/220907/?comments_page=1&comments_filter=ALL

function sortNames(names) {

    function isShort(name) {
        let firstName = name.split(' ')[0]
        return firstName.length <= 6
    }
    names = names.filter(isShort)

    
}


// const n = parseInt(readline());
// const namesArray = [];
// for (let i = 0; i < n; i++) 
//     namesArray.push(readline());


let namesArray = ['Ron Weasley', 'Severus Snape', 'Rubeus Hagrid', 'Harry Potter']


console.log(sortNames(namesArray).join('\n'));