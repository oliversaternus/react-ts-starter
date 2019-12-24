import * as React from "react";
import { observer, inject } from "mobx-react";
import SizeStore from "../stores/SizeStore";

interface StartProps {
  sizeStore?: SizeStore;
}

@inject("sizeStore")
@observer
class Start extends React.Component<StartProps, {}> {
  render() {
    return <div>Hello World!</div>;
  }
}

export default Start;