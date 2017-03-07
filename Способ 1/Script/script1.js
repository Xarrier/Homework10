var secondName=prompt ('Введите Вашу фамилию'),
    firstName=prompt ('Введите Ваше имя'),
    patronName=prompt ('Введите Ваше отчество'),
    age=Number(prompt ('Введите Ваш возраст (полных лет)')),
    gender=confirm ('Ваш пол мужской (да/нет)');
if ((gender==true && age > 60) || (gender==false && age > 55)) {
   pension='да';
} else {
   pension='нет';
}
if (gender==true) {
   gender='да';
} else {
   gender='нет';
}
alert (`Ваше ФИО: ${secondName} ${firstName} ${patronName}
Ваш возраст в годах: ${age}
Ваш возраст в днях: ${(age*360)}
Через 5 лет Вам будет: ${(age+5)}
Ваш пол мужской: ${gender}
Вы на пенсии: ${pension}`);
