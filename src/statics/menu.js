import React from 'react'
import RestaurantIcon from '@material-ui/icons/Restaurant';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import SearchIcon from '@material-ui/icons/Search';

const mainMenu = [
  {
    name: 'drink',
    disable: false,
    icon: <LocalCafeIcon style={{ color: 'white' }} />,
    subMenu: [
      {
        label: 'All',
        filter: {}
      },
      {
        label: 'Pizza',
        filter: { food: 'pizza' }
      },
      {
        label: 'Steak',
        filter: { food: 'steak' }
      }
    ]
  },
  {
    name: 'food',
    disable: true,
    icon: <RestaurantIcon style={{ color: 'white' }} />,
    subMenu: [
      {
        label: 'All',
        filter: {}
      }
    ]
  },
  {
    name: 'off',
    disable: true,
    icon: <CardGiftcardIcon style={{ color: 'white' }} />,
  },
  {
    name: 'search',
    disable: true,
    icon: <SearchIcon style={{ color: 'white' }} />,
  }
]

export default mainMenu