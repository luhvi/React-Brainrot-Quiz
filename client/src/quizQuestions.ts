import tralaleroTralalaImg from "./assets/tralalero-tralala.png";
import cappuccinoAssassinoImg from "./assets/cappuccino-assassino.png";
import trippiTroppiImg from "./assets/trippi-troppi.png";
import brrBrrPatapim from "./assets/brr-brr-patapim.png";
import tungTungTungSahur from "./assets/tung-tung-tung-sahur.png";

type QuizQuestions = {
  [key: string]: {
    questionText: string;
    questionImgSrc: string;
    questionImgAlt: string;
    questionOptions: {
      firstOption: {
        text: string;
        isCorrect: boolean;
      };
      secondOption: {
        text: string;
        isCorrect: boolean;
      };
      thirdOption: {
        text: string;
        isCorrect: boolean;
      };
      fourthOption: {
        text: string;
        isCorrect: boolean;
      };
    };
  };
};

const quizQuestions: QuizQuestions = {
  firstQuestion: {
    questionText: "Who is this?",
    questionImgSrc: tralaleroTralalaImg,
    questionImgAlt: "Tralalero Tralala",
    questionOptions: {
      firstOption: {
        text: "Lirili Larila",
        isCorrect: false,
      },
      secondOption: {
        text: "Trippi Troppi",
        isCorrect: false,
      },
      thirdOption: {
        text: "Tralalero Tralala",
        isCorrect: true,
      },
      fourthOption: {
        text: "Tung Tung Tung Sahur",
        isCorrect: false,
      },
    },
  },
  secondQuestion: {
    questionText: "Who is this?",
    questionImgSrc: cappuccinoAssassinoImg,
    questionImgAlt: "Cappuccino Assasino",
    questionOptions: {
      firstOption: {
        text: "Tung Tung Tung Sahur",
        isCorrect: false,
      },
      secondOption: {
        text: "Ballerina Cappuccina",
        isCorrect: false,
      },
      thirdOption: {
        text: "Trippi Troppi",
        isCorrect: false,
      },
      fourthOption: {
        text: "Cappuccino Assasino",
        isCorrect: true,
      },
    },
  },
  thirdQuestion: {
    questionText: "Who is this?",
    questionImgSrc: trippiTroppiImg,
    questionImgAlt: "Trippi Troppi",
    questionOptions: {
      firstOption: {
        text: "Trippi Troppi",
        isCorrect: true,
      },
      secondOption: {
        text: "Tung Tung Tung Sahur",
        isCorrect: false,
      },
      thirdOption: {
        text: "Bombardino Crocodilo",
        isCorrect: false,
      },
      fourthOption: {
        text: "Tralalero Tralala",
        isCorrect: false,
      },
    },
  },
  fourthQuestion: {
    questionText: "Who is this?",
    questionImgSrc: brrBrrPatapim,
    questionImgAlt: "Brr Brr Patapim",
    questionOptions: {
      firstOption: {
        text: "Tung Tung Tung Sahur",
        isCorrect: false,
      },
      secondOption: {
        text: "Bombardino Crocodilo",
        isCorrect: false,
      },
      thirdOption: {
        text: "Lirili Larila",
        isCorrect: false,
      },
      fourthOption: {
        text: "Brr Brr Patapim",
        isCorrect: true,
      },
    },
  },
  fifthQuestion: {
    questionText: "Who is this?",
    questionImgSrc: tungTungTungSahur,
    questionImgAlt: "Tung Tung Tung Sahur",
    questionOptions: {
      firstOption: {
        text: "Tung Tung Tung Sahur",
        isCorrect: true,
      },
      secondOption: {
        text: "Bombardino Crocodilo",
        isCorrect: false,
      },
      thirdOption: {
        text: "Lirili Larila",
        isCorrect: false,
      },
      fourthOption: {
        text: "Cappuccino Assasino",
        isCorrect: false,
      },
    },
  },
};

export default quizQuestions;
