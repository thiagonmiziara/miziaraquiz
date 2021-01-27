import QuizLogo from "../src/components/QuizLogo";
import QuizContainer from "../src/components/QuizContainer";
import QuizBackground from "../src/components/QuizBackground";
import GitHubCorner from "../src/components/GitHubCorner";
import Widget from "../src/components/Widget";
import Footer from "../src/components/Footer";
import db from "../db.json";
import Button from "../src/components/Button";
import Input from "../src/components/Input";

const LoadingWidget = () => {
  return (
    <Widget>
      <Widget.Header>Carregando...</Widget.Header>

      <Widget.Content>[Desafio do Loading]</Widget.Content>
    </Widget>
  );
};

const QuestionWidget = ({ question, totalQuestions, questionIndex }) => {

  const questionId =  `question__${questionIndex}`
  return (
    <Widget>
      <Widget.Header>
        <h3>{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}</h3>
      </Widget.Header>
      <img
        src={question.image}
        alt="Descriçao"
        style={{ width: "100%", height: "150px", objectFit: "cover" }}
      />
      <Widget.Content>
        <h2>{question.title}</h2>
        <p> {question.description} </p>
        <form>
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            return (
              <Widget.Topic as="label" htmlFor={alternativeId}>
                <input 
                name={questionId}
                id={alternativeId}
                type="radio"
                />
                {alternative}
              </Widget.Topic>
            );
          })}
        </form>
        <Button>Confirmar</Button>
      </Widget.Content>
    </Widget>
  );
};

const QuizPage = () => {
  const screenState = 'Loading';
  const totalQuestions = db.questions.length;
  const questionIndex = 0;
  const question = db.questions[questionIndex];

  return (
    <QuizBackground backgroundImage="https://images.alphacoders.com/992/992782.jpg">
      <QuizContainer>
        <QuizLogo />

       {/* <QuestionWidget
          question={question}
          totalQuestions={totalQuestions}
          questionIndex={questionIndex}
       />*/}

        {screenState === 'Loading' && <LoadingWidget />}
        <Footer />
      </QuizContainer>
      <GitHubCorner />
    </QuizBackground>
  );
};

export default QuizPage;
