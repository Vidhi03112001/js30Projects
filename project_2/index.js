function playSound(e){
    //consoloe.log(e.keyCode);
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key=document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;//stop the function from running all together
    audio.currentTime=0;//rewind to start
    //console.log(audio);
    audio.play();
    //console.log(key);
    key.classList.add('playing');
  
  }
  
  function removeTransition(e){
    if(e.propertyName!=='transform') return;//skip if its not atransform
    //console.log(e.propertyName);
    console.log(this);//equal to the key
    this.classList.remove('playing')
  }
  
  const keys=document.querySelectorAll('.key');
  keys.forEach(key=>key.addEventListener('transitioned',removeTransition));
  window.addEventListener('keydown',playSound)
  