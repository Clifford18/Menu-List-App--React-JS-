
import React from 'react'
import './App.css';

import MenuList from "./components/MenuList"


class App extends React.Component {
  state = {
    selectedDishes: {}
  }
 
  render() {
     return (
      <div className="container">
        <div className="wrapper">
         <h1>Restaurant Menu</h1>
         <MenuList
           dishes={MenuOptions}
           onChange={(selectedDishes) => this.setState({selectedDishes})}
           selectedDishes={this.state.selectedDishes}
           
         />
       </div>
      </div>
     )
  }
}

const MenuOptions=  [
  {
    name: "Salad",
    id: "salad-id",
    choices: [
              {
                name: "Santa Fe",
                id: "santa-fe-id",
                choices: []
              },
              {
              name: "Greek",
              id: "greek-id",
              choices: []
              },
              {
                name: "Asian",
                id: "asian-id",
                choices: []
              },
              {
              name: "Dressing",
              id: "dressing-id",
              choices: [
                      {
                       name: "Italian",
                       id: "italian-id",
                       choices: []
                      },
                      {
                       name: "Blue Cheese",
                       id: "blue-cheese-id",
                       choices: []
                      },
                      {
                       name: "Ranch",
                       id: "ranch-id",
                       choices: []
                      }
                        ]
              },
              {
              name: "Bread",
              id: "bread-id",
              choices: [
                        {
                       name: "Italian",
                       id: "italian-id",
                       choices: []
                      },
                      {
                       name: "Flat",
                       id: "flat-id",
                       choices: []
                      },
                      {
                       name: "Sourdough",
                       id: "sourdough-id",
                       choices: []
                      }

                        ]
              }

            ]
  },
  {
    name: "Entree",
    id: "entree-id",
    choices: [
              {
                name: "Steak",
                id: 'steak-id',
                choices: [],
              },
              {
              name: "Salmon",
              id: 'salmon-id',
              choices: [],
              },
              {
                name: "Rice",
                id: 'Rice-id',
                choices: [],
               }
            ]
  },
  {
  name: "Soup",
  id: "soup-id",
  choices: [
            {
              name: "Minestrone",
              id: 'minestrone-id',
              choices: [],
            },
            {
            name: "Hot and sour",
            id: 'hot-and-sour-id',
            choices: [],
            },
            {
            name: "Miso",
            id: 'miso-id',
            choices: [],
            },
            {
              name: "Bread",
              id: 'Bread-id',
              choices: [
                        {
                          name: "Breadsticks",
                          id: 'breadsticks-id',
                          choices: [],
                         }
                        ],
             }
          ]
},
]


export default App;
