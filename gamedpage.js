p1=localStorage.getItem("player1");
p2=localStorage.getItem("player2");
var p1score=0;
var p2score=0;

document.getElementById("player1_name").innerHTML=p1 + ":";
document.getElementById("player2_name").innerHTML=p2 + ":";
document.getElementById("player1_score").innerHTML=p1score ;
document.getElementById("player2_score").innerHTML=p2score ;

document.getElementById("player_question").innerHTML="question turn :"+p1 ;
document.getElementById("player_answer").innerHTML="answer turn :"+p2 ;



    
function send()
 { get_word = document.getElementById("word").value;
  word = get_word.toLowerCase();
   console.log("word in lowerCase = " + word);
    charAt1 = word.charAt(1);
     console.log(charAt1);
      lenght_divide_2 = Math.floor(word.length/2);
       charAt2 = word.charAt(lenght_divide_2);
        console.log(charAt2);
         lenght_minus_1 = word.length - 1;
          charAt3 = word.charAt(lenght_minus_1);
           console.log(charAt3);
            remove_charAt1 = word.replace(charAt1, "_");
             remove_charAt2 = remove_charAt1.replace(charAt2, "_");
              remove_charAt3 = remove_charAt2.replace(charAt3, "_");
               console.log(remove_charAt3);
                question_word = "<h4 id='word_display'> Q. "+remove_charAt3+"</h4>";
                 input_box = "<br>Answer : <input type='text' id='input_check_box'>";
                  check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
                   row = question_word + input_box + check_button ;
                    document.getElementById("output").innerHTML = row;
                     document.getElementById("word").value = "";
                     }
question_turn="Player1"
answer_turn="Player2"
                     function check() {
                        get_answer = document.getElementById("input_check_box").value;
                        answer = get_answer.toLowerCase();
                         console.log("answer in lowerCase = " + answer);
                         if(answer==word)
                         {
                             if(answer_turn=="Player1")
                             {
                                 p1score=p1score+1;
                                 document.getElementById("player1_score").innerHTML=p1score ;

                             }
                             else
                             { p2score=p2score+1;
                                document.getElementById("player2_score").innerHTML=p2score ;
                            }
                         }
                         if (question_turn=="Player1")
                         {
                             question_turn="Player2";
                             document.getElementById("player_question").innerHTML="question turn :"+p2 ;
                         }
                         else {
                            question_turn="Player1";
                            document.getElementById("player_question").innerHTML="question turn :"+p1 ;
                         }

                         if (answer_turn=="Player1")
                         {
                             answer_turn="Player2";
                             document.getElementById("player_answer").innerHTML="answer turn :"+p2 ;
                         }
                         else {
                            answer_turn="Player1";
                            document.getElementById("player_answer").innerHTML="answer turn :"+p1 ;
                         }
                     }