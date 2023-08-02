// Через innerHTML:

// const body = document.querySelector('body');
// const formHTML = `<form class="create-user-form">
// <label>
//     Имя
//     <input type="text" name="userName" placeholder="Введите ваше имя">
// </label>
// <label>
//     Пароль
//     <input type="password" name="password" placeholder="Придумайте Пароль">
// </label>
// <button type="submit">
//     Подтвердить
// </button>
// </form>`;

// body.innerHTML = formHTML;

// Через document.createElement()

const body = document.querySelector('body');

const form = document.createElement('form');
form.className = 'create-user-form';
body.prepend(form);
// body.insertAdjacentElement('afterbegin', form);

const label1 = document.createElement('label');
// label1.textContent = 'Имя ';
// form.insertAdjacentElement('beforeend', label1);
form.append('Имя ',label1);

const input1 = document.createElement('input');
input1.type = 'text';
input1.name = 'userName';
input1.placeholder = 'Введите ваше имя';
label1.append(input1);
// label1.insertAdjacentElement('beforeend', input1)

const label2 = document.createElement('label');
// label2.textContent = 'Пароль ';
// form.insertAdjacentElement('beforeend', label2);
form.append('Пароль ',label2);

const input2 = document.createElement('input');
input2.type = 'password';
input2.name = 'password';
input2.placeholder = 'Придумайте Пароль';
label2.append(input2);
// label2.insertAdjacentElement('beforeend', input2);

const button = document.createElement('button');
button.type = 'submit';
button.textContent = 'Подтвердить';
form.append(button);
// form.insertAdjacentElement('beforeend', button);
