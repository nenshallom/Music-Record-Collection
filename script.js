// record collection array
const recordCollection = [];


function addRecord(title, artist, year, genre) {
    

     //  function to check input is not empty
     if (!isValidRecordInput(title, artist, year, genre)) {
        console.log("❌ Record not added: All fields are require valid input.");
        return;
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
    // loop through the collection using forof
    for (const record of recordCollection) {
        if (record.title.toLowerCase() === title.toLowerCase()) {
            console.log(`🎵 Record found:`);
            console.log(`Title: ${record.title}`);
            console.log(`Artist: ${record.artist}`);
            console.log(`Year: ${record.year}`);
            console.log(`Genre: ${record.genre}`);
            return;
        }
        return record;
    }
    console.log(`❌ Record not found`);
    
}

// test
findRecordByTitle("thriller");
findRecordByTitle("Moon");