//Item array removal

/*const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala"
];
const nameToRemove = "Ahmad";

// names.splice(1, 1)

const newNames = names.filter(name => {
  let remove = name !== "ahmad";
  return remove;
});

console.log(newNames);*/

// When will we be there??

/*function calculateTime(info) {
  let time = info.destinationDistance / info.speed;
  console.log(time);

  let hours = parseInt(time, 10);
  let minutes = Math.round((time - hours) * 60);
  return hours + ":" + minutes;
}

const travelInformation = {
  speed: 50,
  destinationDistance: 432
};

const travelTime = calculateTime(travelInformation);
console.log(travelTime);*/


// Series duration of my life

/*const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0
  },
  {
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0
  }
];

let total = 0;
let yearsInMinutes = 80 * 365 * 24 * 60;

for (let i = 0; i < seriesDurations.length; ++i) {
  let serie = seriesDurations[i];
  let seriesTime = serie.minutes + serie.hours * 60 + serie.days * 24 * 60;
  const seriePercentage = (seriesTime * 100) / yearsInMinutes;
  console.log(serie.title + " " + seriePercentage.toPrecision(1) + "  %");
  total = total + seriePercentage;
}

console.log(total + "  %"); */


//My favorite songs

/*const songDatabase = [
  {
    songId: 1,
    title: "My baby",
    artist: "Soggy socks"
  },
  {
    songId: 2,
    title: "3 nails in wood",
    artist: "The carpenters"
  },
  {
    songId: 3,
    title: "Blacker than black",
    artist: "Instant coffee"
  },
  {
    songId: 4,
    title: "When is enough too little?",
    artist: "The spies girls"
  }
];

const myPlaylist = [];

function addSongToDatabase(song) {
  songDatabase.push(song);
}

addSongToDatabase({ songId: 5, title: "test", artist: "unkown" });

console.log(songDatabase);

function getSongByTitle(title) {
  const songs = songDatabase.filter(song => {
    return song.title === title;
  });
  if (songs.length > 0) return songs;
  else return undefined;
}

console.log(getSongByTitle("When is enough too little?"));

function addSongToMyPlaylist(title) {
  const song = getSongByTitle(title);
  if (song) song.forEach(song => myPlaylist.push(song));
}

addSongToMyPlaylist("When is enough too little?");
console.log(myPlaylist);*/

//NOnoN0nOYes (Note taking app)
let notes = [];

function addNote(id, content) {
  notes.push({ id: id, content: content });
}

addNote(1, "test");
addNote(2, "test 2");

console.log(notes);

function getNoteFromId(id) {
  if (!id || !Number.isInteger(id)) {
    console.log("error");
    return;
  }

  const note = notes.find(note => {
    return note.id === id;
  });
  return note;
}

console.log(getNoteFromId(2));

function allNotes() {
  return notes;
}

function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; ++i) {
    console.log(
      "The note with id " +
        notes[i].id +
        ", has the following note text: " +
        notes[i].content
    );
  }
}

logOutNotesFormatted();

function deleteAllNotes() {
  notes = [];
}

deleteAllNotes();

console.log(notes);
