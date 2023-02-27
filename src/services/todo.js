import axios from 'axios';

/**
 * 유저의 데이터를 todos table에서 query를 이용하여 가져오기
 * @param {*} name 유저의 이름
 * @returns 유저의 데이터
 */
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

/**
 * 게시글의 번호를 설정하기 위해
 * todos table에 게시글 마지막 번호 가져오기
 * @returns 게시글의 마지막 번호
 */
export async function getTot() {
  try {
    const tot = await axios({
      url: 'http://localhost:4000/todos',
      method: 'get',
    }).then((result) =>
      result.data.length === 0
        ? 0
        : Number(result.data[result.data.length - 1].id) + 1,
    );

    return tot;
  } catch (e) {
    console.log(e);
  }
}

/**
 * 유저가 입력한 데이터를 todos table에 추가
 * @param {*} todo 유저가 입력한 데이터
 */
export async function insertTodoList(todo) {
  try {
    await axios({
      url: 'http://localhost:4000/todos',
      method: 'post',
      data: todo,
    });
  } catch (e) {
    console.log(e);
  }
}

/**
 * 유저가 수정한 데이터를 todos table에서 수정
 * @param {*} id 데이터 번호
 * @param {*} todo 데이터 정보
 */
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

/**
 * todos table에 존재하는 데이터 삭제
 * @param {*} id 데이터 번호
 */
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
