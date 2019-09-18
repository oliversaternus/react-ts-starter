import * as React from "react";
import { observer, inject } from "mobx-react";
import SizeStore from "../stores/SizeStore";

interface ButtonProps {
  name: string;
  color?: string;
  sizeStore?: SizeStore;
}

@inject("sizeStore")
@observer
class Button extends React.Component<ButtonProps, {}> {
  render() {
    return <button>Hello, {this.props.sizeStore.width}</button>;
  }
}

export default Button;