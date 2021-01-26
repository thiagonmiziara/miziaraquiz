import db from "../db.json";
import QuizBackground from "../src/components/QuizBackground";
import GitHubCorner from "../src/components/GitHubCorner";
import Widget from "../src/components/Widget";
import QuizContainer from "../src/components/QuizContainer";
import QuizLogo from "../src/components/QuizLogo";
import Footer from "../src/components/Footer";

export default function QuizPage() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
      <QuizLogo/>
        <Widget>
          <Widget.Header>Página em Construção </Widget.Header>
          <Widget.Content>
            <p> Conteúdo em breve... </p>{" "}
            
                      
          </Widget.Content>
        </Widget>
        <Footer/>
      </QuizContainer>
      <GitHubCorner />
    </QuizBackground>
  );
}
