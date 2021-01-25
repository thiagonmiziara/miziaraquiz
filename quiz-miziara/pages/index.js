import db from "../db.json";
import Widget from "../src/components/Widget";
import Footer from "../src/components/Footer";
import GitHubCorner from "../src/components/GitHubCorner";
import QuizBackground from "../src/components/QuizBackground";
import QuizLogo from "../src/components/QuizLogo";
import QuizContainer from "../src/components/QuizContainer";

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizLogo />
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1> Miziara Quiz! </h1>
          </Widget.Header>
          <Widget.Content>
            <p> Quiz de games esta preparado? </p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Header style={{ backgroundColor: "black" }}>
            <h2>Quizes da Galera</h2>
          </Widget.Header>
          <Widget.Content>
            <p> Links dos melhores Quiz para desafiar sua mente! </p>
            <br />
            <a
              href="/quiz"
              style={{
                textDecoration: "none",
                padding: "20px",
                color: "#fff",
                backgroundColor: `${db.theme.colors.primary}`,
                marginTop: "10px",
                borderRadius: `${db.theme.borderRadius}`,
              }}
            >
              Quiz Page
            </a>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/thiagonmiziara" />
    </QuizBackground>
  );
}
