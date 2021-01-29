import React from "react";
import { useRouter } from "next/router";
import db from "../db.json";
import Widget from "../src/components/Widget";
import QuizLogo from "../src/components/QuizLogo";
import GitHubCorner from "../src/components/GitHubCorner";
import QuizBackground from "../src/components/QuizBackground";
import QuizContainer from "../src/components/QuizContainer";
import Footer from "../src/components/Footer";
import Input from "../src/components/Input";
import Button from "../src/components/Button";

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
            <p> Quiz do Batman está preparado? </p>
            <form onSubmit={formSubmit}>
              <Input
                name="nomeDoUsuario"
                type="text"
                placeholder="Diga seu nome"
                onChange={handleInput}
              />

              <Button type="submit" disabled={name.length === 0}>
                {`Vamos Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Header style={{ backgroundColor: "black" }}>
            <h2>Quizes da Galera</h2>
          </Widget.Header>
          <Widget.Content>
            <ul>
              {db.external.map((linkExterno, index) => {
                const [projectName, githubUser] = linkExterno
                .replace(/\//g, '')
                .replace('https:', '')
                .replace('vercel.app', '')
                .split('.');
                return (
                  <li key={index}>
                    <Widget.Topic href={linkExterno}>
                      {`${githubUser}/${projectName}`}
                    </Widget.Topic>
                  </li>
                );
              })}
            </ul>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/thiagonmiziara" />
    </QuizBackground>
  );
}
