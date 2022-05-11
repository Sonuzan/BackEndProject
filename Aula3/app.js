function started() {
    console.log("Download has started");
}

function update(progress){
    console.log("Download at: " + progress + "%")
}

function completed(){
    console.log("Download completed!")
}

function performDownload(started_fn,update_fn,completed_fn){
    started_fn();
    for (let progress = 0; progress <= 100; progress++) {
        update_fn(progress);
    }
    completed_fn();
}

//performDownload(started,update,completed);

var arrayUtils = require("./arrayUtils.js");

var array = [2,4,6,7,8];

console.log(arrayUtils.Contains(array,5));

