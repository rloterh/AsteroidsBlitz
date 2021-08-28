const scoreForm = document.querySelector('#score-form')
const docBody = document.body
const ul = document.createElement('ul');

docBody.insertBefore(ul, scoreForm)
export {scoreForm,ul}