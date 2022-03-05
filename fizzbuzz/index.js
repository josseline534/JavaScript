let numMax = 100;

const divForThree = (num) => {
    if (num % 3 == 0) {
        return true;
    }
    return false;
};

const divForFive = (num) => {
    if (num % 5 == 0) {
        return true;
    }
    return false;
};

for (let i = 1; i < numMax + 1; i++) {
    if (!divForThree(i) && !divForFive(i)) document.write(i);
    else {
        if (divForThree(i)) document.write("Fizz");
        if (divForFive(i)) document.write("Buzz");
    }
    document.write("<br/>");
}
