(function() {
    "use strict";

    var el = function(element) {
      if (element.charAt(0) === "#") {
        return document.querySelector(element); // ... returns single element
      }
  
      return document.querySelectorAll(element); // Otherwise, returns a nodelist
    };
  
    // змінні
    var viewer = el("#viewer"), // Поле вводу/відображення Calculator screen where result is displayed
      equals = el("#equals"), // Кнопка результат
      nums = el(".num"), // Перелік цифр, кнопок
      ops = el(".ops"), // Перелік операторів
      theNum = "", // Current number
      oldNum = "", // First number
      resultNum, // Результат
      operator; // Оператор
  
    // Коли цифра нажата. Збереження даної цифри.
    var setNum = function() {
      if (resultNum) { // Якщо результат був відображений - чистимо цирру.
        theNum = this.getAttribute("data-num");
        resultNum = "";
      } else { // Otherwise, add digit to previous number (this is a string!)
        theNum += this.getAttribute("data-num");
      }
  
      viewer.innerHTML = theNum; // Відображення даної цифри
  
    };
  
    // Коли оператор обраний. Переобрання введених цифр
    var moveNum = function() {
      oldNum = theNum;
      theNum = "";
      operator = this.getAttribute("data-ops");
  
      equals.setAttribute("data-result", ""); // Reset result in attr
    };
  
    // Коли нажав дорівнює
    var displayNum = function() {
  
      // Перетврорення колонок стрічок в цифри
      oldNum = parseFloat(oldNum);
      theNum = parseFloat(theNum);
  
      // Perform operation
      switch (operator) {
        case "plus":
            resultNum = oldNum + theNum;
            break;
  
        case "minus":
            resultNum = oldNum - theNum;
            break;
  
        case "mult":
            resultNum = oldNum * theNum;
            break;
  
        case "division":
            resultNum = oldNum / theNum;
            break;

        case "percent":
            resultNum = (oldNum * theNum) / 100;
            break;
  
          // Якщо не нажимати результат
        default:
          resultNum = theNum;
      }
  
      // If NaN or Infinity returned
      if (!isFinite(resultNum)) {
        if (isNaN(resultNum)) { // If result is not a number; set off by, eg, double-clicking operators
          resultNum = "Введено не всі дані";
        } else { // If result is infinity, set off by dividing by zero
          resultNum = "Look at what you've done";
          el('#calculator').classList.add("broken"); // Break calculator
          el('#reset').classList.add("show"); // And show reset button
        }
      }
  
      // Display result, finally!
      viewer.innerHTML = resultNum;
      equals.setAttribute("data-result", resultNum);
  
      // Now reset oldNum & keep result
      oldNum = 0;
      theNum = resultNum;
  
    };
  
    // When: Clear button is pressed. Clear everything
    var clearAll = function() {
      oldNum = "";
      theNum = "";
      viewer.innerHTML = "0";
      equals.setAttribute("data-result", resultNum);
    };
  
    /* The click events */
  
    // Add click event to numbers
    for (var i = 0, l = nums.length; i < l; i++) {
      nums[i].onclick = setNum;
    }
  
    // Add click event to operators
    for (var i = 0, l = ops.length; i < l; i++) {
      ops[i].onclick = moveNum;
    }
  
    // Add click event to equal sign
    equals.onclick = displayNum;
  
    // Кнопка для очищення поля введення/виведення Add click event to clear button
    el("#clear").onclick = clearAll;  
  }());