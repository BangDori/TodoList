import axios from 'axios';

/**
 * users table에 회원 정보가 존재하는지 조회
 * @param {*} param0 유저 아이디, 유저 비밀번호
 * @returns 유저 정보 or 에러 메시지
 */
async function login({ user_id, user_password }) {
  try {
    const isLogin = await axios({
      url: 'http://localhost:4000/users',
      method: 'get',
      responseType: 'json',
    })
      .then((res) => {
        const data = res.data.filter((u) => u.user_id === user_id);

        if (data.length === 0) {
          throw new Error('일치하는 아이디가 존재하지 않습니다.');
        }

        return data;
      })
      .then((user) => {
        if (user[0].user_password === user_password) {
          return user;
        } else {
          throw new Error('비밀번호가 일치하지 않습니다.');
        }
      });

    return isLogin;
  } catch (e) {
    throw new Error(e.message);
  }
}

/**
 * use table에 회원 정보 등록
 * @param {*} form 유저 이름, 아이디, 비밀번호
 */
async function register(form) {
  try {
    await axios({
      url: 'http://localhost:4000/users',
      method: 'post',
      data: form,
    });
  } catch (e) {
    console.log('Error: ' + e.message);
  }
}

/**
 * users table에 회원 정보가 존재하는지 조회
 * @param {*} search 입력 정보 (이름 or 아이디)
 * @param {*} type 검색하려는 타입 구분(아이디 or 비밀번호)
 * @returns 유저의 아이디 or 유저의 비밀번호
 */
async function findUser(search, type) {
  try {
    const user = await axios({
      url: 'http://localhost:4000/users',
      method: 'get',
      responseType: 'json',
    }).then((res) => {
      let data = undefined;
      if (type === 'name') {
        data = res.data.filter((u) => u.user_name === search);
      } else if (type === 'id') {
        data = res.data.filter((u) => u.user_id === search);
      }

      if (data.length === 0) {
        throw new Error('아이디가 존재하지 않습니다.');
      }

      return data;
    });

    return user;
  } catch (e) {
    throw new Error(e.message);
  }
}

export { login, register, findUser };
