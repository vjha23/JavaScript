let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];
const storyWords=story.split(' ');
//There is an array of words that are unnecessary. Iterate over your array to filter out these words. Save the remaining words in an array called betterWords. There are several ways that you could achieve this
console.log(storyWords.length);
const betterWords=storyWords.filter((words)=>{
  return !unnecessaryWords.includes(words);
});
console.log(betterWords.length);
//There is an array of words called overusedWords. These are words overused in this story. You want to let the user of your program know how many times they have used these overused words. There are two ways to achieve this
let really_count=0;
let very_count=0;
let basically_count=0;

for(word of storyWords){
  if(word==='really'){
    really_count+=1;
  }else if(word==='very'){
    very_count+=1;
  }else if(word==='basically'){
    basically_count+=1;
  }
}
console.log(`really=${really_count} very:${very_count} basically ${basically_count}`)

//Now, count how many sentences are in the paragraph.This may seem tricky, but remember that all of the sentences in this paragraph end with a period (.) or an exclamation mark (!). You could iterate over the array and add 1 to a sentence counter variable for each word that has a period or exclamation mark as its final character.


let sentences=0;
storyWords.forEach(word=>{
if(word[word.length-1]==='.'||word[word.length-1]==='!')
{
  sentences+=1;
}
})

const display=()=>{
console.log(storyWords.length);
console.log(sentences);
console.log(`really=${really_count} very:${very_count} basically ${basically_count}`)
}
display();
console.log(betterWords.join(' '));