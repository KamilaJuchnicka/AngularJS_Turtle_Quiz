(function(){

    angular.module("turtleFacts")
            .factory("quizMetrics", QuizMetrics);

            QuizMetrics.$inject = ['DataService'];

        function QuizMetrics(DataService){
          var quizObj = {
            quizActive: false,
            resultsActive: false,
            // changeState: changeState,
            correctAnswers: []

          };

          return quizObj;


        }

})();
