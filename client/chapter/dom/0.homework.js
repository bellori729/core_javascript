// // querySelector

// const button = document.querySelector('.menu-button');
// const menu = document.querySelector('.menu');

// // console.log(button);

// // eventListener 이벤트 핸들러 => click : 객체, scroll : 객체

// function handleMenu(e) {
//   // preventDefault
//   e.preventDefault();
//   // classList
//   // 메뉴에게.클래스를.넣어준다('is-active')
//   // menu.classList.add('is-active');
//   // 빼고
//   // menu.classList.remove('is-active');
//   // 넣고 빼고
//   menu.classList.toggle('is-active');
// }

// button.addEventListener('click', handleMenu);

(function () {
  const user = {
    id: 'asd@naver.com',
    pw: 'spdlqj123!@',
  };

  /*
  1. email 정규표현식을 사용한 validation
    - false면 해당 input에 is--invalid 클래스 추가     
    - true 해당 input에 is--invalid 클래스 제거     

  2. pw 정규표현식을 사용한 validation
    - false면 해당 input에 is--invalid 클래스 추가     
    - true 해당 input에 is--invalid 클래스 제거     

  3. 상태 변수 관리


  4. 로그인 버튼을 클릭시 조건처리

  */

  const emailInput = document.querySelector('#userEmail');
  const pwInput = document.querySelector('#userPassword');
  const loginButton = document.querySelector('.btn-login');

  let emailPass = false;
  let pwPass = false;

  function emailReg(text) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(String(text).toLowerCase());
  }

  function pwReg(text) {
    const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
    return re.test(String(text).toLowerCase());
  }

  function handleCheckEmail() {
    let value = this.value;

    if (emailReg(value)) {
      // success
      this.classList.remove('is--invalid');
      emailPass = true;
    } else {
      this.classList.add('is--invalid');
      emailPass = false;
    }
  }

  function handleCheckPw() {
    let value = this.value;

    if (pwReg(value)) {
      // success
      this.classList.remove('is--invalid');
      pwPass = true;
    } else {
      this.classList.add('is--invalid');
      pwPass = false;
    }
  }

  function handleLogin(e) {
    e.preventDefault();

    if (emailPass && pwPass) {
      const id = emailInput.value;
      const pw = pwInput.value;
      const getUserId = user.id; // 비동기 => 1s
      const getUserPw = user.pw; // 비동기 => 1s

      console.log(getUserId, getUserPw);

      if (id === getUserId && pw === getUserPw) {
        // console.log('로그인 성공!');

        window.location.href = './welcome.html';
      }
    } else {
      console.log('입력부터 똑바로 하고와! ');
      // alert('dlqfurEhrqkfhgo!')
      gsap.to('form', {
        y: 10,
        repeat: 8,
        yoyo: true,
        duration: 0.08,
        clearProps: true,
      });
    }
  }

  emailInput.addEventListener('input', handleCheckEmail);
  pwInput.addEventListener('input', handleCheckPw);
  loginButton.addEventListener('click', handleLogin);
})();
