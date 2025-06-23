class Matrix {
    constructor(rows, cols, name) {
        this.rows = rows;
        this.cols = cols;
        this.name = name;
        this.data = this.createRandomMatrix();
    }
    
    // Создание матрицы со случайными значениями от -10 до 10
    createRandomMatrix() {
        const matrix = [];
        for (let i = 0; i < this.rows; i++) {
            const row = [];
            for (let j = 0; j < this.cols; j++) {
                // Генерируем случайные числа от -10 до 10
                row.push(Math.floor(Math.random() * 21) - 10);
            }
            matrix.push(row);
        }
        return matrix;
    }
    
    // Вывод матрицы в консоль
    print() {
        console.log(`Матрица ${this.name}:`);
        for (let i = 0; i < this.rows; i++) {
            console.log(this.data[i].join('\t'));
        }
        console.log();
    }
    
    // Получение произведения положительных элементов главной диагонали
    getPositiveDiagonalProduct() {
        let product = 1;
        let hasPositive = false;
        
        const minDim = Math.min(this.rows, this.cols);
        for (let i = 0; i < minDim; i++) {
            if (this.data[i][i] > 0) {
                product *= this.data[i][i];
                hasPositive = true;
            }
        }
        
        // Если нет положительных элементов, возвращаем 0
        return hasPositive ? product : 0;
    }
}

class MatrixCalculator {
    constructor() {
        this.matrices = [];
    }
    
    // Добавление матрицы в калькулятор
    addMatrix(matrix) {
        this.matrices.push(matrix);
    }
    
    // Вычисление выражения PA + PB - PC
    calculateExpression() {
        if (this.matrices.length < 3) {
            throw new Error('Необходимо добавить как минимум 3 матрицы');
        }
        
        const productA = this.matrices[0].getPositiveDiagonalProduct();
        const productB = this.matrices[1].getPositiveDiagonalProduct();
        const productC = this.matrices[2].getPositiveDiagonalProduct();
        
        console.log(`Произведение положительных элементов главной диагонали матрицы ${this.matrices[0].name}: ${productA}`);
        console.log(`Произведение положительных элементов главной диагонали матрицы ${this.matrices[1].name}: ${productB}`);
        console.log(`Произведение положительных элементов главной диагонали матрицы ${this.matrices[2].name}: ${productC}`);
        
        const result = productA + productB - productC;
        console.log(`Результат выражения PA + PB - PC = ${result}`);
        
        return result;
    }
}

// Основная функция для запуска программы
function main() {
    // Создаем матрицы A(5×5), B(7×7), C(4×4)
    const matrixA = new Matrix(5, 5, 'A');
    const matrixB = new Matrix(7, 7, 'B');
    const matrixC = new Matrix(4, 4, 'C');
    
    // Выводим матрицы
    matrixA.print();
    matrixB.print();
    matrixC.print();
    
    // Создаем калькулятор и добавляем матрицы
    const calculator = new MatrixCalculator();
    calculator.addMatrix(matrixA);
    calculator.addMatrix(matrixB);
    calculator.addMatrix(matrixC);
    
    // Вычисляем выражение
    calculator.calculateExpression();
}

// Запускаем программу
main();