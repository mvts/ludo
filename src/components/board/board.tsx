import { h } from "preact";
import { Field } from "../field";
import style from "./style.css";

export const Board = () => (
  <div class={style.board}>
    <div>
      <Field type="start" color="yellow" />
      <Field type="start" color="yellow" />
      <Field type="blank" />
      <Field type="blank" />
      <Field type="path" />
      <Field type="path" />
      <Field type="path" />
      <Field type="blank" />
      <Field type="blank" />
      <Field type="start" color="green" />
      <Field type="start" color="green" />
    </div>
    <div>
      <Field type="start" color="yellow" />
      <Field type="start" color="yellow" />
      <Field type="blank" />
      <Field type="blank" />
      <Field type="path" />
      <Field type="start" color="green" />
      <Field type="path" />
      <Field type="blank" />
      <Field type="blank" />
      <Field type="start" color="green" />
      <Field type="start" color="green" />
    </div>
    <div>
      <Field type="path" />
      <Field type="finish" color="green" />
      <Field type="path" />
    </div>
    <div>
      <Field type="path" />
      <Field type="finish" color="green" />
      <Field type="path" />
    </div>
    <div>
      <Field type="path" />
      <Field type="path" />
      <Field type="path" />
      <Field type="path" />
      <Field type="path" />
      <Field type="finish" color="green" />
      <Field type="path" />
      <Field type="path" />
      <Field type="path" />
      <Field type="path" />
      <Field type="path" />
    </div>
    <div>
      <Field type="path" />
      <Field type="finish" color="yellow" />
      <Field type="finish" color="yellow" />
      <Field type="finish" color="yellow" />
      <Field type="finish" color="yellow" />
      <Field type="blank" />
      <Field type="finish" color="red" />
      <Field type="finish" color="red" />
      <Field type="finish" color="red" />
      <Field type="finish" color="red" />
      <Field type="path" />
    </div>
    <div>
      <Field type="path" />
      <Field type="path" />
      <Field type="path" />
      <Field type="path" />
      <Field type="path" />
      <Field type="finish" color="blue" />
      <Field type="path" />
      <Field type="path" />
      <Field type="path" />
      <Field type="path" />
      <Field type="path" />
    </div>
    <div>
      <Field type="path" />
      <Field type="finish" color="blue" />
      <Field type="path" />
    </div>
    <div>
      <Field type="path" />
      <Field type="finish" color="blue" />
      <Field type="path" />
    </div>
    <div>
      <Field type="start" color="blue" />
      <Field type="start" color="blue" />
      <Field type="blank" />
      <Field type="blank" />
      <Field type="path" />
      <Field type="finish" color="blue" />
      <Field type="path" />
      <Field type="blank" />
      <Field type="blank" />
      <Field type="start" color="red" />
      <Field type="start" color="red" />
    </div>
    <div>
      <Field type="start" color="blue" />
      <Field type="start" color="blue" />
      <Field type="blank" />
      <Field type="blank" />
      <Field type="path" />
      <Field type="path" />
      <Field type="path" />
      <Field type="blank" />
      <Field type="blank" />
      <Field type="start" color="red" />
      <Field type="start" color="red" />
    </div>
  </div>
);
