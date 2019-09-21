import * as React from "react";
import { observer, inject } from "mobx-react";
import SizeStore from "../stores/SizeStore";
import { Button, Theme, withStyles } from "@material-ui/core";
import { createStyles } from "@material-ui/styles";

interface ButtonProps {
  name: string;
  color?: string;
  sizeStore?: SizeStore;
  classes: {
    root: string;
  }
}

const styles = ({ palette, spacing }: Theme) => createStyles({
  root: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing,
    backgroundColor: palette.background.default,
    color: palette.primary.main,
  },
});

@inject("sizeStore")
@observer
class Page extends React.Component<ButtonProps, {}> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Button variant="contained" color="primary" >
          Hello
      </Button>
      </div>
    );
  }
}

export default withStyles(styles as any)(Page);