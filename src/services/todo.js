import axios from 'axios';

export async function getTodoList(name) {
  try {
    const todoList = await axios({
      url: `http://localhost:4000/${name}`,
      method: 'get',
      responseType: 'json',
    }).then((result) => {
      return result.data;
    });

    return todoList;
  } catch (e) {
    console.log(e);
  }
}

export async function insertTodoList(name, nextTodos) {
  try {
    await axios({
      url: `http://localhost:4000/${name}`,
      method: 'post',
      data: nextTodos,
    });
  } catch (e) {
    console.log(e);
  }
}

export async function updateTodoList(name, id, todo) {
  try {
    await axios({
      url: `http://localhost:4000/${name}/${id}`,
      method: 'patch',
      data: { ...todo, checked: !todo.checked },
    });
  } catch (e) {
    console.log(e);
  }
}

export async function removeTodoList(name, id) {
  try {
    await axios({
      url: `http://localhost:4000/${name}/${id}`,
      method: 'delete',
    });
  } catch (e) {
    console.log(e);
  }
}
