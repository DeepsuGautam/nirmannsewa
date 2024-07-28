const sampleNames = [
  "Alpha",
  "Bravo",
  "Charlie",
  "Delta",
  "Echo",
  "Foxtrot",
  "Golf",
  "Hotel",
  "India",
  "Juliet",
  "Kilo",
  "Lima",
  "Mike",
  "November",
  "Oscar",
  "Papa",
  "Quebec",
  "Romeo",
  "Sierra",
  "Tango",
  "Uniform",
  "Victor",
  "Whiskey",
  "X-ray",
  "Yankee",
  "Zulu",
];

// Function to generate a unique name
export const UniqueGenerator = async(ext) => {
  // Create a base name by combining two random names from the list
  const name1 = sampleNames[Math.floor(Math.random() * sampleNames?.length)];
  const name2 = sampleNames[Math.floor(Math.random() * sampleNames?.length)];
  const baseName = `${name1}-${name2}`;

  // Use the current timestamp and a random number to ensure uniqueness
  const timestamp = Date.now().toString();
  const randomNumber = Math.floor(Math.random() * 10000).toString();

  // Combine the base name with the timestamp and random number
  const uniqueName = `${baseName}-${timestamp}-${randomNumber}.${ext}`;

  return uniqueName;
};
