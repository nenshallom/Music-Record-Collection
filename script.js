// record collection array
const recordCollection = [];

function loopThroughMatch(match) {
    for (const record of match) {
        console.log(`Title: ${record.title}`);
        console.log(`Artist: ${record.artist}`);
        console.log(`Year: ${record.year}`);
        console.log(`Genre: ${record.genre}`);
        console.log("-------------------------");
    }
    
}


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
addRecord("The Dark Side of the Moon", "Pink Floyd",  2001, "classic");     
addRecord("Back in Black", "AC/DC", 2002, "Rock");
addRecord("Thriller", "Michael Jackson", 2003, "Pop");
addRecord("The Dark Side of the Moon", "Pink Floyd", 2003, "Rock");
addRecord("Moon", "Pink Floyd", 2004, "Rock");
addRecord("pressure", "demrick", 2012, "Hip Hop");
addRecord("blessings", "demrick", 2013, "Hip Hop");
addRecord("regardless", "demrick", 2014, "Hip Hop");



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
            const matchRecord  = {
                title: musician.title,
                artist: musician.artist,
                year: musician.year,
                genre: musician.genre
            }
            match.push(matchRecord);
            // return;
        }
    }

    if (match.length === 0) {
        console.log("❌ Record not found");
    } else {
        console.log(`🎵 Artsit Record found:`);
        loopThroughMatch(match);
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
// updateRecord("the Dark Side of the Moon", {
//     title: "The Dark Side of the sun",
//     artist: "Pinky",
//     year: 2024,
//     genre: "afro"
// });
// console.log(recordCollection);

// filtering records by genre
function filterByGenre(genre) {
    const searchGenre = String(genre).toLowerCase();

    // check if genre is empty
    if (genre.trim().length === 0) {
        console.log("❌ Genre is empty.");
        return;
    }

    const match = [];
    // looping through the record collection with for...of loop
    for (const record of recordCollection) {
        if (record.genre.toLowerCase() === searchGenre) {
            const matchRecord = {
                title: record.title,
                artist: record.artist,
                year: record.year,
                genre: record.genre
            }
            match.push(matchRecord);
        }
    }

    if (match.length === 0) {
        console.log("❌ No record found");
    } else {
        console.log(`🎵 Genre Record found:`);
        loopThroughMatch(match);
        return match;
    }
}
// test
// filterByGenre("rock");

// filter by year
function filterByYear(minYear) {
    // ensure minYEar is a number
    minYear = Number(minYear);
    if (isNaN(minYear)) {
        console.log("❌ Invalid year.");
        return;
    }
    const match = [];

    // loop through the collection using for...of
    for (const record of recordCollection) {
        if (record.year >= minYear) {
            const matchRecord = {
                title: record.title,
                artist: record.artist,
                year: record.year,
                genre: record.genre
            }
            match.push(matchRecord);
        }
    }
    if (match.length === 0) {
        console.log("❌ No record found");
    } else {
        console.log(`🎵 Filtered records from year ${minYear} and beyond...`);
        loopThroughMatch(match);
        return match;
    }
}
// test
// filterByYear(2012);

// sort records newest to oldest and alphabetically
// sort year ascending order
function sortByYear(order) {
    // create a copy of the original array to avoid mutation of original array
    const sorted = recordCollection.slice().sort((a, b) => {
        if (order === "asc") { 
            return a.year - b.year;
        } else if (order === "desc") {
            return b.year - a.year;
        } else {
            console.log("❌ Invalid order. Use 'asc' or 'desc'.");
            return 0;
        }
    });
    return sorted;
}

// console.log(sortByYear("asc"));
// console.log(sortByYear("desc"));

// sort records by title(A-Z, Z-A)
function sortByTitle(order) {
    // check for valid input
    if (order !== "asc" && order !== "desc") {
        console.log("❌ Invalid order. Use 'asc' or 'desc'.");
        return [];
      }
    // create a copy of the original array to avoid mutation of original array
    const sorted = recordCollection.slice().sort((a, b) => {
        if (order === "asc") {
            // sort by title A-Z
            return a.title.localeCompare(b.title);
        } else if (order === "desc") {
            // sort by title Z-A
            return b.title.localeCompare(a.title);
        }
        else {
            console.log("❌ Invalid order. Use 'asc' or 'desc'.");
            return 0;
        }
    });
    return sorted;
}

// test
// console.log(sortByTitle("asc"));
// console.log(sortByTitle("dsc"));
