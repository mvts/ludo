import { h } from "preact";
import { useState } from "preact/hooks";
import { Field } from "../field/field";
import { Player } from "../types";
import style from "./style.css";
import { usePlayers } from "./usePlayers";

export const Board = () => {
  const [activePlayer, setActivePlayer] = useState<Player>();
  const { players } = usePlayers();

  // 2 / 12 /22 / 32 können auf die finish felder!
  return (
    <div class={style.board}>
      <div>
        <Field
          players={players}
          id={57}
          type="start"
          color={players[0].color}
        />
        <Field
          players={players}
          id={58}
          type="start"
          color={players[0].color}
        />
        <Field type="blank" />
        <Field type="blank" />
        <Field players={players} id={1} type="path" />
        <Field players={players} id={2} type="path" />
        <Field players={players} id={3} type="path" />
        <Field type="blank" />
        <Field type="blank" />
        <Field
          players={players}
          id={61}
          type="start"
          color={players[1].color}
        />
        <Field
          players={players}
          id={62}
          type="start"
          color={players[1].color}
        />
      </div>
      <div>
        <Field
          players={players}
          id={59}
          type="start"
          color={players[0].color}
        />
        <Field
          players={players}
          id={60}
          type="start"
          color={players[0].color}
        />
        <Field type="blank" />
        <Field type="blank" />
        <Field players={players} id={40} type="path" />
        <Field
          players={players}
          id={41}
          type="finish"
          color={players[1].color}
        />
        <Field players={players} id={4} type="path" />
        <Field type="blank" />
        <Field type="blank" />
        <Field
          players={players}
          id={63}
          type="start"
          color={players[1].color}
        />
        <Field
          players={players}
          id={64}
          type="start"
          color={players[1].color}
        />
      </div>
      <div>
        <Field players={players} id={39} type="path" />
        <Field
          players={players}
          id={42}
          type="finish"
          color={players[1].color}
        />
        <Field players={players} id={5} type="path" />
      </div>
      <div>
        <Field players={players} id={38} type="path" />
        <Field
          players={players}
          id={43}
          type="finish"
          color={players[1].color}
        />
        <Field players={players} id={6} type="path" />
      </div>
      <div>
        <Field players={players} id={33} type="path" />
        <Field players={players} id={34} type="path" />
        <Field players={players} id={35} type="path" />
        <Field players={players} id={36} type="path" />
        <Field players={players} id={37} type="path" />
        <Field
          players={players}
          id={44}
          type="finish"
          color={players[1].color}
        />
        <Field players={players} id={7} type="path" />
        <Field players={players} id={8} type="path" />
        <Field players={players} id={9} type="path" />
        <Field players={players} id={10} type="path" />
        <Field players={players} id={11} type="path" />
      </div>
      <div>
        <Field players={players} id={32} type="path" />
        <Field
          players={players}
          id={53}
          type="finish"
          color={players[0].color}
        />
        <Field
          players={players}
          id={54}
          type="finish"
          color={players[0].color}
        />
        <Field
          players={players}
          id={55}
          type="finish"
          color={players[0].color}
        />
        <Field
          players={players}
          id={56}
          type="finish"
          color={players[0].color}
        />
        <Field type="blank" />
        <Field
          players={players}
          id={48}
          type="finish"
          color={players[2].color}
        />
        <Field
          players={players}
          id={47}
          type="finish"
          color={players[2].color}
        />
        <Field
          players={players}
          id={46}
          type="finish"
          color={players[2].color}
        />
        <Field
          players={players}
          id={45}
          type="finish"
          color={players[2].color}
        />
        <Field players={players} id={12} type="path" />
      </div>
      <div>
        <Field players={players} id={31} type="path" />
        <Field players={players} id={30} type="path" />
        <Field players={players} id={29} type="path" />
        <Field players={players} id={28} type="path" />
        <Field players={players} id={27} type="path" />
        <Field
          players={players}
          id={52}
          type="finish"
          color={players[3].color}
        />
        <Field players={players} id={17} type="path" />
        <Field players={players} id={16} type="path" />
        <Field players={players} id={15} type="path" />
        <Field players={players} id={14} type="path" />
        <Field players={players} id={13} type="path" />
      </div>
      <div>
        <Field players={players} id={26} type="path" />
        <Field
          players={players}
          id={51}
          type="finish"
          color={players[3].color}
        />
        <Field players={players} id={18} type="path" />
      </div>
      <div>
        <Field players={players} id={25} type="path" />
        <Field
          players={players}
          id={50}
          type="finish"
          color={players[3].color}
        />
        <Field players={players} id={19} type="path" />
      </div>
      <div>
        <Field
          players={players}
          id={69}
          type="start"
          color={players[3].color}
        />
        <Field
          players={players}
          id={70}
          type="start"
          color={players[3].color}
        />
        <Field type="blank" />
        <Field type="blank" />
        <Field players={players} id={24} type="path" />
        <Field
          players={players}
          id={49}
          type="finish"
          color={players[3].color}
        />
        <Field players={players} id={20} type="path" />
        <Field type="blank" />
        <Field type="blank" />
        <Field
          players={players}
          id={65}
          type="start"
          color={players[2].color}
        />
        <Field
          players={players}
          id={66}
          type="start"
          color={players[2].color}
        />
      </div>
      <div>
        <Field
          players={players}
          id={71}
          type="start"
          color={players[3].color}
        />
        <Field
          players={players}
          id={72}
          type="start"
          color={players[3].color}
        />
        <Field type="blank" />
        <Field type="blank" />
        <Field players={players} id={23} type="path" />
        <Field players={players} id={22} type="path" />
        <Field players={players} id={21} type="path" />
        <Field type="blank" />
        <Field type="blank" />
        <Field
          players={players}
          id={67}
          type="start"
          color={players[2].color}
        />
        <Field
          players={players}
          id={68}
          type="start"
          color={players[2].color}
        />
      </div>
    </div>
  );
};
