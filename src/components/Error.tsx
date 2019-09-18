import * as React from "react";
import { observer, inject } from "mobx-react";
import SizeStore from "../stores/SizeStore";

interface ErrorProps {
  sizeStore?: SizeStore;
}

@inject("sizeStore")
@observer
class Error extends React.Component<ErrorProps, {}> {
  render() {
    return <div>Page not found!</div>;
  }
}

export default Error;