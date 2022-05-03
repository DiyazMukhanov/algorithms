// const myArr = [1,2,3,4,5,6,7,8];

//Бинарный поиск
//Поиск элемента
// function searchElement2(arr, el) {
//     let left = -1;
//     let right = arr.length 

//     while(right - left > 1) {
//         const mid = Math.floor((left + right) / 2);
//         if (arr[mid] === el) {
//             return mid;
//         }
//         if(arr[mid] > el) {
//             right  = mid;
//         } else {
//             left = mid;
//         }
//     }

//     return -1;
// }

// console.log(searchElement2(myArr, 3))


//Задача на бинарный поиск
//Скольок раз встречается определенный элемент в массиве

const myArr = [1, 2, 3, 2, 4, 5, 2, 3, 8, 12, 10, 3, 3, 6, 3, 8, ,8, 3]
console.log(myArr)

//let's sort first

myArr.sort((a, b) => a - b);
console.log(myArr)

//we will find 3 for example and check the length of threes

function binSearch(arr, el) {
    let left = -1;
    let right = arr.length 

    while(right - left > 1) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === el) {
            return mid;
        }
        if(arr[mid] > el) {
            right  = mid;
        } else {
            left = mid;
        }
    }

    return -1;
}

function countFreq(arr, el) {
	const posEl = binSearch(arr, el);

	if(posEl === -1) {
		return 0;
	}

	let i = posEl;
	while(arr[i] === el) {
       i--;
	}

	let j = posEl;
	while(arr[j] === el) {
		j++;
	}

	return j - i - 1; 
}

console.log(countFreq(myArr, 100));






