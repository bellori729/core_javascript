/* ------------------- */
/* Logical Operators   */
/* ------------------- */

// let age = prompt('나이를 입력하세요');

// if (age >= 14 && age <= 90) {
//   alert('14세 이상 90세 이하이시네요');
// }

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;

console.log(AandB);

// logical AND Assignment 논리곱 할당 연산자

// a = a && b;
// a &&= b;

// 논리합(또는) 연산자
let AorB = a || b;
console.log(AorB);

// Logical OR Assignment 논리합 할당 연산자

a ||= b;

// 부정 연산자
let reverseValue = !value;

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && { thisIsFalsy: false };

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2, 3].length || { thisIsTruthy: true };

function login() {
  let userName = prompt('누구십니까?')?.toLowerCase();

  if (!userName) return;

  if (userName === 'admin') {
    console.log('환영합니다.');

    let password = prompt('비밀번호는?')?.toLowerCase();

    if (password === 'themaster') {
      console.log('로그인 성공! 환영합니다.');
    } else {
      console.log('비밀번호 잘못 입력했습니다.');
    }
  } else if (userName === null || userName === '' || userName === ' ') {
    console.log('취소되었습니다.');
  } else {
    console.log('올바른 사용자가 아닙니다.');
  }
}

// let login = prompt('ID를 입력하세요');

// // 취소 버튼과 ESC 누르면 null이 뜸.
// // 어떤 값도 입력하지 않고 엔터를 누르면 => 빈문자 ''

// if (login === 'Admin') {
//   let pw = prompt('비밀번호를 입력하세요.');

//   if (pw === 'TheMaster') {
//     alert('환영합니다!');
//   } else if (pw === null) {
//     alert('취소되었습니다.');
//   } else if (login !== 'TheMaster') {
//     alert('인증에 실패하였습니다.');
//   }
// } else if (login === null) {
//   alert('취소되었습니다.');
// } else if (login !== 'Admin') {
//   alert('너 누구야 ㄱ-..');
// }
