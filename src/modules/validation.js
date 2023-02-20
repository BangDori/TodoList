const status = {
  id_done: false,
  pwd_done: false,
  nickname_done: false,
};

function register() {
  const { id_done, pwd_done, nickname_done } = status;
  if (id_done && pwd_done && nickname_done) {
    status.id_done = false;
    status.pwd_done = false;
    status.nickname_done = false;

    return true;
  }

  return false;
}

function validation({ name, value }, ref, callback) {
  if (value === "") {
    ref.current.style = "outline: none";
  } else if (callback(value)) {
    ref.current.style = "outline: 3px solid #80ff00";
  } else {
    ref.current.style = "outline: 3px solid #ff0000";
  }
}

function validationID(user_id) {
  /**
   * ^: ~로 시작
   * (?:) 비포괄적 괄호, 기억하지 않기때문에, 실패시 바로 탈락
   * (?=.*[A-Za-z]) 임의의 문자가 0개이상 반복되고, 문자가 최소 하나 포함되어 있는지 확인
   * (?=.*\d) 임의의 문자가 0개이상 반복되고, 숫자가 최소 하나 포함되어 있는지 확인
   * [A-Za-z\d].{n,} 대괄호 내부의 문자와 숫자가 n번 이상 반복되었는지 확인
   */
  const regExpID = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d].{3,}$/;

  if (user_id.length >= 4 && regExpID.test(user_id)) {
    status.id_done = true;
    return true;
  }

  status.id_done = false;
  return false;
}

function validationPWD(user_password) {
  const regExpPW =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]*$/;

  if (user_password.length >= 8 && regExpPW.test(user_password)) {
    status.pwd_done = true;
    return true;
  }

  status.pwd_done = false;
  return false;
}

function validationNickname(user_nickname) {
  const patternSpec = /[~!@#$%^&*()_+|<>?:{}]/; // 특수문자
  const regExpNickname = /^[A-Za-z\d[ㄱ-ㅎㅏ-ㅣ가-힣].{3,}$/;

  if (
    !patternSpec.test(user_nickname) &&
    user_nickname.length >= 4 &&
    regExpNickname.test(user_nickname)
  ) {
    status.nickname_done = true;
    return true;
  }

  status.nickname_Done = false;
  return false;
}

export {
  register,
  validation,
  validationID,
  validationPWD,
  validationNickname,
};
