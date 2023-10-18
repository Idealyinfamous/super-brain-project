//variable set up
let slot_screen = document.getElementById("slot_screen");
let reel = document.getElementsByClassName("reel");
let reels = document.getElementsByClassName("reels");
let stop_btn = document.getElementsByClassName("stop-btn");
let start_btn = document.getElementById("start-btn");

let sec = 100;           //slot reel rotation speed (runs per second)
let stopReelFlag =[];       //slot reel stop flag
let reelCounts = [];        //which image to position
let slotFrameHeight;        //frame size
let slotReelsHeight;        //overall reel (image)size
let slotReelItemHeight;     //size of one reel (image)
let slotReelStartHeight     //inital image value

//initialization
let slot ={
    init:function(){
        stopReelFlag[0] = stopReelFlag[1]= stopReelFlag[2] = false;
        reelCounts[0] = reelCounts[1] =reelCounts[2] = 0;
    }


    //click event
    start:function(){
        slot.init();
        for(let index = 0 ; index < 3 ;index++){
            slot.animation(index);
        }
    },

    //set first position

};
