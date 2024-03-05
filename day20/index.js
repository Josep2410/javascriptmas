// traverse through the dangerArray and eliminate all threats that aren't Santa. Multiple was to do this.

const dangerArray = [
  ["🎅", "👺"],
  [
      ["🎅", "🦁"],
      ["👹", "🎅"]
  ],
  [
      [
          ["🎅", "🐻"],
          ["🧌", "🎅"]
      ],
      [
          ["🐯", "🎅"],
          ["🎅", "😈"]
      ]
  ]
];

function saveSanta(arr) {
  // solution #1
 /*  return (arr.flat(3).filter(str => str === '🎅'))  */

 //solution #2
 return arr.map(obj => typeof(obj) === 'object' ? saveSanta(obj) : obj === "🎅" ? "🎅" : "").filter(str => str)

}

// Check the returned results from saveSanta()
console.log(saveSanta(dangerArray) )