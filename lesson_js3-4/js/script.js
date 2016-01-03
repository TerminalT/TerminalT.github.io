var app = {};

app.createElement = function(tag, parent, className, innerHTML) {
  var elem = document.createElement(tag);
  parent.appendChild(elem);
  if (className) {
    elem.className = className;
  }
  if (innerHTML) {
    elem.innerHTML = innerHTML;
  }
  return elem;
};

app.CreateCheckbox = function(parent, text) {


  var div = app.createElement('div', parent, 'checkbox');
  var label = app.createElement('label', div);
  var input = app.createElement('input', label);
  input.type = 'checkbox';
  app.createElement('p', label, '', text);

};

window.onload = function() {
  var div = app.createElement('div', document.body, 'header');
  app.createElement('h4', div, '', 'Тест по программированию');
  var content = app.createElement('ul', document.body, 'content');
  for (var i = 1; i <= 3; i++) {
    var question = app.createElement('li', content);
    app.createElement('h5', question, '', i + '.Вопрос № ' + i);
    var ul = app.createElement('ul', question);
    for (var j = 1; j <= 3; j++) {
      var answer = app.createElement('li', ul);
      app.CreateCheckbox(answer, 'Вариант ответа ' + j);

    }

  }

  var button = app.createElement('div', document.body, 'button');
  var btn = app.createElement('button', button, 'btn btn-primary', 'Проверить результат');
  btn.type = 'button';
};