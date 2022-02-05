clicked = 0;
let PomodoroTimer = Vue.createApp({
    data() {
        return {
            minutes: 25,
            seconds: 0,
            isPaused: false,
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
            // pause the timer
            this.isPaused = true;
        },
        resume() {
            clicked++;
            for(i==0; i<; i++){
                if (this.seconds == 0) {
                    this.seconds = 60;
                    this.minutes--;
                }
                if(clicked == 1){
                    this.seconds -= clicked;
                } else{
                    clicked == 1;
                if(this.isPaused == True){
                    this.isPaused = false;
                    break;
                }
                }

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

