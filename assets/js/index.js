fetch('./assets/json/data.JSON')
    .then(res => {
        return res.json();
    })
    .then(data => {
        let recentArray = data["recent"]; //Sets the recent array to recentArray
        let arrays = recentArray[0]; //Selects the index with all of the data
        let recentListens = arrays["recentListens"]; //Gathers all data on recentListend

        //Fills the recently listened table 
        let listensTable = document.getElementById("TopListened");
        for (let i = 0; i < recentListens.length; i++) {
            let row = listensTable.insertRow(-1);

            //js for the album image cell
            let image = row.insertCell(0);
            //Adding css classes
            image.classList.add("column");
            image.classList.add("smallcolumn");
            //Creating and setting image that will go into cell
            let img = document.createElement("IMG");
            img.src = recentListens[i].image;
            //Adding css classes to the image
            img.classList.add("smallalbum");
            img.classList.add("image");
            //Append the image into the cell
            image.appendChild(img);

            //js for the song cell
            let song = row.insertCell(1);
            song.classList.add("column");
            song.classList.add("song");
            song.innerHTML = recentListens[i].song;

            //js for artist cell
            let artist = row.insertCell(2);
            artist.classList.add("column");
            artist.classList.add("artist");
            artist.innerHTML = recentListens[i].artist;

            //js for last listened cell
            let listened = row.insertCell(3);
            listened.classList.add("column");
            listened.classList.add("listened");
            listened.innerHTML = recentListens[i].lastListened;
        }

        //Javascript for the top artists flexbox
        let topArtists = arrays["topArtists"];
        let artists = document.getElementById("artists");
        for (let i = 0; i < topArtists.length; i++) {
            //Creates container and adds css styling
            let container = document.createElement("DIV");
            container.classList.add("container");

            //creates image element for artist picture, adds css styling and sets the image to the current value of image
            let img = document.createElement("IMG");
            img.classList.add("artistimage");
            img.src = topArtists[i].image;
            container.appendChild(img);

            //creates the overlay text, styles it and sets it to the current value of artist
            let overlaytext = document.createElement("DIV");
            overlaytext.classList.add("overlay-text");
            //Creates the text element for the artist
            let artisttext = document.createElement("P");
            artisttext.classList.add("artist-text");
            artisttext.innerHTML = topArtists[i].artist;
            overlaytext.appendChild(artisttext);
            //creates the text element for the amount of listens
            listenedtext = document.createElement("P");
            listenedtext.classList.add("listens-text");
            listenedtext.innerHTML = topArtists[i].totalListens + " Listens";
            overlaytext.appendChild(listenedtext);

            //Appending created elements
            container.appendChild(overlaytext);
            artists.appendChild(container);
        }

        /*
        <td class bar><div></div></td>
        */
        let topTracks = arrays["topTracks"];
        let trackstable = document.getElementById("TopTracks");

        //Calculates the song with the highest listens so a percentage can be made for the bar charts
        let highestListens = 0;
        for(let i = 0; i < topTracks.length; i++) {
            let currentListens = parseInt(topTracks[i].totalListens);
            if (currentListens > highestListens) {
                highestListens = parseInt(topTracks[i].totalListens);
            }
        }

        

        for(let i = 0; i < topTracks.length; i++){
            let row = trackstable.insertRow(-1);
            //js for the album image cell
            let image = row.insertCell(0);
            //Adding css classes
            image.classList.add("column");
            image.classList.add("smallcolumn");
            //Creating and setting image that will go into cell
            let img = document.createElement("IMG");
            img.src = topTracks[i].image;
            //Adding css classes to the image
            img.classList.add("smallalbum");
            img.classList.add("image");
            //Append the image into the cell
            image.appendChild(img);

            //js for the song cell
            let song = row.insertCell(1);
            song.classList.add("column");
            song.classList.add("song");
            song.innerHTML = topTracks[i].song;

            //js for artist cell
            let artist = row.insertCell(2);
            artist.classList.add("column");
            artist.classList.add("artist");
            artist.innerHTML = topTracks[i].artist;

            //js for last listened cell
            let listened = row.insertCell(3);
            listened.classList.add("column");
            listened.classList.add("listened");
            listened.innerHTML = topTracks[i].totalListens + " Listens";

            let listenbarchart = row.insertCell(4);
            listenbarchart.classList.add("column");
            let barDiv = document.createElement("DIV");

            //Sets the width to the percentage of listens it has in relation to the top listened song
            let barPercentage = (parseInt(topTracks[i].totalListens)/highestListens) * 100;
            barDiv.style.width = String(barPercentage) + "%";
            barDiv.classList.add("barColors")

            listenbarchart.appendChild(barDiv);
        }
    })