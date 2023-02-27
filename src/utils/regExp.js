/**
 * id, password, name, 특수문자 체크를 위한 정규표현식
 */
const regExpID = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d].{3,}$/;
const regExpPW =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]*$/;
const regExpName = /^[A-Za-z\d[ㄱ-ㅎㅏ-ㅣ가-힣].{1,}$/;
const patternSpec = /[~!@#$%^&*()_+|<>?:{}]/;

export { regExpID, regExpPW, regExpName, patternSpec };
