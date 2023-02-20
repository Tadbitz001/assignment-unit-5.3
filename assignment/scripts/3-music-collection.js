console.log('***** Music Collection *****')

let collection = [];
//create an empty array called collection.

function addToCollection (title, artist, yearPublished) {
//creates functon named addToCollection with parameters of title, artist, yearPublished.    
//now create a object with parameters with following inputs.
    const theCollection = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    }
collection.push(theCollection);
//Adds the object to empty collection array.

return theCollection;
//returns the newly defined object.
}

addToCollection ('Purple Rain', 'Prince', 1984);
//add fist item to collection array.
console.log(collection);
//test to see if collection array has newly inputed song.
addToCollection ('As it Was', 'Harry Styles', 2022);
addToCollection ('Bad Habits', 'Ed Sheeran', 2021);
addToCollection ('Pumped Up Kicks', 'Foster The People', 2011);
addToCollection ('Let Her Go', 'Passenger', 2012);
addToCollection ('Broken', 'Lovely the band', 2018);
//add the other albums to collection

console.log(collection);
//console log the collection array.

//create function called showCollection with parameter of albums
function showCollection (albums) {
    console.log(`Number of items in collection: ${albums.length}`);
    //logs the length of the collection with the .length method.
    //use for loop to create new array called album that returns each album on loop.
    for (let i=0; i<albums.length; i++) {
        const album = albums[i];
        console.log(`"${album.title}" by ${album.artist}, published in ${album.yearPublished}`)
    }// console logs a sentence with album title, artist, and year published.
}

let theArtist = [];
// set theArtist as an empty array,.
//create function called findByArtist
function findByArtist (artist) {
for (let i=0; i<collection.length; i++) {
    const album = collection[i];
    //create loop for checking the collection array 
    //create album that represents each i of loop

    if (album.artist === artist) {
        theArtist.push(album);
    }
    //if album from loop matches the input artist then it adds to the empty theArtist array.
} 
//create conditional if theArtist has an item in it, then it will return the theArtist array.
if (theArtist.length>0) {
    return theArtist;
}else {
    return [];
}//if the length is 0, then it return, empty array [].
}
const esAlbum = findByArtist('Ed Sheeran');
console.log(esAlbum);
//should return Bad Habits, Ed Sheeran, 2021

//Stretch GOALS

let firstSearch = {artist: 'Ed Sheeran', year: 2021};
let results = [];
function search (searchItem) {
    for (let i=0; i<collection.length; i++) {
        const searchAlbum = collection[i];
        if (searchAlbum.artist === searchItem.artist && searchAlbum.year === searchItem.year) {
            results.push(searchAlbum);
        }
        if (searchAlbum.artist !== searchItem.artist && searchAlbum.year !== searchItem.year){
            return [];
        }
        else {
            return collection;
        }
    }
}

console.log(search(firstSearch));