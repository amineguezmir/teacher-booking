// react-typed.d.ts
declare module "react-typed" {
  import { Component } from "react";

  interface TypedProps {
    strings: string[];
    typeSpeed?: number;
    backSpeed?: number;
    loop?: boolean;
  }

  export default class Typed extends Component<TypedProps> {}
}
