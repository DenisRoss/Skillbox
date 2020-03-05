var User = function(name, login, password)
{
this.name = name;
this.login = login;
this.password = password;
};

var firstMan = new User("First", "FirstMan", "123456");
var secondMan = new User("Second", "SecondMan", "456798");
var thirdMan = new User("Third", "ThirdMan", "789123");

function checkTheUser(users) {
  var logName = prompt('Введите логин пользователя');
  var logPassword = prompt('Введите пароль');

for (var prop in users) {
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
for(var i = 0; i < User.length; i++)
checkTheUser(User[i]);
