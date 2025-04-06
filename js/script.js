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

