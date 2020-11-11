export function Shuffle(arr){
    let currentIndex = arr.length
    while (0 !== currentIndex){
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      let tempVal = arr[currentIndex];
      arr[currentIndex] = arr[randomIndex];
      arr[randomIndex] = tempVal;
    }
    return arr
  }
  export default Shuffle