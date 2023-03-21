import "./Status.css";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";
import { FormEvent, useState, KeyboardEvent } from "react";
import { PaperPlaneRight } from "phosphor-react";

/** o que acontece com react por baixo dos panos */

/**
 * Fluxo de renderização:
 *
 * 1.toda vez que alteramos o estado de um componente, Todo o componemte é recalculado.
 * 2.toda vez que o seu componente pai renderizar.
 * 3.toda vez que alguma da sua propriedades mudarem. *
 *  */

/**Algoritmo de reconciliação
 *
 * 1. Criar em memória a nova versão do html do componente.
 * 2. Compara essa nova versão coma versão anterios do (HTML) diff.
 * 3. Aplicar as operações JavaScript para alterar somente o necessário do html.*/

export function Status() {
  //estado  usado para que o react reaja a cada alteração de variavel e não perca a sua função
  const [newAnswer, setNewAnswer] = useState("");
  const [answers, setAnswers] = useState([
    /** quando você cria um estado ele não serve para altearar informações e sim para criar novas informações diferentes*/
    "Concordo...",
    "Olha, faz sentido!",
    "Parabéns pelo progresso.",
  ]);

  function createNewAnswer(event: FormEvent) {
    event.preventDefault();

    {
      /* setTweets([...tweets, newTweet]);{/**o ...tweets é um espred operation que copia os intems que ja estão no array e o newTweet a a variavel que vai receber o que foi acrebcentado ou retirado do array */
    }
    setAnswers([newAnswer, ...answers]);
    setNewAnswer("");
    {
      /*//para toda vez que digitar algun tweet no textarea e clicar no botão limpar o campo*/
    }
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey|| event.metaKey)) {
      setAnswers([newAnswer, ...answers]);
      setNewAnswer('');
     
    }
  }

  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident nemo eveniet libero modi sint. Nesciunt doloribus optio deserunt labore suscipit quaerat rerum sint? Animi aspernatur distinctio ea laudantium doloremque explicabo!" />

      <Separator />

      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img
            src="https://github.com/matheusfllps.png"
            alt="Matheus Fonseca"
          />
          <textarea
            id="tweet"
            placeholder="tweet your answer"
            value={newAnswer}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => {
              setNewAnswer(event.target.value);
            }}
          />
        </label>

        <button type="submit">
          <PaperPlaneRight />
          <span>answer</span>
          </button>
      </form>

      {answers.map((answer) => {
        return <Tweet key={answer} content={answer} />;
      })}
    </main>
  );
}
