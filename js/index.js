const fetchData = () => {
    const albums = ["Hey Pex!", " Hire Me?", "I Love Design and Code", "I Also Love Music", "I've Been a Musician My Entire Life!", "I Love Your Mission", "And I'd Love to be a Part of the Team!"]
    axios.get("https://spreadsheets.google.com/feeds/list/1H5S6Vc-gCOCKLvQmfjfJmG2THtDb5Z_LQGaZJpWZQ4c/1/public/values?alt=json")
        .then(res => {
            let data = res.data.feed.entry.splice(0, 100)
            let timeDiff;
            let seconds;
            let minutes;
            let songData;
            let j = 0;
            let k = 10;
            data = data.sort((a, b) => {
                return a.gsx$danceability["$t"] - b.gsx$danceability["$t"]
            });

            for(let i = 0; i < data.length; i++) {
                j = j > 6 ? 0 : j; 
                k = k < 1 ? 10 : k;
                songData = {}
                timeDiff = data[i].gsx$durationms["$t"]
                seconds = timeDiff / 1000
                minutes = parseInt(seconds / 60)
                seconds = seconds % 60
                seconds = Math.floor(seconds)
                songData.artist = data[i].gsx$artist["$t"]
                songData.songTitle = data[i].gsx$songtitle["$t"]
                songData.album = albums[j];
                j++;
                songData.dateAdded = `Nov 7, 2020`
                songData.duration = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`
                let tr = document.createElement('tr');
                tr.style.color = "white"
                tr.className = "song-content"
                tr.innerHTML = `
                <td>
                    <div class="song-index opacity-fade">${i + 1}</div>
                    <img src="assets/play_button.svg" class="hover-play-btn">
                </td>
                <td>
                    <div class="song-title-artist-img">
                        <img src="assets/album_${k}.png" class="album-img">
                        <div class="song-title-artist">
                        <div>${songData.songTitle}</div>
                        <div class="opacity-fade">${songData.artist}</div>
                        </div>
                    </div>
                </td>
                <td class="opacity-fade">
                    ${songData.album}
                </td>
                <td class="opacity-fade">
                    ${songData.dateAdded}
                </td>
                <td>
                    <div class="duration-td opacity-fade">
                        <img src="assets/heart.svg" class="duration-heart">
                        ${songData.duration}
                        <img src="assets/ellipse.svg" class="song-options-btn">
                    </div>
                </td>
                `
                k--
                document.querySelector(".song-data-content").appendChild(tr)
            } 
        })    
}

fetchData();

