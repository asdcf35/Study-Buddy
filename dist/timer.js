let PomodoroTimer = Vue.createApp({
    data() {
        return {
            minutes: 25,
            seconds: 0,
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
            clearInterval(this.timer);
        },
        resume() {
            minusing_quality = 0;
            this.timer = setInterval(() => {
                if (this.seconds == 0) {
                    this.seconds = 60;
                    this.minutes--;
                }
                if(minusing_quality == 0){
                    minusing_quality++;
                }
                this.seconds -= minusing_quality;
            }, 1000);
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

