    var FootballBot = require('footballbot');
    var bot = new FootballBot('/dev/rfcomm0');
    var keypress = require('keypress');
    var _ = require('underscore');
    var allowedKeys = ['up', 'left', 'right', 'down'];

    var leftMotor = new FootballBot.Motor({
        pins: {
            pwm: 9,
            dir: 7
        }
    });
    var rightMotor = new FootballBot.Motor({
        pins: {
            pwm: 10,
            dir: 8
        }
    });
    bot.on('ready', function() {

        bot.attach(leftMotor);
        bot.attach(rightMotor);
        // keypress
        // leftMotor.start();
        // rightMotor.start();
        leftMotor.rev(255)
        rightMotor.rev(255)
        console.log("ready!");
        keypress(process.stdin);
        // listen for the "keypress" event
        process.stdin.on('keypress', function(ch, key) {
            console.log(key);
            if (key.name) {
                if (_.contains(allowedKeys, key.name)) {
                    handleKeypress(key);

                }
                // leftMotor.start()
                // rightMotor.start()
                // setTimeout(function() {
                //     leftMotor.stop();
                //     rightMotor.stop();
                // }, 5000);


            }

        });
    });

    function handleKeypress(key) {
        // leftMotor.speed(255)
        switch (key.name) {
            case 'up':
                console.log('up');
                leftMotor.start();
                rightMotor.rev(225);
                console.log(rightMotor.rev)
                // leftMotor.start(-255);
                // rightMotor.start(-255);
                break;
            case 'down':
                console.log('down');

                leftMotor.stop()
                rightMotor.stop()
                // leftMotor.stop(255)
                // rightMotor.stop(255)

                break;
            case 'right':
                rightMotor.start(-255);
                break;
            case 'left':
                leftMotor.start(-255);
                break;
            default:
                // function() {}
        }

    }
