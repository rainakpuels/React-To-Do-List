function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'Car snacks',
      isCompleted: false,
    },
    {
      text: 'Pillows',
      isCompleted: false,
    },
    {
      text: 'Patience during long drives',
      isCompleted: false,
    },
    {
      text: 'Groovy tunes',
      isCompleted: false,
    }                  
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text, isCompleted:false}];
    setTodos(newTodos);
  }
  const removeTodo = index => {
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  }

  return(
    <div className="app">
      <div className="todo-list" >
        {todos.map((todo, i) => (
          <Todo key={i} index={i} todo={todo} remove={removeTodo}/>
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
