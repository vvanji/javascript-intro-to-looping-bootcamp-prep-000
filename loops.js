function forLoop(array){
for (var i = 0; i < 25; i++) {
  if (i === 1){
    array.push( `I am a ${i} strange loop.`);

  } else if (i > 1) {
  array.push( `I am a ${i} strange loops.`);
  }
}console.log(array);
}

forLoop();