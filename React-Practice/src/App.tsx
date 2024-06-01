// import Person,{Color} from './components/Person'

// interface AppContextInterface {
  //   name: string;
  //   age: number;
  //   country: string;
  // }
  
// const AppContext = createContext <AppContextInterface | null>(null);



// const App: React.FC = () => {
  
  //   const AppValue: AppContextInterface = {
//     name: "John",
//     age: 30,
//     country: "US",
//   }
  
//   return (
//     <AppContext.Provider value={AppValue}>
//     <div className="App">
//      <Person name='John' age={10} color={Color.red} />
//     </div>
//     </AppContext.Provider>
//   );
// }

import React,{ useState } from 'react';
import './App.css';
import List from './components/List/List'
import AddToList from './components/AddToList/AddToList'
import Input from './components/Input/Input';

export interface PeopleInterface {
  people: {
    name: string
    age: number
    email: string
    note?: string
  }[]
}


const App = () => {

  const [ people, setPeople ] = useState<PeopleInterface["people"]>([
    {
      name: "John",
      age: 30,
      email: "abc@xyz.com"
    },
    {
      name: "James",
      age: 25,
      email: "abc@xyz.com"
    }
  ]);

  return (
    <div className="App">
      <h1>Party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople}/>
      <Input size='small'/>
    </div>
  )
}
export default App;
