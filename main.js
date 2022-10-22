function switcher(x){
    let alphabet = 'zyxwvutsrqponmlkjihgfedcba!? '
    let result = ''
    for (let i of x) {
      result += alphabet.charAt(i-1)
    }
    return result
  }


console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8'])) // => codewars
console.log(switcher(['25','7','8','4','14','23','8','25','23','29','16','16','4'])) // => btswmdsbd kkw
console.log(switcher(['8','23','8','29','16'])) // => sds k  
