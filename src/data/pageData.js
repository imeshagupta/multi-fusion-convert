import tempIcon from "../images/tempicon.png";
import siIcon from "../images/SIicon.png";
import lenIcon from "../images/lenicon.jpeg";
import energyIcon from "../images/energyicon.jpeg";
import timeIcon from "../images/timeicon.png";
import storageIcon from "../images/storageicon.png";

const pageData = [
  {
    id: 1,
    image: tempIcon,
    heading: "Temperature Convertor",
    body: "A Temperature Calculator converts between Celsius, Fahrenheit, and Kelvin, allowing quick and accurate temperature unit conversions.",
    path: "temperature",
  },
  {
    id: 2,
    image: siIcon,
    heading: "Simple Interest Convertor",
    body: "A Simple Interest Calculator computes interest based on principal, rate, and time, helping users determine total interest and final amount easily.",
    path: "simple-interest",
  },
  {
    id: 3,
    image: lenIcon,
    heading: "Length Convertor",
    body: "A Length Calculator converts units like meters, feet, inches, and kilometers, helping users quickly and accurately measure distances.",
    path: "length",
  },
  {
    id: 4,
    image: energyIcon,
    heading: "Energy Convertor",
    body: "An Energy Calculator computes energy consumption, conversion, and efficiency, helping users analyze power usage in various units like joules, watts, and kilowatt-hours.",
    path: "energy",
  },
  {
    id: 5,
    image: timeIcon,
    heading: "Time Convertor",
    body: "A Time Calculator converts and calculates time units like seconds, minutes, hours, and days, helping users manage time efficiently.",
    path: "time",
  },
  {
    id: 6,
    image: storageIcon,
    heading: "Data Storage Convertor",
    body: "A Data Storage Calculator converts and calculates storage units like KB, MB, GB, and TB, helping users manage digital data efficiently.",
    path: "storage",
  },
];

export default pageData;
