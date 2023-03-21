import { FormEvent, KeyboardEvent, useState, } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import "./Timeline.css"


 
export function Timeline(){
//estado  usado para que o react reaja a cada alteração de variavel e não perca a sua função
const [newTweet, setNewTweet] = useState('')   
const [tweets, setTweets] = useState([
  /** quando você cria um estado ele não serve para altearar informações e sim para criar novas informações diferentes*/
  'meu primeiro tweet',
  'teste',
  'deu certo tweetar!',
])

function creatNewTweet(event: FormEvent){
     event.preventDefault()

  {/* setTweets([...tweets, newTweet]);{/**o ...tweets é um espred operation que copia os intems que ja estão no array e o newTweet a a variavel que vai receber o que foi acrebcentado ou retirado do array */}
     setTweets([newTweet, ...tweets]); 
     setNewTweet('');{/*//para toda vez que digitar algun tweet no textarea e clicar no botão limpar o campo*/}
    }


    function handleHotKeySubmit(event: KeyboardEvent) {
      if (event.key === 'Enter' && (event.ctrlKey|| event.metaKey)) {
        setTweets([newTweet, ...tweets]);
        setNewTweet('');
       
      }
    }



    return(
        <main className="timeline">
        <Header title="Twitter"/>

          <form  onSubmit={creatNewTweet} className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/matheusfllps.png" alt="Matheus Fonseca" />
              <textarea 
              id="tweet"
               placeholder="what´s happening?"
               value={newTweet}/**o valor da variavel fica fixo portanto como ele foi setado como vazio após digitar e clicar no botçao de tweet o campo volta a ficar vazio novamente */
               onKeyDown={handleHotKeySubmit}
               onChange={(event) => {
                setNewTweet(event.target.value);{/** o target e para pegar qual a tag que eu to manipulando e value é o valor que esta sendo alterado nesta mesma tag e o setNweTweet serve para o react entender que vamos mexer na variavel newtweet*/}
               }}
               />
            </label>

            <button type="submit">tweet</button>
          </form>
         <Separator />

          {tweets.map(tweet => {
          return <Tweet key={tweet} content={tweet}/>
          
          })}
         
       
         

        </main>
    )
}