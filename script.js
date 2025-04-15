// record collection array
const recordCollection = [];


function addRecord(title, artist, year, genre) {
    

     //  function to check input is not empty
     if (!isValidRecordInput(title, artist, year, genre)) {
        console.log("❌ Record not added: All fields are require valid input.");
        return musician;
    }
    
    

    // Helper function to validate record input
    function isValidRecordInput(title, artist, year, genre) {
        if (!title || !artist || !genre) {
            return false;
        }
        if (typeof year !== "number" || isNaN(year)) {
            return false;
        }
        return true;
    }

    const record = {
        "title": title,
        "artist": artist,
        "year": year,
        "genre": genre
    }
   
    // push the record
    recordCollection.push(record);
}
// test the addRecord function
addRecord("The Dark Side of the Moon", "Pink Floyd",  1090, "classic");     
addRecord("Back in Black", "AC/DC", 1980, "Rock");
addRecord("Thriller", "Michael Jackson", 1982, "Pop");
addRecord("The Dark Side of the Moon", "Pink Floyd", 1972, "Rock");
addRecord("Moon", "Pink Floyd", 1972, "Rock");
addRecord("pressure", "demrick", 2012, "Hip Hop");
addRecord("blessings", "demrick", 2012, "Hip Hop");
addRecord("regardless", "demrick", 2012, "Hip Hop");



// function to view records
function viewRecords () {
    // check if the collection is empty
    if (recordCollection.length === 0) {
        console.log("❌ No records found.");
        return;
    }

    // loop through the collection using for...of
    let index = 0;
    for (const record of recordCollection) {
        console.log(`🎵 Record ${index += 1}:`);
        console.log(`Title: ${record.title}`);
        console.log(`Artist: ${record.artist}`);
        console.log(`Year: ${record.year}`);
        console.log(`Genre: ${record.genre}`);
        console.log("-------------------------");
    
    }

}

// function to find record by title
function findRecordByTitle(title) {
    // check if the collection is empty
    if (recordCollection.length === 0) {
        console.log("❌ The record collection is empty. Nothing to search.");
        return;
    }
    // loop through the collection using for....of
    for (const record of recordCollection) {
        if (record.title.toLowerCase() === title.toLowerCase()) {
            // console.log(`🎵 Record found:`);
            // console.log(`Title: ${record.title}`);
            // console.log(`Artist: ${record.artist}`);
            // console.log(`Year: ${record.year}`);
            // console.log(`Genre: ${record.genre}`);
            // console.log("-------------------------");
            // for UI it should return the record
        
            return record;
        }
    }
    console.log(`❌ Record not found`);
}

// test
// findRecordByTitle("thriller");
findRecordByTitle("Moon");

// function to find record by artist
function findRecordByArtist(artist) {
    const match = [];

    // check if the collection is empty
    if (recordCollection.length === 0) {
        console.log("❌ The record collection is empty. Nothing to search.");
        return;
    }
    // loop through the collection using for....of
    for (const musician of recordCollection) {
        if (musician.artist.toLowerCase() === artist.toLowerCase()) {
            const recorder  = {
                title: musician.title,
                artist: musician.artist,
                year: musician.year,
                genre: musician.genre
            }
            match.push(recorder);
            // return;
        }
    }
    function loopThroughMatch() {
        for (const record of match) {
            console.log(`Title: ${record.title}`);
            console.log(`Artist: ${record.artist}`);
            console.log(`Year: ${record.year}`);
            console.log(`Genre: ${record.genre}`);
            console.log("-------------------------");
        }
    }
    if (match.length === 0) {
        console.log("❌ Record not found");
    } else {
        console.log(`🎵 Record found:`);
        loopThroughMatch();
        return match;
    }
}


// test
// findRecordByArtist("demrick");

// function to delete a record
function deletRecord(title) {
     const searchTitle = String(title).toLowerCase();

    //  find the book index
    const record = recordCollection.findIndex(record => record.title.toLowerCase() === searchTitle);
    if (record !== -1) {
        recordCollection.splice(record, 1);
        console.log(`✅ Record "${title}" deleted successfully.`);
    } else {
        console.log(`❌ Record "${title}" not found.`);
    }
}

// test
// deleteRecord("blessings");
// deleteRecord("bless");
// deleteRecord("blessings");
// console.log(recordCollection);

// function to update a record
function updateRecord(title, newData) {
    const searchTitle = String(title).toLowerCase();

    //  find the record index
    const record = recordCollection.find(record => record.title.toLowerCase() === searchTitle);
    if (!record) {
        console.log(`❌ Record "${title}" not found.`);
        return;
    }
    
    if (newData.title) record.title = newData.title;
    if (newData.artist) record.artist = newData.artist;
    if (newData.year) record.year = newData.year;
    if (newData.genre) record.genre = newData.genre;
    console.log(`✅ Record "${title}" updated successfully.`);
    return;
}

// test
updateRecord("the Dark Side of the Moon", {
    title: "The Dark Side of the sun",
    artist: "Pinky",
    year: 2024,
    genre: "afro"
});
// console.log(recordCollection);
