import db from "../db.json";
import Widget from "../src/components/Widget";
import QuizLogo from "../src/components/QuizLogo";
import GitHubCorner from "../src/components/GitHubCorner";
import QuizBackground from "../src/components/QuizBackground";
import QuizContainer from "../src/components/QuizContainer";
import Form from "../src/components/Form";
import Footer from "../src/components/Footer";

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Batman Quiz!</h1>
          </Widget.Header>
          <Widget.Content>
            <p> Quiz do Batman está preparado? </p>
            <Form />
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Header style={{ backgroundColor: "black" }}>
            <h2>Quizes da Galera</h2>
          </Widget.Header>
          <Widget.Content>
            <p> Links dos melhores Quiz para desafiar sua mente! </p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/thiagonmiziara" />
    </QuizBackground>
  );
}
