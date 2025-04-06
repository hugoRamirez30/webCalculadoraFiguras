function createInputFields() {
    const shape = document.getElementById('shapeSelect').value;
    const container = document.getElementById('inputContainer');
    container.innerHTML = '';
    document.getElementById('result').style.display = 'none';
    document.getElementById('procedure').style.display = 'none';

    switch(shape) {
        case 'triangulo-isosceles':
            container.innerHTML = `
                <div class="shape-container">
                    <div class="image-container">
                        <img src="img/isosceles_triangle.png" alt="Triángulo Isósceles">
                    </div>
                    <div class="input-group-container">
                        <div class="input-group">
                            <label>Base (b):</label>
                            <input type="number" id="base" step="any" required>
                        </div>
                        <div class="input-group">
                            <label>Lados iguales (a):</label>
                            <input type="number" id="lado" step="any" required>
                        </div>
                    </div>
                </div>`;
            break;

        case 'triangulo-rectangulo':
            container.innerHTML = `
                <div class="shape-container">
                    <div class="image-container">
                        <img src="img/right_triangle.png" alt="Triángulo rectangulo">
                    </div>
                <div class="input-group">
                    <label>Base (b):</label>
                    <input type="number" id="base" step="any" required>
                </div>
                <div class="input-group">
                    <label>Altura (a):</label>
                    <input type="number" id="altura" step="any" required>
                </div>`;
            break;

        case 'triangulo-equilatero':
            container.innerHTML = `
                <div class="shape-container">
                    <div class="image-container">
                        <img src="img/equilateral_triangle.png" alt="Triángulo equilatero">
                    </div>
                <div class="input-group">
                    <label>Lado (a):</label>
                    <input type="number" id="lado" step="any" required>
                </div>`;
            break;

        case 'circulo-elipse':
            container.innerHTML = `
                <div class="shape-container">
                    <div class="image-container">
                        <img src="img/circle.png" alt="circulo">
                    </div>
                    <div class="input-group">
                        <label>Radio (r):</label>
                        <input type="number" id="radio" step="any" required>
                    </div>`;
            break;

        case 'rectangulo':
            container.innerHTML = `
                <div class="shape-container">
                    <div class="image-container">
                        <img src="img/rectangle.png" alt="Rectangulo">
                    </div>
                <div class="input-group">
                    <label>Largo (a):</label>
                    <input type="number" id="longitud" step="any" required>
                </div>
                <div class="input-group">
                    <label>Ancho (b):</label>
                    <input type="number" id="ancho" step="any" required>
                </div>`;
            break;

        case 'rombo':
            container.innerHTML = `
                <div class="shape-container">
                    <div class="image-container">
                        <img src="img/rhombus.png" alt="Rombo">
                    </div>
                    <div class="input-group">
                        <label>Diagonal 1 (d1):</label>
                        <input type="number" id="d1" step="any" required>
                    </div>
                    <div class="input-group">
                        <label>Diagonal 2 (d2):</label>
                        <input type="number" id="d2" step="any" required>
                    </div>
                    <div class="input-group">
                        <label>Lado (l):</label>
                        <input type="number" id="ladoRombo" step="any" required>
                    </div>`;
            break;
    }

    
    const inputs = container.querySelectorAll('input[type="number"]');
    inputs.forEach(input => {
        input.addEventListener('keydown', function(e) {
            if (['e', 'E', '+', '-'].includes(e.key)) {
                e.preventDefault();
            }
        });
    });
}

