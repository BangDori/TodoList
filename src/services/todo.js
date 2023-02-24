import axios from 'axios';

export async function getTodoList(name) {
  try {
    const todoList = await axios({
      url: `http://localhost:4000/todos?user_name=${name}`,
      method: 'get',
      responseType: 'json',
    }).then((result) => {
      return result.data;
    });

    return todoList;
  } catch (e) {
    console.log(e);

    return [];
  }
}

export async function getTot() {
  try {
    const tot = await axios({
      url: 'http://localhost:4000/todos',
      method: 'get',
    }).then((result) => {
      if (result.data.length === 0) return 1;
      return result.data[result.data.length - 1].id + 1;
    });

    return tot;
  } catch (e) {
    console.log(e);
  }
}

export async function insertTodoList(nextTodo) {
  try {
    await axios({
      url: 'http://localhost:4000/todos',
      method: 'post',
      data: nextTodo,
    });
  } catch (e) {
    console.log(e);
  }
}

export async function updateTodoList(id, todo) {
  try {
    await axios({
      url: `http://localhost:4000/todos/${id}`,
      method: 'patch',
      data: { ...todo, checked: !todo.checked },
    });
  } catch (e) {
    console.log(e);
  }
}

export async function removeTodoList(id) {
  try {
    await axios({
      url: `http://localhost:4000/todos/${id}`,
      method: 'delete',
    });
  } catch (e) {
    console.log(e);
  }
}
