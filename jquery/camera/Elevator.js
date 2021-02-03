class Elevator{

    constructor(){

        this.$elevator = $('.elevator');
        this.floorQtd = 3;
        this.initCamera();
        this.iniEvents();

    }

    initCamera(){

        navigator.mediaDevices.getUserMedia({
            video: true
        }).then(stream => {

            let video = this.$elevator.find('.camera')[0];

            video.srcObject = stream;

        }).catch(err => {
            console.error(err);
        })

    }
}