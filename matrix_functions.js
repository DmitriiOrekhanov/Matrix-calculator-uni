// Функция для создания матрицы заданного размера со случайными значениями от -10 до 10
function createMatrix(rows, cols) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            // Генерируем случайные числа от -10 до 10
            row.push(Math.floor(Math.random() * 21) - 10);
        }
        matrix.push(row);
    }
    return matrix;
}

// Функция для вывода матрицы в консоль
function printMatrix(matrix, name) {
    console.log(`Матрица ${name}:`);
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join('\t'));
    }
    console.log();
}

// Функция для получения произведения положительных элементов главной диагонали
function getPositiveDiagonalProduct(matrix) {
    let product = 1;
    let hasPositive = false;
    
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][i] > 0) {
            product *= matrix[i][i];
            hasPositive = true;
        }
    }
    
    // Если нет положительных элементов, возвращаем 0
    return hasPositive ? product : 0;
}

// Основная функция для решения задачи
function solveTask() {
    // Создаем матрицы A(5×5), B(7×7), C(4×4)
    const matrixA = createMatrix(5, 5);
    const matrixB = createMatrix(7, 7);
    const matrixC = createMatrix(4, 4);
    
    // Выводим матрицы
    printMatrix(matrixA, 'A');
    printMatrix(matrixB, 'B');
    printMatrix(matrixC, 'C');
    
    // Вычисляем произведения положительных элементов главных диагоналей
    const productA = getPositiveDiagonalProduct(matrixA);
    const productB = getPositiveDiagonalProduct(matrixB);
    const productC = getPositiveDiagonalProduct(matrixC);
    
    console.log(`Произведение положительных элементов главной диагонали матрицы A: ${productA}`);
    console.log(`Произведение положительных элементов главной диагонали матрицы B: ${productB}`);
    console.log(`Произведение положительных элементов главной диагонали матрицы C: ${productC}`);
    
    // Вычисляем значение выражения PA + PB - PC
    const result = productA + productB - productC;
    console.log(`Результат выражения PA + PB - PC = ${result}`);
}

// Запускаем решение задачи
solveTask();