const apiKey = "58c333b428eb5fcaf04def8df92f0c29";
const characterName = "Niko_Kovac";
const serverName = "Odin";

fetch("https://www.fflogs.com/v1/rankings/character/${characterName}/${serverName}/US?api_key=${apiKey}")
    .then(response => response.json())
    .then(data => {
        // Process the data reutrned from the API
        console.log(data);
        //Display the raid perofrmance data on your website
        // ...
    })
    .catch(error => {
        console.error("Error:", error);
    });