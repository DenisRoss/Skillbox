// Я поправил форматирование.
// Обратите внимание на табуляцию и пустые строки - которые помогают разграничить блоки кода и сделать код читабельнее.
var User = function(name, login, password) {
  this.name = name;
  this.login = login;
  this.password = password;
};

var firstMan = new User("First", "FirstMan", "123456");
var secondMan = new User("Second", "SecondMan", "456798");
var thirdMan = new User("Third", "ThirdMan", "789123");
// Как насчет массива пользователей?
// var users = [
//   new User("First", "FirstMan", "123456"),
//   new User("Second", "SecondMan", "456798"),
//   new User("Third", "ThirdMan", "789123")
// ]

// Имя параметра users - лучше использовать в единственном числе.
// Множественно число лучше использовать если речь идет о массивах,
// а в данном случае в качестве параметра ожидается объект.
function checkTheUser(users) {
  // users - всегда будет undefined, посмотрите на блок кода, где вызывается функция.
  var logName = prompt('Введите логин пользователя');
  var logPassword = prompt('Введите пароль');

  console.log('users', users)
  for (var prop in users) {
    // propValues лучше в единственном числе, ведь речь о значении, а не значениях.
    var propValues = users[prop];
    console.log(prop + ' - ' + propValues);
  }

  if ((logName == firstMan.login) && (logPassword == firstMan.password)) {
    alert("Привет, Первый!");
  }
  else if ((logName == secondMan.login) && (logPassword == secondMan.password)) {
    alert("Привет, Второй!");
  }
  else if ((logName == thirdMan.login) && (logPassword == thirdMan.password)) {
    alert("Привет, Третий!");
  }
  else {
    alert('Неправильная авторизация');
  }
}

// User - это функция и User.length - возвращает количество аргументов, которое принимает функция.
// User[i] - не элемент массива и не объект
// Эту часть кода нужно переписать, как и часть функции checkTheUser
for(var i = 0; i < User.length; i++)
  checkTheUser(User[i]);

// Попробуйте переписать код так, чтобы объекты пользователей находились в массиве.
// Тогда вы сможете сделать обход этого массива в цикле и проверить каждого пользователя.
// Так же из функции checkTheUser нужно вынести promp
// или организовать код так, чтобы обход массива пользователей был внутри этой функции, и вызывалась она единожды.
