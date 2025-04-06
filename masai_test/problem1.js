a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
for(let i =0; i < a.length ;i ++){
    for (let j =i+1; j< a.length; j++){
        [a[i][j],a[j][i]]=[a[j][i],a[i][j]];
    }
}
for (let i = 0 ; i <a.length; i ++){
    a[i].reverse()
}
console.log(a)

