import db from "../db.json";
import Widget from "../src/components/Widget";
import QuizLogo from "../src/components/QuizLogo";
import GitHubCorner from "../src/components/GitHubCorner";
import QuizBackground from "../src/components/QuizBackground";
import QuizContainer from "../src/components/QuizContainer";
import Footer from "../src/components/Footer";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState("");

  function formSubmit(event) {
    event.preventDefault();
    router.push(`/quiz?name=${name}`);
  }

  function handleInput({ target }) {
    setName(target.value);
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Batman Quiz!</h1>
          </Widget.Header>
          <Widget.Content>
            <p> Quiz do Batman esta preparado? </p>
            <form onSubmit={formSubmit}>
              <input
                onChange={handleInput}
                type="text"
                placeholder="Nome do Jogador"
              />
              <button type="submit" disabled={name.length === 0}>
                Jogar {name}
              </button>
            </form>
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
