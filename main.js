let red = '#ff0000';
let blue = '#0000ff';
let green = '#008000';
let purple = '#800080';
let pink = '#ffc0cb';
let orange = '#ffa500';

// create a popup or some palette for the user to choose color from
// add evente listener for user click that would place the color in the background of our function area
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ pink });
  console.log(`Default bgc set to ${pink}`);
});
