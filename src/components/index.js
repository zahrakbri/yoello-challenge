import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import mainMenu from '../statics/menu'
import SubMenu from './section'
import ShoppingCartDrawer from './shoppingDrawer'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100vh'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center'
  }
});

export default function Home() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square className={classes.root}>
      <Typography className={classes.title} color="textSecondary">
        Demo App
      </Typography>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
      >
        {
          mainMenu.map((item) => {
            return(
              <Tab disabled={item.disable} icon={item.icon} key={item.name} />
            )
          })
        }
      </Tabs>
      <SubMenu
        value={value}
        menu={mainMenu[value]}
      />
      <ShoppingCartDrawer />
    </Paper>
  );
}
