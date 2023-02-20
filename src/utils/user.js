import axios from "axios";

async function login({ user_id, user_password }) {
  try {
    const isLogin = await axios({
      url: "http://localhost:4000/users",
      method: "get",
      responseType: "json",
    })
      .then((res) => {
        const data = res.data.filter((u) => u.user_id === user_id);

        if (data.length === 0) {
          throw new Error("일치하는 아이디가 존재하지 않습니다.");
        }

        return data;
      })
      .then((user) => {
        if (user[0].user_password === user_password) {
          return user[0].user_name;
        } else {
          throw new Error("비밀번호가 일치하지 않습니다.");
        }
      });

    return isLogin;
  } catch (e) {
    throw new Error(e.message);
  }
}

async function register(form) {
  try {
    await axios({
      url: "http://localhost:4000/users",
      method: "post",
      data: form,
    });
  } catch (e) {
    console.log("Error: " + e.message);
  }
}

export { login, register };
