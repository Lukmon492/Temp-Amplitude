// Temperature Amplitude
// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// We working for a company building a smart home thermometer.
// Our most recent task is this: Given an array of temperature of one day,
// calculate the temperature amplitude. keep in mind that sometimes that
// sometimes there might be sensor error.
const temperature = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// const temperature1 = []
// temp amplitude is the difference between highest and lowest

const tempAmplitude = (temp) => {
  let max = temperature[0];
  let min = temperature[0];
  for (let i = 0; i < temp.length; i++) {
    const curTemp = temp[i];
    if (typeof curTemp !== "number") continue;
    if (max < curTemp) max = curTemp;
    if (min > curTemp) min = curTemp;
  }
  console.log(`In an Array of Temperture ${temperature}`);
  console.log(`Formula for Temp Amplitude = Highest temp - Lowest Temp`);
  console.log(`maxTemp is = ${max}, while minTemp is ${min}`);
  return max - min;
};
const amplitude = tempAmplitude(temperature);
console.log(amplitude);

// Problem 2
// Function should now receive two arrays of temperature
// Merge the Array to solve this
const tempAmplitudeBug = (t1, t2) => {
  let max = temperature[0];
  let min = temperature[0];

  console.log(`*** Here using Array.Concat to merge two array*****`);
  const temp = t1.concat(t2);

  console.log(temp);
  for (let i = 0; i < temp.length; i++) {
    const curTemp = temp[i];
    if (typeof curTemp !== "number") continue;
    if (max < curTemp) max = curTemp;
    if (min > curTemp) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = tempAmplitudeBug([2, 6, 7], [7, `we`, 22]);
console.log(amplitudeBug);
