const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below


const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
const smallNumbers=randomNumbers.filter(n=>{
    return n<250;
  })
  console.log(smallNumbers);

// Call .filter() on favoriteWords below
const longFavoriteWords=favoriteWords.filter(word=>{
  return word.length>7;
})
console.log(longFavoriteWords);