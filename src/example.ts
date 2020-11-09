/*
// 1. Напиши тип функции, конкатенирующей две строки
type concatFn = (a: string, b: string) => string;

const concat: concatFn = (str1, str2) => {
  return str1 + str2;
};

concat('Hello ', 'World');


// 2. Напиши интерфейс для описания перечисленных данных
// Первый вариант:
type strOrNumArray = (number | string)[];
// Второй вариант:
type strOrNumArray2 = [string, string, number];

interface objectInArray {
	howIDoIt: string;
	simeArray: strOrNumArray;
};

interface IHomeTask {
	howIDoIt: string;
	simeArray: strOrNumArray;
	withData?: objectInArray[];
}

const MyHometask: IHomeTask = {
	howIDoIt: "I Do It Wel",
	simeArray: ["string one", "string two", 42],
	withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
};

// 3. К интерфейсу массива MyArray добавь типизацию для метода reduce

interface MyArray<T> {
  [n: number]: T;
	map<U>(fn: (el: T) => U): U[];
	// reduce:<U>(fn: (acc: U, el: T, index?: number, array?: T[]) => U, init: U): U; // показывает ошибку
}
*/
