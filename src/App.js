import './App.css';
import TodoRowItem from './components/TodoRowItem';

function App() {

  const todos = [
    {rowNumber:1, rowDescription: 'Feed dogs', rowAssigned: 'Alice'},
    {rowNumber:2, rowDescription: 'Learn React', rowAssigned: 'Nikhil'},
    {rowNumber:3, rowDescription: 'Buy Groceries', rowAssigned: 'Bob'},
    {rowNumber:4, rowDescription: 'Get Haircut', rowAssigned: 'Charlie'},
  ]

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          <h1>Todo App</h1>
        </div>
        <div className='card-body'>
          <table className='table table-hover'>
            <thead>
              <tr>
                <th scope ="col">#</th>
                <th scope ="col">Description</th>
                <th scope ="col">Assigned</th>
              </tr>
            </thead>
            <tbody>
              <TodoRowItem  
                rowNumber={todos[0].rowNumber} 
                rowDescription={todos[0].rowDescription}
                rowAssigned={todos[0].rowAssigned} 
              />
              <TodoRowItem  
                rowNumber={todos[1].rowNumber} 
                rowDescription={todos[1].rowDescription}
                rowAssigned={todos[1].rowAssigned} 
              />
              <TodoRowItem  
                rowNumber={todos[2].rowNumber} 
                rowDescription={todos[2].rowDescription}
                rowAssigned={todos[2].rowAssigned} 
              />
              <TodoRowItem  
                rowNumber={todos[3].rowNumber} 
                rowDescription={todos[3].rowDescription}
                rowAssigned={todos[3].rowAssigned} 
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
