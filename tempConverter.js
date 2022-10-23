// converting temp from celcius to kelvin by adding 273 to it
const kelvinConverter = () => {
  const measurement = {
    type: `temp`,
    unit: `celsius`,
    value: Number(prompt(`Degree celcius`)),
  };
  //   console.warn(measurement);
  //   console.error(measurement);
  console.log(`Converting temp from Celcius to Kelvin by adding 273 to it
  `);
  console.table(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(kelvinConverter());
