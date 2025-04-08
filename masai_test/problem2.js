A= [
    { name: "Alice", grade: 10, scores: [78, 82, 91] },
    { name: "Bob", grade: 10, scores: [45, 39, 42] },
    { name: "Charlie", grade: 10, scores: [32, 28, 30] },
    { name: "David", grade: 10, scores: [88, 90, 94] },
    { name: "Eva", grade: 10, scores: [60, 65, 62] }
  ]

  //function for average 
  function getAverage(scores){
    let sum = 0 
    let count = 0 
    for(let i = 0;  i <scores.length; i++){
        sum += scores[i]
        count ++
    }
    return sum /count 
  }
// console.log(getAverage(scores))


//function for class average 
function classaverage (A){
    let total = 0 
    let count = 0 
    for(let i = 0 ; i < A.length; i ++){
    // console.log(A[i]["scores"])
    let score = A[i].scores 
    for (let j = 0 ; j<score.length; j ++){
        total += score[j]
        count ++
    } 
}
    return total/count
}
console.log(classaverage(A))


//function for top performer 
function gettopper(){
    let topName = ""
    let topavg = 0
    for (let i = 0 ; i < A.length; i ++){
        let avg = getAverage(A[i].scores)
        if (avg>topavg){
            topavg = avg
            topName = A[i].name
        }
    }
    return {name : topName ,average: topavg}
}




