                    
            var canvas = document.getElementById("canvas");
            var ctx = canvas.getContext("2d");
            //var BatImage = new Image();
            //BatImage.src = "Photos/baseball_PNG18991.png";

            ctx.font = "20px Arial";
            ctx.fillText("Press speak and say a word listed below to see a photo of the object.", 10, 20);
            ctx.fillText("Ball, Gloves, Helmet, Racket, Bat", 10, 50);
            ctx.fillText("Say 'Help' for help. Say 'About', to hear about the program.",10,590);
            //ctx.drawImage(BatImage, 100, 100, 400, 400);

            var click=1;
           
            var Objects = [ 'Ball','Gloves','Helmet','Racket','Bat'];
            var grammar = '#JSGF V1.0; grammar Objects; public <Objects> = ' + Objects.join(' | ') + ' ;'
            
            var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
            var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
            var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent
            
            var recognition = new SpeechRecognition();
            var speechRecognitionList = new SpeechGrammarList();
            speechRecognitionList.addFromString(grammar, 1);
            recognition.grammars = speechRecognitionList;
            recognition.continuous = false;
            recognition.lang = 'en-US';
            recognition.interimResults = false;
            recognition.maxAlternatives = 1;
            var results="";
            var myImage = new Image();

            function speak(text, callback) {
                var u = new SpeechSynthesisUtterance();
                u.text = text;
                u.lang = 'en-US';
             
                u.onend = function () {
                    if (callback) {
                        callback();
                    }
                };
             
                u.onerror = function (e) {
                    if (callback) {
                        callback(e);
                    }
                };
             
                speechSynthesis.speak(u);
            }
            function drawObject(x){
                if(x.localeCompare("Bat.")==0){
                    
                    myImage.src = "Photos/baseball_PNG18991.png";
                    ctx.drawImage(myImage, 100, 100, 400, 400);

                }else{
                    if(x.localeCompare("Ball.")==0){
                        myImage.src = "Photos/ball.png";
                        ctx.drawImage(myImage, 100, 100, 400, 400);
    
                    }else{
                        if(x.localeCompare("Gloves.")==0){
                            myImage.src = "Photos/Gloves.png";
                            ctx.drawImage(myImage, 100, 100, 400, 400);
        
                        }else{
                            if(x.localeCompare("Racket.")==0){
                                myImage.src = "Photos/Racket.png";
                                ctx.drawImage(myImage, 100, 100, 400, 400);
            
                            }else{
                                if(x.localeCompare("Helmet.")==0){
                                    myImage.src = "Photos/Helmet.png";
                                    ctx.drawImage(myImage, 100, 100, 400, 400);
                
                                }else{
                                    if(x.localeCompare("Help.")==0){
                                        speak("Say a name of the object on the screen. Say 'About', to hear about the program");
                    
                                    }else{
                                        if(x.localeCompare("About.")==0){
                                            speak("Katya Civil Copyright@ 2022");
                        
                                        }else{
                                            ctx.fillText("unlisted phrase picked up, stop and try again.",10,250);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }   
            }
            
            function Speak(){
                if(click==1){
                    document.getElementById("speak-button").value="Stop";
                    ctx.clearRect(10,100,800,400);
                    console.log("start");
                    recognition.start();
                    recognition.onresult=function(event){
                        results=event.results[0][0].transcript;
                    }
                    recognition.onspeechend = function() {
                        console.log('Speech recognition has stopped.');
                        console.log("print result: "+results);
                        drawObject(results);
                    }

                    click=2;
                }else{
                    document.getElementById("speak-button").value="Speak";
                    click=1;
                    recognition.stop();
                    console.log("stop");
                
                }
            }

