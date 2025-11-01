
const dice = document.querySelector(".dice");
const rollBtn = document.querySelector(".roll");

let lastNumber = 0;

const randomDice = () => {
  let random;
  // ensure not same as previous number
  do {
    random = Math.floor(Math.random() * 6) + 1;
  } while (random === lastNumber);

  lastNumber = random;
  rollDice(random);
};

const rollDice = (random) => {
  // random spin before stop
  const extraX = Math.floor(Math.random() * 360) + 720; // more realistic spin
  const extraY = Math.floor(Math.random() * 360) + 720;

  dice.style.transition = "transform 2s ease-in-out";
  dice.style.transform = `rotateX(${extraX}deg) rotateY(${extraY}deg)`;

  // set final correct face after spin
  setTimeout(() => {
    switch (random) {
      case 1:
        dice.style.transform = "rotateX(0deg) rotateY(0deg)";
        break;
      case 2:
        dice.style.transform = "rotateX(-90deg) rotateY(0deg)";
        break;
      case 3:
        dice.style.transform = "rotateX(0deg) rotateY(90deg)";
        break;
      case 4:
        dice.style.transform = "rotateX(0deg) rotateY(-90deg)";
        break;
      case 5:
        dice.style.transform = "rotateX(90deg) rotateY(0deg)";
        break;
      case 6:
        dice.style.transform = "rotateX(180deg) rotateY(0deg)";
        break;
    }
  }, 2000); // match transition time
};

rollBtn.addEventListener("click", randomDice);
