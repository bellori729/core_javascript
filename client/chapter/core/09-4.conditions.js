/* ---------------------------- */
/* Nullish Coalescing Operator  */
/* ---------------------------- */

let emailAddress;
let receivedEmailAddress;

if (emailAddress === undefined || emailAddress === null) {
  receivedEmailAddress = 'user@company.io';
} else {
  receivedEmailAddress = emailAddress;
}

// 3항 연산자 (ternary) 를 사용한 식으로 변경합니다.

receivedEmailAddress =
  emailAddress === undefined || emailAddress === null
    ? 'user@company.io'
    : emailAddress;

// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.

receivedEmailAddress = emailAddress ?? 'user@company.io';
receivedEmailAddress = emailAddress || 'user@company.io';

/* ?? vs. || ----------------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환

const WIDTH = '10px';
const boolean = false;

console.log(null || WIDTH);
console.log(null ?? WIDTH);

console.log(undefined || WIDTH);
console.log(undefined ?? WIDTH);

console.log(boolean || WIDTH);
console.log(boolean ?? WIDTH);

console.log('' || WIDTH);
console.log('' ?? WIDTH);

// Logical Assignment Operators

let x;
let y;

x ||= y; // x가 false 일 때 y 값을 x에 할당 즉, x = x || y
x &&= y; // x가 true 일 때 y 값을 x에 할당 즉, x = x && y
x ??= y; // x가 undefine, null 일 때 y 값을 x에 할당 즉, x = x ?? y

let title;

title ||= '범쌤과 함께하는 JS수업!';

let person = {
  firstName: 'jongdeok',
  lastName: 'kim',
};

person.lastName &&= 'sin';

let user = {
  userName: 'kindtiger',
};

user.nickName ??= 'tiger';
