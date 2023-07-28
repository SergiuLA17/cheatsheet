//
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}
var isSameTree = function (p, q) {
    if (!p && !q) return true;
    if (!p || !q || p.val !== q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
//
var isPalindrome = function (s) {
    let checkNonAphabet = s.replace(/[a-zA-Z0-9.,: ]/g, '');

    if (checkNonAphabet.length > 0) {
        return false;
    }
    let lettersOnly = s.replace(/[^a-zA-Z]/g, '').toLowerCase();
    let reverseStr = lettersOnly.split('').reverse().join('').toLowerCase();
    return lettersOnly === reverseStr ? true : false;
};
//
var createCounter = function (n) {
    return function () {
        return n++;
    };
};
var one = createCounter(10);
var two = createCounter(5);

//
var maxArea = function (height) {
    const dictionary1 = {};
    const dictionary2 = {};

    height.forEach((value, index) => {
        if (index < height.length / 2) {
            dictionary1[index] = value;
        } else {
            dictionary2[index] = value;
        }
    });

    const sortedDictionary1 = Object.entries(dictionary1).sort(
        (a, b) => b[1] - a[1]
    );
    const sortedDictionary2 = Object.entries(dictionary2).sort(
        (a, b) => a[1] - b[1]
    );

    let targetOne = 0;
    let targetSec = 0;

    for (let i = 0; i < sortedDictionary1.length - 1; i++) {
        const higthIndex = Number(sortedDictionary1[i][0]);
        const higth = Number(sortedDictionary1[i][1]);

        const secHigthIndex = Number(sortedDictionary1[i + 1][0]);
        const secHigth = Number(sortedDictionary1[i + 1][1]);

        if((targetOne > higth && targetOne > secHigth)){
            continue;
        }

        targetOne =  higth > secHigth && higthIndex < secHigthIndex   ? higth : secHigth;
    }

    for (let i = sortedDictionary2.length - 1; i >= 0; i--) {
        const higthIndex = sortedDictionary1[i][0];
        const higth = sortedDictionary1[i][1];

        const secHigthIndex = Number(sortedDictionary1[i + 1][0]);
        const secHigth = sortedDictionary1[i + 1][1];

        if((targetOne > higth && targetOne > secHigth)){
            continue;
        }
       
        targetSec = higth > secHigth && higthIndex > secHigthIndex ? higth : secHigth;
    }
    console.log(sortedDictionary1)
    console.log(sortedDictionary2)
  console.log(targetOne,targetSec)
};
maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
