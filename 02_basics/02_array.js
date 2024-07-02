const marvel_heros=["thor","ironman","spiderman"]

const dc=["superman","flash","batman"]

// marvel_heros.push(dc)

// console.log((marvel_heros[3][1]));

// const superr =  marvel_heros.concat(dc);

// console.log(superr);
const all_heros=[...marvel_heros,...dc]

console.log(all_heros);