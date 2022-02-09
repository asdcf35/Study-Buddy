
clicked = 0;
function clickIncrease(){
    clicked++;
    return clicked;
}
let PomodoroTimer = Vue.createApp({
    data() {
        return {
            minutes: 25,
            seconds: 0,
            timerResumeToPause: "Pause",
        };
    },
    mounted() {
        // make a pomdodoro timer function in js
        this.timer = setInterval(() => {
            // do not go below 0
            if (this.seconds === 0) {
                if (this.minutes === 0) {
                   clearInterval(this.timer);
                   alert('Time is up!');
                } else {
                    this.minutes--;
                    this.seconds = 59;
                }
            } else {
                this.seconds--;
            }
        }, 1000);
        
    },
    methods: {
        reset() {
            this.minutes = 25;
            this.seconds = 0;
        },
        pause() {           
            if (this.timerResumeToPause === "Pause") {
                clearInterval(this.timer);
                this.timerResumeToPause = "Resume";
            } else {
                this.timer = setInterval(() => {
                    // do not go below 0
                    if (this.seconds === 0) {
                        if (this.minutes === 0) {
                           clearInterval(this.timer);
                           alert('Time is up!');
                        } else {
                            this.minutes--;
                            this.seconds = 59;
                        }
                    } else {
                        this.seconds--;
                    }
                }, 1000);
                this.timerResumeToPause = "Pause";
        }
        },
        breakTime() {
            this.minutes = 5;
            this.seconds = 0;
        },
        study() {
            this.minutes = 25;
            this.seconds = 0;
        },
},
});

PomodoroTimer.mount("#pomodoro-timer");

