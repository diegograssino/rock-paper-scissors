import React from "react";

import Game from "../../components/Game/Game";

import {Styled} from "./Home.styled";
function Home(): JSX.Element {
  return (
    <Styled>
      <header>
        <h1>ROCK, PAPER & TYPESCRIPT</h1>
      </header>
      <main>
        <section>
          <article>
            <Game />
          </article>
        </section>
      </main>
    </Styled>
  );
}

export default Home;
