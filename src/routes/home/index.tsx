import { h } from 'preact';
import Header from 'src/components/header';
import Player from 'src/components/player';
import style from './style.css';

const Home = () => (
  <div class={style.board}>
    <div>
      <div class={style.yellow}></div>
      <div class={style.yellow}></div>
      <div class={style.noborder}></div>
      <div class={style.noborder}></div>
      <div class={style.neutral}></div>
      <div class={style.neutral}>
        <Header />
      </div>
      <div class={style.neutral}></div>
      <div class={style.noborder}></div>
      <div class={style.noborder}></div>
      <div class={style.green}></div>
      <div class={style.green}></div>
    </div>
    <div>
      <div class={style.yellow}></div>
      <div class={style.yellow}></div>
      <div class={style.noborder}></div>
      <div class={style.noborder}></div>
      <div class={style.neutral}></div>
      <div class={style.green}></div>
      <div class={style.neutral}></div>
      <div class={style.noborder}></div>
      <div class={style.noborder}></div>
      <div class={style.green}></div>
      <div class={style.green}></div>
    </div>
    <div>
      <div class={style.neutral}></div>
      <div class={style.green}></div>
      <div class={style.neutral}></div>
    </div>
    <div>
      <div class={style.neutral}></div>
      <div class={style.green}></div>
      <div class={style.neutral}></div>
    </div>
    <div>
      <div class={style.neutral}></div>
      <div class={style.neutral}></div>
      <div class={style.neutral}></div>
      <div class={style.neutral}></div>
      <div class={style.neutral}></div>
      <div class={style.green}></div>
      <div class={style.neutral}></div>
      <div class={style.neutral}></div>
      <div class={style.neutral}></div>
      <div class={style.neutral}></div>
      <div class={style.neutral}></div>
    </div>
    <div>
      <div class={style.neutral}></div>
      <div class={style.yellow}></div>
      <div class={style.yellow}></div>
      <div class={style.yellow}></div>
      <div class={style.yellow}></div>
      <div class={style.noborder}></div>
      <div class={style.red}></div>
      <div class={style.red}></div>
      <div class={style.red}></div>
      <div class={style.red}></div>
      <div class={style.neutral}></div>
    </div>
    <div>
      <div class={style.neutral}></div>
      <div class={style.neutral}></div>
      <div class={style.neutral}></div>
      <div class={style.neutral}></div>
      <div class={style.neutral}></div>
      <div class={style.blue}></div>
      <div class={style.neutral}></div>
      <div class={style.neutral}></div>
      <div class={style.neutral}></div>
      <div class={style.neutral}></div>
      <div class={style.neutral}></div>
    </div>
    <div>
      <div class={style.neutral}></div>
      <div class={style.blue}></div>
      <div class={style.neutral}></div>
    </div>
    <div>
      <div class={style.neutral}></div>
      <div class={style.blue}></div>
      <div class={style.neutral}></div>
    </div>
    <div>
      <div class={style.blue}></div>
      <div class={style.blue}></div>
      <div class={style.noborder}></div>
      <div class={style.noborder}></div>
      <div class={style.neutral}></div>
      <div class={style.blue}></div>
      <div class={style.neutral}></div>
      <div class={style.noborder}></div>
      <div class={style.noborder}></div>
      <div class={style.red}></div>
      <div class={style.red}></div>
    </div>
    <div>
      <div class={style.blue}></div>
      <div class={style.blue}></div>
      <div class={style.noborder}></div>
      <div class={style.noborder}></div>
      <div class={style.neutral}></div>
      <div class={style.neutral}></div>
      <div class={style.neutral}></div>
      <div class={style.noborder}></div>
      <div class={style.noborder}></div>
      <div class={style.red}></div>
      <div class={style.red}></div>
    </div>
  </div>
);

export default Home;
