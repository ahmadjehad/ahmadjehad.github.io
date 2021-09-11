
        var name = prompt('Please enter your name:');
        var age = prompt('Please enter your age:');
        alert('The Following Questions to Determine Your Level.');
        var mathOperation;
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }
        var score = 0;
        var level;
        for (let i = 1; i <= 5; i++) {
            var firstNumber = getRandomInt(10);
            var secondNumber = getRandomInt(10) + 1;
            var realAnswer;
            switch (getRandomInt(4) + 1) {
                case 1:
                    mathOperation = '+';
                    realAnswer = firstNumber + secondNumber;
                    break;
                case 2:
                    mathOperation = '-';
                    realAnswer = firstNumber - secondNumber;
                    break;
                case 3:
                    mathOperation = '*';
                    realAnswer = firstNumber * secondNumber;
                    break;
                case 4:
                    mathOperation = '/';
                    realAnswer = firstNumber / secondNumber;
                    break;
            }

            var userAnswer = prompt('Q' + i + ' )  ' + firstNumber + ' ' + mathOperation + ' ' + secondNumber + '\nPlease enter the answer:');

            if (realAnswer == userAnswer) {
                score += 2;
            }

        }
        if (score >= 7) {
            level = "Hard level";
        }
        else if (score < 7 && score >= 5) {
            level = "Intermediate level";
        }
        else {
            level = "Easy level";
        }

        document.getElementById("name").textContent = 'Name: ' + name;
        document.getElementById("age").textContent = 'Age: ' + age;
        document.getElementById("level").textContent = 'Level: ' + level;
