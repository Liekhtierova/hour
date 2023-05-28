const min = 20;

if (min > 0 && min <= 15) {
    console.log('Перша чверть');
} else if (min > 15 && min <= 30) {
    console.log('Друга чверть');
} else if (min > 30 && min <= 45) {
    console.log('Третя чверть');
} else if (min > 45 && min <= 60 || min === 0) {
    console.log('Четверта чверть');
} else if (min > 60 || min < 0) {
    console.log('Значення змінної введено некоректно');
}
