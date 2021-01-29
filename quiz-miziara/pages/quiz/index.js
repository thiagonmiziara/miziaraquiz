import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import db from "../.././db.json";
import Widget from "../../src/components/Widget";
import QuizLogo from "../../src/components/QuizLogo";
import QuizBackground from "../../src/components/QuizBackground";
import QuizContainer from "../../src/components/QuizContainer";
import Button from "../../src/components/Button";
import AlternativesForm from "../../src/components/AlternativesForm";
import BackLinkArrow from "../../src/components/BackLinkArrow";

function ResultWidget({ points, results }) {
  const router = useRouter();
  const { name } = router.query;
  console.log(name);
  return (
    <Widget
      as={motion.section}
      transition={{ delay: 0.2, duration: 0.5 }}
      variants={{
        show: { opacity: 1, y: "0" },
        hidden: { opacity: 0, y: "100%" },
      }}
      initial="hidden"
      animate="show"
    >
      <Widget.Header>
      <BackLinkArrow href="/" />
        <h1>Parabéns {name}, você concluiu o quiz sobre Batman!</h1>
      </Widget.Header>
      <Widget.Content>
        <p style={{ fontWeight: "bold", fontSize: "1rem" }}>
          
          Você fez {" "}
          {results.reduce((somatoriaAtual, resultAtual) => {
            const isAcerto = resultAtual === true;
            if (isAcerto) {
              return somatoriaAtual + 100;
            }
            return somatoriaAtual;
          }, 0)}{" "}
          pontos de 1.000 pontos!
        </p>

        <ul>
          {results.map((result, index) => (
            <li key={index}>
              {index + 1}{" "}
              
                Resultado:{" "}
                {result === true ? (
                  <p style={{ color: "green", fontSize:"12px" }}>✓ ACERTOU!</p>
                ) : (
                  <p style={{ color: "red",fontSize:"12px" }}> ✗ ERROU!</p>
                )}
              
            </li>
          ))}
        </ul>
        
      </Widget.Content>
    </Widget>
  );
}

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        <h1> Batman Quiz! </h1>
      </Widget.Header>
      <Widget.Content>
        <img
          style={{ width: "100%", height: "50%" }}
          src="https://phoneky.co.uk/thumbs/screensavers/down/animals/batmanload_t4q67539.gif"
          alt="loading gif"
        />
      </Widget.Content>
    </Widget>
  );
}

function QuestionWidget({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  addResult,
}) {
  const [selectedAlternative, setSelectedAlternative] = React.useState(
    undefined
  );
  const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(false);
  const questionId = `question__${questionIndex}`;
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;

  return (
    <Widget>
      <Widget.Header>
        <BackLinkArrow href="/" />
        <h3> {`Pergunta ${questionIndex + 1} de ${totalQuestions}`} </h3>
      </Widget.Header>
      <img
        alt="Descrição"
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
        }}
        src={question.image}
      />
      <Widget.Content
        as={motion.div}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          show: { opacity: 1, y: "0" },
          hidden: { opacity: 0, y: "100%" },
        }}
        initial="hidden"
        animate="show"
      >
        <h2> {question.title} </h2> <p> {question.description} </p>
        <AlternativesForm
          onSubmit={(infosDoEvento) => {
            infosDoEvento.preventDefault();
            setIsQuestionSubmited(true);
            setTimeout(() => {
              addResult(isCorrect);
              onSubmit();
              setIsQuestionSubmited(false);
              setSelectedAlternative(undefined);
            }, 1 * 1500);
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const selectedAlternativeStatus = isCorrect ? "SUCCESS" : "ERROR";
            const isSelected = selectedAlternative === alternativeIndex;
            return (
              <Widget.Topic
                as="label"
                key={alternativeId}
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmited && selectedAlternativeStatus}
              >
                <input
                  style={{ display: "none" }}
                  id={alternativeId}
                  name={questionId}
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                  type="radio"
                />
                {alternative}
              </Widget.Topic>
            );
          })}
          <Button type="submit" disabled={!hasAlternativeSelected}>
            {" "}
            Confirmar{" "}
          </Button>
          {isQuestionSubmited && isCorrect && (
            <p
              style={{
                fontSize: "1rem",
                color: "green",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Parabéns Você Acertou!
            </p>
          )}
          {isQuestionSubmited && !isCorrect && (
            <p
              style={{
                fontSize: "1rem",
                color: "red",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Que Pena Você errou!
            </p>
          )}
        </AlternativesForm>
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: "QUIZ",
  LOADING: "LOADING",
  RESULT: "RESULT",
};

export default function QuizPage() {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [results, setResults] = React.useState([]);
  const totalQuestions = db.questions.length;
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  function addResult(result) {
    setResults([...results, result]);
  }

  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1500);
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;

    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground
      backgroundImage={"https://cdn.wallpapersafari.com/65/15/XJmMES.jpg"}
    >
      <QuizContainer
        as={motion.div}
        transition={{ delay: 0, duration: 0.5 }}
        variants={{
          show: { opacity: 1, y: "0" },
          hidden: { opacity: 0, y: "100%" },
        }}
        initial="hidden"
        animate="show"
      >
        <QuizLogo
          src={db.logo}
          as={motion.img}
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1.1 }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        />
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
            addResult={addResult}
          />
        )}
        {screenState === screenStates.LOADING && <LoadingWidget />}
        {screenState === screenStates.RESULT && (
          <div>
            {" "}
            <ResultWidget results={results} />{" "}
          </div>
        )}
      </QuizContainer>
    </QuizBackground>
  );
}
