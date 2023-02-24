import { regExpID, regExpPW, regExpName, patternSpec } from './regExp';

const status = {
  name_done: false,
  id_done: false,
  pwd_done: false,
};

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

function validation({ value }, ref, callback) {
  if (value === '') {
    ref.current.style = 'outline: none';
  } else if (callback(value)) {
    ref.current.style = 'outline: 3px solid #80ff00';
  } else {
    ref.current.style = 'outline: 3px solid #ff0000';
  }
}

function validationID(user_id) {
  if (regExpID.test(user_id)) {
    status.id_done = true;
    return true;
  }

  status.id_done = false;
  return false;
}

function validationPWD(user_password) {
  if (user_password.length >= 8 && regExpPW.test(user_password)) {
    status.pwd_done = true;
    return true;
  }

  status.pwd_done = false;
  return false;
}

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
