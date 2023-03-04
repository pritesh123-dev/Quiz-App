$(document).ready(function () {
  $.get("https://5d76bf96515d1a0014085cf9.mockapi.io/quiz", function (data) {
    for (var i = 0; i < data.length; i++) {
      quizQuestion(data[i].question, data[i].options, data[i].id);


      function quizQuestion(questionData, optionsData, idData) {
        var boderDiv = $("<div></div>");
        boderDiv.addClass("borderClass");
        var heading = $("<h2></h2>").text("Q" + idData + ". " + questionData);
        $(boderDiv).append(heading);
        for (var j = 0; j < optionsData.length; j++) {
          var inputData = `<label for="${data[i].options[j] + data[i].id}">
        <input type="radio" id="${data[i].options[j] + data[i].id}" name="${
            data[i].id
          }"  value="${data[i].options[j]}">${data[i].options[j]}
        </label>`;
          $(boderDiv).append(inputData);
        }
        $("form").append(boderDiv);
      }
    }
    
    var submitButton = `<button id="submit" type="submit">Submit</button>`;
    $("form").append(submitButton);

    $("#submit").click(function (e) {
      var ans = $("input:checked");
      var count = 0;
      e.preventDefault();
      for (var z = 0; z < ans.length; z++) {
        var options = data[ans[z].name - 1].options;
        console.log(options)
        if (data[ans[z].name - 1].answer == options.indexOf(ans[z].value) + 1) {
          count++;
        }
      }
      $("span").text(count);
    });
  });
});
