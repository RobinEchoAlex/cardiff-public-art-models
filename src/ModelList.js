import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     maxWidth: 360,
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

export class ModelList extends React.Component {

  constructor(props) {
    super(props);
    this.handleListItemClick = this.handleListItemClick.bind(this);
  }

  handleListItemClick = (event, index) => {
    this.props.onSelectedModelChange(index);
  };

  render() {
    const selectedIndex = this.props.selectedModel;
    return (
      <div className="List">
        <List component="nav" aria-label="main mailbox folders">
          <ListItem
            button
            selected={selectedIndex === 0}
            onClick={(event) => this.handleListItemClick(event, 0)}
          >
            <ListItemText primary="Skeleton"/>
          </ListItem>
          <ListItem
            button
            selected={selectedIndex === 1}
            onClick={(event) => this.handleListItemClick(event, 1)}
          >
            <ListItemText primary="Skeleton22"/>
          </ListItem>
        </List>
      </div>
    )
  }
}

