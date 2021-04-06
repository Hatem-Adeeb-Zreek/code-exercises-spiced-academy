(function () {
    // import modules
    const readline = require("readline");
    const chalk = require("chalk");

    // create interface method
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    // myStory obj
    const myStory = {
        question: "Do you like Programming Languages? ",
        answers: {
            no: "Good luck in your life",
            yes: {
                question: "Do you know JavaScript? ",
                answers: {
                    no:
                        "I advice you to learn it. You can be a student in Spiced Academy and learn amazing things. Tschuss!!",
                    yes: {
                        question: "Are you profi or junior in JavaScript? ",
                        answers: {
                            profi: "You are the Man -_*",
                            junior:
                                "You can take a Web-Development course in Spiced Academy, then you will be a profi !!!!",
                        },
                    },
                },
            },
        },
    };

    // welcome interface
    rl.question(
        "Hello to my Programmer Game +_* PLZ tell me your name: ",
        (answer) => {
            console.log(
                ` Let us Start the game ${chalk.bgBlackBright.blue(answer)}`
            );
            questionary(myStory);
        }
    );

    // questionary function
    function questionary(obj) {
        rl.question(chalk.redBright(obj.question), (answer) => {
            if (typeof obj.answers[answer] === "string") {
                console.log(chalk.blueBright(obj.answers[answer]));
                rl.close();
            } else if (typeof obj.answers[answer] === "object") {
                questionary(obj.answers[answer]);
            } else {
                console.log(chalk.grey("PLZ answer the right answer +_+"));
                questionary(obj);
            }
        });
    }

    // invoke the questionary function
    questionary(myStory);
})();
