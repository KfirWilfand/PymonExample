//Dangerously getting the game id
export function getGameId(){
    return location.href.split("/")[4]
}

//A wrapper for contacting the server (currently using vanilla fetch)
export function ajax(url, options, callbackFunc){
    fetch(url, options).then(function(response) { 
        return response.json();
    }).then(function(respJson) {
        if (callbackFunc !== undefined){
            callbackFunc(respJson);
        }
    }).catch(function (error) {  
        console.log('Ajax Request failure: ', error);  
    });
}
