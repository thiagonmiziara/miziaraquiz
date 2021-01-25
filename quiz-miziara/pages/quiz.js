import db from "../db.json";
import QuizBackground from "../src/components/QuizBackground";
import GitHubCorner from "../src/components/GitHubCorner";
import Widget from "../src/components/Widget";
import QuizContainer from "../src/components/QuizContainer";

export default function Quiz() {
  return (
    <QuizBackground backgroundImage="https://i.pinimg.com/originals/44/f9/a3/44f9a3bd5e9952bfa916f1d12e3482b8.jpg">
      <QuizContainer>
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
      </QuizContainer>
      <GitHubCorner />
    </QuizBackground>
  );
}
