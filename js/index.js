const fetchData = () => {
    
    axios.get("https://spreadsheets.google.com/feeds/list/1H5S6Vc-gCOCKLvQmfjfJmG2THtDb5Z_LQGaZJpWZQ4c/1/public/values?alt=json")
        .then(res => {
            let data = res.data.feed.entry.splice(0, 100)
            let timeDiff;
            let seconds;
            let minutes;
            let songData;
            
            for(let i = 0; i < data.length; i++) {
                console.log("DATA ", data[i])
                songData = {}
                timeDiff = data[i].gsx$durationms["$t"]
                seconds = timeDiff / 1000
                minutes = parseInt(seconds / 60)
                seconds = seconds % 60
                seconds = Math.floor(seconds)
                songData.artist = data[i].gsx$artist["$t"]
                songData.songTitle = data[i].gsx$songtitle["$t"]
                songData.album = "Hey Pex! Hire Me?"
                
                songData.dateAdded = `Nov 7, 2020`
                songData.duration = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`
                console.log("SONG DATA ", songData)
                let tr = document.createElement('tr');
                tr.style.color = "white"
                tr.className = "song-content"
                tr.innerHTML = `
                <td>
                    ${i + 1}
                </td>
                <td>
                    <div class="song-title-artist">
                        <div>${songData.songTitle}</div>
                        <div>${songData.artist}</div>
                    </div>
                </td>
                <td>
                    ${songData.album}
                </td>
                <td>
                    ${songData.dateAdded}
                </td>
                <td>
                    ${songData.duration}
                </td>
                `
                // li.innerHTML = `<div class="track-num-artist"><div>${i + 1}</div> <div class="song-title-artist"><p>${songData.songTitle}</p> <p>${songData.artist}</p></div></div> <div>${songData.album}</div> <div>${songData.dateAdded}</div> <div>${songData.duration}</div>`
                document.querySelector(".song-data-content").appendChild(tr)
            } 
        })    
}

fetchData();

