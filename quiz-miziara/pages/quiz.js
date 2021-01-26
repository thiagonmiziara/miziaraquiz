import db from "../db.json";
import QuizBackground from "../src/components/QuizBackground";
import GitHubCorner from "../src/components/GitHubCorner";
import Widget from "../src/components/Widget";
import QuizContainer from "../src/components/QuizContainer";
import QuizLogo from "../src/components/QuizLogo";
import Footer from "../src/components/Footer";

export default function Quiz() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
      <QuizLogo/>
        <Widget>
          <Widget.Header>Página em Construção </Widget.Header>
          <Widget.Content>
            <p> Conteúdo em breve... </p>{" "}
            <br/>
            <a
              href="/"
              style={{
                textDecoration: "none",
                padding: "20px",
                color: "#fff",
                backgroundColor: `${db.theme.colors.primary}`
                ,marginTop: '10px',
                borderRadius: `${db.theme.borderRadius}`
              }}
            >
              Voltar Home
            </a>
          </Widget.Content>
        </Widget>
        <Footer/>
      </QuizContainer>
      <GitHubCorner />
    </QuizBackground>
  );
}
