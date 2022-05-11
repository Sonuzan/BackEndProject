class Emitter{
    constructor(){
        this.event = {};
    }
}

//type = "greet"
//listener = function()


Emitter.prototype.on = function (type,listener) {
    if (this.event[type] == undefined) {
        this.event[type] = [];
    }
    this.event[type].push(listener);
};