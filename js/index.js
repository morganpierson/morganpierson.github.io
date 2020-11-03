const fetchData = () => {
    axios.get("https://spreadsheets.google.com/feeds/list/1H5S6Vc-gCOCKLvQmfjfJmG2THtDb5Z_LQGaZJpWZQ4c/1/public/values?alt=json")
        .then(res => {
            const data = res.data.feed.entry.map(song => {
                return song.content
            })
            console.log("SONGS ", data)
            document.querySelector(".main").innerHTML = `<div>${data[0]["$t"]}</div>`
        })    
}

fetchData();

