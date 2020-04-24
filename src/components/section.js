import React, { useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CircularProgress from '@material-ui/core/CircularProgress'
import SwipeableViews from 'react-swipeable-views';
import ProductList from './productList'
import { connect } from 'react-redux'
import { getData, filterData } from '../actions/beers'

const useStyles = makeStyles({
  textColorPrimary: {
    color: '#fff',
    fontWeight: 'bold'
  },
  root: {
    display: 'flex',
    backgroundColor: '#fff',
    justifyContent: 'center',
    height: '80vh',
    alignItems: 'center',
    '& > * + *': {
      margin: 10
    },
  }
});

function SubMenu(props) {
  const { value, menu, index } = props;
  const classes = useStyles();
  const theme = useTheme();

  const [tabValue, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.dispatch(filterData(menu.subMenu[newValue].filter))
  };

  const handleChangeIndex = index => {
    setValue(index);
    props.dispatch(filterData(menu.subMenu[index].filter))
  };

  useEffect(() => {
    props.dispatch(getData())
  },[])

  return (
    <>
      <Tabs
        value={tabValue}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
        style={{ backgroundColor: '#000', position: 'sticky', top: 0, zIndex: 2 }}
        aria-label="icon label tabs example"
      >
        {
          menu.subMenu && menu.subMenu.map((item) => {
            return(
              <Tab
                label={item.label}
                key={item.label}
                className={classes.textColorPrimary} />
            )
          })
        }
      </Tabs>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
        enableMouseEvents
      >
        <ProductList />
      </SwipeableViews>
    </>
  );
}

const mapStateToProps = (state) => ({
  loading: state.beers.loading
})

const mapDispatchToProps = (dispatch) => ({
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(SubMenu)