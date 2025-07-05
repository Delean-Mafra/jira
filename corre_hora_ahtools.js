@@ -468,12 +468,12 @@ <h1 class="text-2xl font-bold text-center text-gray-800 mb-4">Calculadora de Hor

        <!-- Display -->
        <div class="calc-display mb-2">
            <span id="display">00:00</span>
            <span id="display">000:00</span>
        </div>

        <!-- Status message -->
        <div id="status-message" class="text-center text-sm text-gray-500 mb-2">
            <span id="hhmm">HH:MM</span>
            <span id="hhmm">HHH:MM</span>
            <span id="message" class="hidden"></span>
        </div>

@@ -623,11 +623,12 @@ <h3 class="text-lg font-semibold text-gray-800">
            let numbers = input.replace(/\D/g, "");
            let len = numbers.length;

            if (len === 0) return "00:00";
            if (len === 1) return `00:0${numbers}`;
            if (len === 2) return `00:${numbers}`;
            if (len === 3) return `0${numbers[0]}:${numbers.slice(1)}`;
            if (len >= 4) return `${numbers.slice(0, -2).padStart(2, '0')}:${numbers.slice(-2)}`;
            if (len === 0) return "000:00";
            if (len === 1) return `000:0${numbers}`;
            if (len === 2) return `000:${numbers}`;
            if (len === 3) return `00${numbers[0]}:${numbers.slice(1)}`;
            if (len === 4) return `0${numbers[0]}${numbers[1]}:${numbers.slice(2)}`;
            if (len >= 5) return `${numbers.slice(0, -2)}:${numbers.slice(-2)}`;
        }

        // Convert HH:MM to total minutes (pode ser negativo)
@@ -644,8 +645,8 @@ <h3 class="text-lg font-semibold text-gray-800">
            const hours = Math.floor(totalMinutes / 60);
            const minutes = totalMinutes % 60;

            // Formata com sinal negativo se necessário
            return `${isNegative ? '-' : ''}${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
            // Formata com sinal negativo se necessário, suportando até 999 horas
            return `${isNegative ? '-' : ''}${String(hours).padStart(3, '0')}:${String(minutes).padStart(2, '0')}`;
        }

        // Initialize calculator
@@ -666,7 +667,7 @@ <h3 class="text-lg font-semibold text-gray-800">
                rawInput = '';
                shouldResetDisplay = false;
            }
            if (rawInput.length >= 4) return; // limita a 4 dígitos (99:59)
            if (rawInput.length >= 5) return; // limita a 5 dígitos (999:59)
            rawInput += number;
            updateDisplay();
        }
@@ -692,7 +693,7 @@ <h3 class="text-lg font-semibold text-gray-800">

        // Set operator
        function setOperator(operator) {
            if (display.textContent !== '00:00') {
            if (display.textContent !== '000:00') {
                firstOperand = display.textContent;
                currentOperator = operator;
                shouldResetDisplay = true;
@@ -755,7 +756,7 @@ <h3 class="text-lg font-semibold text-gray-800">
        // Clear display
        function clearDisplay() {
            rawInput = '';
            display.textContent = '00:00';
            display.textContent = '000:00';
        }

        // Backspace
@@ -827,7 +828,7 @@ <h3 class="text-lg font-semibold text-gray-800">

        // Add night shift bonus (20% for work between 10pm and 5am)
        function addNightShift() {
            if (display.textContent !== '00:00') {
            if (display.textContent !== '000:00') {
                const time = display.textContent;
                const totalMinutes = timeToMinutes(time);

@@ -853,7 +854,7 @@ <h3 class="text-lg font-semibold text-gray-800">

        // Calculate work days based on daily hours
        function calculateWorkDays() {
            if (display.textContent !== '00:00') {
            if (display.textContent !== '000:00') {
                const totalTime = display.textContent;
                const dailyHours = workHoursPerDay;
