const fetchData = () => {
    axios.get("https://spreadsheets.google.com/feeds/list/1H5S6Vc-gCOCKLvQmfjfJmG2THtDb5Z_LQGaZJpWZQ4c/1/public/values?alt=json")
        .then(res => {
            console.log("SONGS ", res.data.feed.entry)
            let data = res.data.feed.entry
            // using for loop over forEach to ensure we limit to first 100 entries
            for(let i = 0; i < 100; i++) {
                let li = document.createElement('li');
                li.innerHTML = data[i].content["$t"]
                document.querySelector(".main__content--song-list").appendChild(li)
            } 
        })    
}

fetchData();

