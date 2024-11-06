// Create an array of old prices for 4 items and another array with the new prices.
// Write a program to calculate and print the percentage increase for each item.

oldPrice=[135,265,245,145];
newPrice=[200,300,300,200];
for(i=0;i<oldPrice.length;i++){
    sub=newPrice[i]-oldPrice[i];
    div=sub/oldPrice[i];
    avr=div*100;
    console.log(avr)

}