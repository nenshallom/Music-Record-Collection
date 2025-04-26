// ========================
// 📦 Data: Record Collection
// ========================
const recordCollection = [];


// ========================
// 🎨 DOM Selections
// ========================

// form variables
const recordForm = document.querySelector("#record-form");
const titleInput = document.querySelector("#title");
const artistInput = document.querySelector("#artist");
const yearInput = document.querySelector("#year");
const genreInput = document.querySelector("#genre");
// sorting variables
const sortSelect = document.querySelector("#sort-select");
// search variables
const searchInput = document.querySelector("#search-input");

const recordList = document.querySelector(`#record-list`);


// ========================
// 🎨 Add items to record Collection
// ========================
addRecord("The Dark Side of the Moon", "Pink Floyd",  2001, "classic");     
addRecord("Back in Black", "AC/DC", 2002, "Rock");
addRecord("Thriller", "Michael Jackson", 2003, "Pop");
addRecord("The Dark Side of the Moon", "Pink Floyd", 2003, "Rock");
addRecord("Moon", "Pink Floyd", 2004, "Rock");
addRecord("pressure", "demrick", 2012, "Hip Hop");
addRecord("blessings", "demrick", 2013, "Hip Hop");
addRecord("regardless", "demrick", 2014, "Hip Hop");



// ========================
// 🎯 Core Functions
// ========================

// function to render records to the UI
function renderRecords(records) {
    // clear old content if any (inmportant for re rendering)
    recordList.innerHTML = "";

    if (records.length === 0) {
        recordList.innerHTML = "<div class='no-record'> No record found!.</div>";
        return;
    }

    // loop through the records and create a list item for each record using for...of loop
    for (const record of records) {
        // create the html block using template literals
        const recordHTML = 
        `<div class="record-card">
            <h3>${record.title}</h3>
            <p><strong>Artist:</strong> ${record.artist}</p>
            <p><strong>Year:</strong> ${record.year}</p>
            <p><strong>Genre:</strong> ${record.genre}</p>
            <button onclick="deleteRecord('${record.title}')">Delete</button> 
        </div>`
        // Append to the record list container
        recordList.innerHTML += recordHTML;
    }
}

// delete record function
function deleteRecord(title) {
    const deleteTitle = recordCollection.findIndex(record => record.title.toLowerCase() === title.toLowerCase());
    if (deleteTitle !== -1) {
        const deleteConfirmation = confirm(`Are you sure you want to delete "${title}"?`);
        if(deleteConfirmation) {
            recordCollection.splice(deleteTitle, 1);
            console.log(`✅ Record "${title}" deleted successfully.`);
        }
    } else {
        console.log(`❌ Record "${title}" not found.`);
    }
    // re-render the records after deletion
    renderRecords(recordCollection);
}

function loopThroughMatch(match) {
    for (const record of match) {
        console.log(`Title: ${record.title}`);
        console.log(`Artist: ${record.artist}`);
        console.log(`Year: ${record.year}`);
        console.log(`Genre: ${record.genre}`);
        console.log("-------------------------");
    }   
}

// Add record
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


// ========================
// 🧩 Event Listeners
// ========================

// Handl Form Input
recordForm.addEventListener("submit", function (event) {
    // prevent form from reload after submit
    event.preventDefault();

    const artist = artistInput.value.trim();
    const year = parseInt(yearInput.value.trim());
    const genre = genreInput.value.trim();
    const title = titleInput.value.trim();

    // check if the input is not empty
    if (!artist || isNaN(year) || !genre || !title) {
        alert("All fields are required.");
        return;
    }

    const newRecord = {
        title,
        artist,
        year,
        genre
    };

    // push new record to the collection
    recordCollection.push(newRecord);
    // re render the records
    renderRecords(recordCollection);
    // smooth scroll to newly added item
    const allRecords = document.querySelectorAll(".record-card");
    const lastRecord = allRecords[allRecords.length - 1];
    lastRecord.scrollIntoView({ behavior: "smooth" });
    // clear the form inputs
    recordForm.reset();
    
});

// Handle sorting
sortSelect.addEventListener("change", function (event) {
    // grab the current selected value from the dropdown
    const selectedOption = event.target.value;
    
    // create copy of original array to avoid mutation
    let sorted = [...recordCollection];


    // sort depending on the selected option
    if (selectedOption === "title-asc") {
        sorted.sort((a, b) => a.title.localeCompare(b.title));
    } else if (selectedOption === "title-desc") {
        sorted.sort((a, b) => b.title.localeCompare(a.title));
    } else if (selectedOption === "year-asc") {
        sorted.sort((a, b) => a.year - b.year);
    } else if (selectedOption === "year-desc") {
        sorted.sort((a, b) => b.year - a.year);
    }

    // render the sorted records 
    renderRecords(sorted);

});

// Handle LiveSearch
searchInput.addEventListener("input", function (event) {
    // format the inputed text to lowercase and trim
    const searchTerm = event.target.value.trim().toLowerCase();

    // using filter() to create and array and search every record
    const filtered = recordCollection.filter((record) => {
        return (
            // check if the search term appears in the title/artist/year/genre
            record.title.toLowerCase().includes(searchTerm) || 
            record.artist.toLowerCase().includes(searchTerm)
        )
    })

    // render the filtered records
    renderRecords(filtered);
});


// ========================
// 🖥️ Initial Render
// ========================
renderRecords(recordCollection);