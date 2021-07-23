const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching (array, string) {
    return array.filter(x => x.toLowerCase() === string.toLowerCase()) 
}

function fuzzyMatch (array, string){
    return array.filter (x => x.startsWith(string))
}

function matchName (array, string){
    return array.filter (x => x.name===string)
}
