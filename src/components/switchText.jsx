import { useEffect, useRef, useState } from 'react';

const SwitchText = () => {

  const [text, setText] = useState('Press Play to Start!');
  const [play, setPlay] = useState(false);
  //const [playPause, setPlayPause] = useState(true);
  const playPause = useRef(true);
  const para = useRef(['For','someone','who','was','never','meant','for','this','world','I','must','confess','I\'m','suddenly','having','a','hard','time','leaving','it']);
  const position = useRef(0);
  const firstRender = useRef(true);
  const intervalNum = useRef(0);


  useEffect(()=>{
    console.log("HOW MANY TIMES ARE WE IN HERE")
     if(!firstRender.current){
      console.log(play)
      if(play){//Start looping through each word
        intervalNum.current = setInterval(()=>{
          console.log(position.current);
          
          
          console.log(para.current)
          setText(para.current[position.current++]);
          if(position.current === para.current.length){//Reach end of paragraph, reset to beginning
            position.current = 0;
            playPause.current = !playPause.current;
            clearInterval(intervalNum.current);
            //setText(' ');
            setPlay(!play);

            console.log('Play in if statement '+play);
          }
      }, 200);
      }else{//Paragraph was paused
        clearInterval(intervalNum.current)
      }
    }else{
      firstRender.current = false;
    }
  },[play]);

  function updateParagraph(event){
    console.log(event.target.value.split(' '));
    position.current = 0;
    clearInterval(intervalNum.current);
    para.current = event.target.value.split(' ');
    setText(para.current[position.current])
    if(play){//only change play if its currently playing
      setPlay(!play)
    }
    
  }

    return(
        <div>
            <div className='displayDiv'>
              <textarea onChange={updateParagraph} className='textBox' id="textInput" minLength="1"/>
            </div>
            <div className='displayDiv'>
              <p className='displayText'>{text}</p>
              <button class="button-6" onClick={()=>{setPlay(!play); playPause.current=!playPause.current}}>{playPause.current ? 'Play' : 'Pause'}</button>
            </div>
        </div>
    );
};

export default SwitchText;