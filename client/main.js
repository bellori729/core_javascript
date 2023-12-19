/* global gsap */
import jujeobData from './data/data.js'; // 주접 데이터 불러오기
import {
  getNode,
  getRandom,
  isNumericString,
  showAlert,
  shake,
  insertLast,
  clearContents,
  copy,
} from './lib/index.js';

// [phase - 1]
// 1. 주접 떨기 버튼을 클릭할 수 있는 핸들러 연결
// 2. nameField에 있는 값을 가져오기
// 3. 주접 데이터를 가져오기
// 4. 주접데이터에서 랜덤한 주접 한 개를 가져오기

// [phase - 2]
// 1. 아무 값도 입력 받지 못했을 때 예외 처리 (콘솔창 출력)
// 2. 공백 문자를 받았을 때 예외 처리 (콘솔창 출력)

const submit = getNode('#submit');
const nameField = document.querySelector('#nameField');
const result = getNode('.result');

function handleSubmit(e) {
  e.preventDefault();
  const name = nameField.value;
  const list = jujeobData(name);
  const pick = list[getRandom(list.length)];

  if (!name || name.replace(/\s*/g, '') === '') {
    // 규식이형은 여러 개의 공백을 받았을 때
    console.log('error!');
    showAlert('.alert-error', '이름을 입력해주세요!', 1500); // node, message, timer
    shake.restart();
    return;
  }

  if (!isNumericString(name)) {
    showAlert('.alert-error', '제대로 된 이름을 입력해주세요.', 2000);
    shake.restart();
    return;
  }

  clearContents(result);
  insertLast(result, pick);
}

function handleCopy() {
  const text = result.textContent; // result 안에 있는 text 값 가져오기
  if (nameField.value) {
    copy(text).then(() => {
      showAlert('.alert-success', '클립보드 복사 완료!!');
    });
  }
}

submit.addEventListener('click', handleSubmit);
result.addEventListener('click', handleCopy);
