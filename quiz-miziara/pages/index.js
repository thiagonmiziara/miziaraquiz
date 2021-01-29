import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import db from "../db.json";
import Widget from "../src/components/Widget";
import QuizLogo from "../src/components/QuizLogo";
import GitHubCorner from "../src/components/GitHubCorner";
import QuizBackground from "../src/components/QuizBackground";
import QuizContainer from "../src/components/QuizContainer";
import Footer from "../src/components/Footer";
import Input from "../src/components/Input";
import Button from "../src/components/Button";
import Link from "../src/components/Link";

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
        <QuizLogo src={db.logo} as={motion.img} 
       
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1.1 }}
          transition={{
            delay: .2,
            type: "spring",
            stiffness: 260,
            damping: 20
          
        }}
        />
          
        <Widget
          as={motion.section}
          transition={{ delay: 0, duration: 0.5 }}
          variants={{
            show: { opacity: 1, x: "0" },
            hidden: { opacity: 0, x: "100%" },
          }}
          initial="hidden"
          animate="show"
        >
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
        <Widget
          as={motion.section}
          transition={{ delay: 0.1, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: "0" },
            hidden: { opacity: 0, y: "100%" },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header style={{ backgroundColor: "black" }}>
            <h2>Quizes da Galera</h2>
          </Widget.Header>
          <Widget.Content>
            <ul>
              {db.external.map((linkExterno) => {
                const [projectName, githubUser] = linkExterno
                  .replace(/\//g, "")
                  .replace("https:", "")
                  .replace("vercel.app", "")
                  .split(".");
                return (
                  <li key={linkExterno}>
                    <Widget.Topic
                      as={Link}
                      href={`/quiz/${projectName}___${githubUser}`}
                    >
                      {`${githubUser}/${projectName}`}
                    </Widget.Topic>
                  </li>
                );
              })}
            </ul>
          </Widget.Content>
        </Widget>
        <Footer
          as={motion.footer}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            show: { opacity: 1, x: "0" },
            hidden: { opacity: 0, x: "-100%" },
          }}
          initial="hidden"
          animate="show"
        />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/thiagonmiziara" />
    </QuizBackground>
  );
}