function calculate() {
    try {
        const shape = document.getElementById('shapeSelect').value;
        let area, perimetro, procedureText = "";

        function formatNumber(num) {
            return Number.isInteger(num) ? num : num.toFixed(2);
        }

        switch (shape) {
            case 'triangulo-isosceles':
                const base = parseFloat(document.getElementById('base').value);
                const lado = parseFloat(document.getElementById('lado').value);
                if (base <= 0 || lado <= 0) throw new Error('Valores deben ser positivos');
                if (base >= 2 * lado) throw new Error('Base debe ser menor que 2 veces el lado');

                const alturaTri = Math.sqrt(Math.pow(lado, 2) - Math.pow(base / 2, 2));
                area = (base * alturaTri) / 2;
                perimetro = base + 2 * lado;

                procedureText = `
                    1. Calculamos la altura: √(a² - (b/2)²) = ${formatNumber(alturaTri)}<br>
                    2. El área es: (b * altura) / 2 = ${formatNumber(area)}<br>
                    3. El perímetro es: b + 2 * a = ${formatNumber(perimetro)}
                `;
                break;

            case 'triangulo-rectangulo':
                const baseR = parseFloat(document.getElementById('base').value);
                const alturaR = parseFloat(document.getElementById('altura').value);
                if (baseR <= 0 || alturaR <= 0) throw new Error('Valores deben ser positivos');

                const hipotenusa = Math.sqrt(baseR ** 2 + alturaR ** 2);
                area = (baseR * alturaR) / 2;
                perimetro = baseR + alturaR + hipotenusa;

                procedureText = `
                    1. Calculamos la hipotenusa: √(b² + a²) = ${formatNumber(hipotenusa)}<br>
                    2. El área es: (b * a) / 2 = ${formatNumber(area)}<br>
                    3. El perímetro es: b + a + hipotenusa = ${formatNumber(perimetro)}
                `;
                break;

            case 'triangulo-equilatero':
                const ladoE = parseFloat(document.getElementById('lado').value);
                if (ladoE <= 0) throw new Error('El lado debe ser positivo');

                area = (Math.sqrt(3) / 4) * ladoE ** 2;
                perimetro = 3 * ladoE;

                procedureText = `
                    1. El área es: (√3 / 4) * a² = ${formatNumber(area)}<br>
                    2. El perímetro es: 3 * a = ${formatNumber(perimetro)}
                `;
                break;

            case 'circulo-elipse':
                const r = parseFloat(document.getElementById('radio').value);
                if (r <= 0) throw new Error('El radio debe ser positivo');

                area = Math.PI * r * r;
                perimetro = 2 * Math.PI * r;

                procedureText = `
                    1. El área es: π * r² = ${formatNumber(area)}<br>
                    2. El perímetro es: 2 * π * r = ${formatNumber(perimetro)}
                `;
                break;

            case 'rectangulo':
                const longitud = parseFloat(document.getElementById('longitud').value);
                const ancho = parseFloat(document.getElementById('ancho').value);
                if (longitud <= 0 || ancho <= 0) throw new Error('Valores deben ser positivos');

                area = longitud * ancho;
                perimetro = 2 * (longitud + ancho);

                procedureText = `
                    1. El área es: a * b = ${formatNumber(area)}<br>
                    2. El perímetro es: 2 * (a + b) = ${formatNumber(perimetro)}
                `;
                break;

            case 'rombo':
                const d1 = parseFloat(document.getElementById('d1').value);
                const d2 = parseFloat(document.getElementById('d2').value);
                const ladoRomboInput = parseFloat(document.getElementById('ladoRombo').value);
                if (d1 <= 0 || d2 <= 0 || ladoRomboInput <= 0) throw new Error('Diagonales y lado deben ser positivos');

                area = (d1 * d2) / 2;
                perimetro = 4 * ladoRomboInput;

                procedureText = `
                    1. El área es: (d1 * d2) / 2 = ${formatNumber(area)}<br>
                    2. El perímetro es: 4 * lado = ${formatNumber(perimetro)}
                `;
                break;

            default:
                throw new Error('Selecciona una figura');
        }

        document.getElementById('areaResult').innerText = formatNumber(area);
        document.getElementById('perimetroResult').innerText = formatNumber(perimetro);

        document.getElementById('result').style.display = 'block';
        document.getElementById('procedure').style.display = 'block';
        document.getElementById('procedureText').innerHTML = procedureText;
    } catch (error) {
        alert(error.message);
    }
}
