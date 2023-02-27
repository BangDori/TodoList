import { regExpID, regExpPW, regExpName, patternSpec } from './regExp';

const status = {
  name_done: false,
  id_done: false,
  pwd_done: false,
};

// 회원가입 정보가 올바르게 확인되었는지 확인
function checkRegister() {
  const { id_done, pwd_done, name_done } = status;
  if (id_done && pwd_done && name_done) {
    status.id_done = false;
    status.pwd_done = false;
    status.name_done = false;

    return true;
  }

  return false;
}

// 입력칸에 제대로 입력하였을 경우, 초록색 표시
// 제대로 입력하지 않았을 경우, 빨간색 표시
function validation({ value }, ref, callback) {
  if (value === '') {
    ref.current.style = 'outline: none';
  } else if (callback(value)) {
    ref.current.style = 'outline: 3px solid #80ff00';
  } else {
    ref.current.style = 'outline: 3px solid #ff0000';
  }
}

// 아이디가 올바르게 입력되었는지 검사
function validationID(user_id) {
  if (regExpID.test(user_id)) {
    status.id_done = true;
    return true;
  }

  status.id_done = false;
  return false;
}

// 비밀번호가 올바르게 입력되었는지 검사
function validationPWD(user_password) {
  if (user_password.length >= 8 && regExpPW.test(user_password)) {
    status.pwd_done = true;
    return true;
  }

  status.pwd_done = false;
  return false;
}

// 이름이 올바르게 입력되었는지 검사
function validationName(user_name) {
  if (!patternSpec.test(user_name) && regExpName.test(user_name)) {
    status.name_done = true;
    return true;
  }

  status.name_done = false;
  return false;
}

export {
  checkRegister,
  validation,
  validationID,
  validationPWD,
  validationName,
};
