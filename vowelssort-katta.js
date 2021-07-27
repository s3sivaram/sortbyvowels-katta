// -----------------solved by s3sivaram@gmail.com---------on27-Jul-21----------------------
/*
The goal of this Kata is to write a function that will receive an array of strings as its single argument, then the strings are each processed and sorted (in desending order) based on the length of the single longest sub-string of contiguous vowels ( aeiouAEIOU ) that may be contained within the string. The strings may contain letters, numbers, special characters, uppercase, lowercase, whitespace, and there may be (often will be) multiple sub-strings of contiguous vowels. We are only interested in the single longest sub-string of vowels within each string, in the input array.

str1 = "what a beautiful day today"
str2 = "it's okay, but very breezy"

When the strings are sorted, str1 will be first as its longest sub-string of contiguous vowels "eau" is of length 3, while str2
 has as its longest sub-string of contiguous vowels "ee", which is of length 2.

If two or more strings in the array have maximum sub-strings of the same length, then the strings
should remain in the order in which they were found in the orginal array.

*/
// ---------------------------------test cases----------------

/*
Test.assertSimilar(sortStringsByVowels(["aa","eee","oo","iiii"]),["iiii","eee","aa","oo"]);
Test.assertSimilar(sortStringsByVowels(["a","e","ii","ooo","u"]),["ooo","ii","a","e","u"]);
Test.assertSimilar(sortStringsByVowels( ["ioue","ee","uoiea"]) , ["uoiea", "ioue","ee"]);
Test.assertSimilar(sortStringsByVowels( ["high","day","boot"]) , ["boot","high","day"]);    
Test.assertSimilar(sortStringsByVowels(["none","uuu","Yuuuge!!"]) , ["uuu","Yuuuge!!","none"]);                                     
Test.assertSimilar(sortStringsByVowels(["AIBRH","","YOUNG","GREEEN"]) , ["GREEEN","AIBRH","YOUNG",""]);
Test.assertSimilar(sortStringsByVowels(["jyn","joan","jimmy","joey"]) , ["joan","joey","jimmy","jyn"]);
Test.assertSimilar(sortStringsByVowels(["uijijeoj","lkjlkjww2","iiutrqy"]) , ["iiutrqy","uijijeoj","lkjlkjww2"]);
Test.assertSimilar(sortStringsByVowels(["how about now","a beautiful trio of"]) , ["a beautiful trio of","how about now"]);
Test.assertSimilar(sortStringsByVowels(["every","bataux","is","waaaay","loose"]) , ["waaaay","bataux","loose","every","is"]);
});

});

*/
// ---------------------------------/test cases--------------
/*

function sortStringsByVowels(strings) {
  var results = [];

  // do magic here

  return results;
}
*/
// ----------------------------------------------------
/*  Program logic
1- Accept the array of string. INPUT=>["how", "about", "now"].

2- Initiate function getVowelSequencel to get the sequence of vowels in each string present
    in the array.OUTPUT=> [ [ 'o' ], [ 'a', 'ou' ], [ 'o' ] ].

3- For each element inside the array (OUTPUT of 2),
  Initiate function vowelweight(arraystr) and choose the max value out of the vowel weights.
  [[ 2 ],[ 5, 21 ],[ 2 ]], from these choose the max in each element=>[2,21,2]
  OUTPUT =>[2,21,2]



*/

// ----------------------------------------------------
function sortbasedonweight(stringarray, weightarray) {
  /*
This function will sort the array of string based on its vowel weights.
e.g: 
Strarray=["eee", "ou","ai", ] 
weightarray=[444, 21,53 ];
output = ["eee", "ai", "ou"]

1- copy the weightarray into a temp variable say tempweightarray.[444,21,53]
2- sort the tempweightarray in descending order.[444,53,21]
3- place the sorted rank of the each element of tempweightarray in a rank array.rankarray[1,3,2].
4- pick strarray[rankarray[i]] and store in the results array.


*/
  // copy the weight array in tempweightarray & sort it in descending order
  let rankarray = [];
  let results = [];
  let tempweightarray = [...weightarray];
  let tempweightarraysorted = tempweightarray.sort((a, b) => b - a);

  for (ele in tempweightarraysorted) {
    let position = weightarray.findIndex((e) => {
      // console.log("e=", e);
      return e == tempweightarraysorted[ele];
    });
    rankarray.push(position);
  }

  for (e in rankarray) {
    results.push(stringarray[rankarray[e]]);
  }
  return results;
}

// --------------------------------------------------------------------------------

function sortonAppliedWeights(sourcearray, weightsarray) {
  /*
This function will sort an array based on the elements weight provided in the weightsarray.
Input: sourcearray-[], weightsarray-[].
output:sortedarray[].

program logic:
0- weight element for every element in the sourcearray is a MUST.
1-create a new array (objarray)of objects clubbing sourcearray element and weightsarray element.
  obj={name:sourcearray[e],
       value:weightsarray[e]}.

2-sort objarray based on obj.value - descending.
3- create Results array -Results.push(obj.name)from the obj array.

*/
  // ---------------------------
  function createobjarray() {
    let res = [];
    for (let i = 0; i <= sourcearray.length - 1; i++) {
      let obj = {};
      obj.name = sourcearray[i];
      obj.value = weightsarray[i];
      res.push(obj);
    }
    console.log(res);
    return res;
  }
  // ---------------------------
  function sortobjects(objarray) {
    /*
    Input: array of objects.
    Output:sorted array.
  This function sorts the given array in descending order based on the property value
  */

    let sortedObjarray = objarray.sort((a, b) => {
      return b.value - a.value;
    });
    sortedObjarray.forEach((e) => console.log("for each=", e));

    return sortedObjarray;
  }

  // ----------------------------------------------------
  function getarrayfromobjectarray(sortedobjarray) {
    /* 
    This function creates an plain array of simple elements from an array of objects after sorting
    them in descending order of value.

    Input: array of objects-[{name:"B",value:2},{name:"A",value:1}]
    Output:[A,B]

    */
    let plainarray = [];
    sortedobjarray.forEach((e) => {
      return plainarray.push(e.name);
    });
    return plainarray;
  }
  // ----------------------------------------------------

  let res = createobjarray();
  // console.log("obj array=", res);
  let sortedres = sortobjects(res);
  // console.log("sorted obj array=", sortedres);

  let plainarrayres = getarrayfromobjectarray(sortedres);
  console.log("sorted array=", plainarrayres);
  return plainarrayres;
  // ------------End of function sortonAppliedWeights(sourcearray, weightsarray)-----------------
}
//---------------------------------------------------------------------------------

function vowelweights(arraystr) {
  /* --------------------------------------------------------------------------------
   this function will return vowel weights appended to each character in the string
   e.g: "aa"=> 55, "aei"=> 543
   Input: array of string.['aa','aeiiii','o']
   Output: array of number.[55,543333,2]

  ----------------------------------------------------------------------------------*/
  vowelweight = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1,
  };

  let vowelweightarray = [];

  arraystr.forEach((element) => {
    let elearray = element.split("");
    let weightstr = elearray.reduce((a, e) => {
      return a + vowelweight[e];
    }, " ");
    vowelweightarray.push(Number(weightstr));
  });
  return vowelweightarray;
}
// --------------------------------------------------------------------

function consecutiveCharLength(str) {
  /*
      
      Inputs needed: A string
      output: An array.consisting of chars that are appearing sequentially
      e.g:"footfeet" ===> [ 'oo', 'ee' ]
  
     */

  let startpointer = 0;
  let endpointer = str.length;
  let arrowpointer = 1;
  let seqchars = [];
  str = str.toLowerCase();

  while (startpointer < endpointer) {
    if (
      (isVowel(str.substr(startpointer, 1)) == true) &
      (isVowel(str.substr(arrowpointer, 1)) == true)
    ) {
      arrowpointer = arrowpointer + 1;

      while (
        (isVowel(str.substr(startpointer, 1)) == true) &
        (isVowel(str.substr(arrowpointer, 1)) == true)
      ) {
        arrowpointer = arrowpointer + 1;
      }
      seqchars.push(str.substr(startpointer, arrowpointer - startpointer));

      startpointer = arrowpointer;
      arrowpointer = startpointer + 1;
    } else {
      if (isVowel(str.substr(startpointer, 1)) == true) {
        seqchars.push(str.substr(startpointer, 1));
      }

      startpointer = startpointer + 1;
      arrowpointer = arrowpointer + 1;
    }
  }
  // console.log("seq chars");
  // console.log(seqchars);
  return seqchars;
}

// ----------------------------------------------------
function isVowel(char) {
  let vowels = ["a", "e", "i", "o", "u"];
  for (e in vowels) {
    if (vowels[e] == char) {
      return true;
    }
  }
  return false;
}
// ----------------------------------------------------

// ----------------------------------
function getVowelSequence(str) {
  let res = [];

  str.map((e) => {
    let vowelseqarray = consecutiveCharLength(e);
    res.push(vowelseqarray);
  });
  return res;
  // console.log("vowels array");
  // console.log(res);
}

// ----------------Main module----------------------------

function sortStringsByVowels(strings) {
  var results = [];

  console.log(strings);

  let vowelsequencearray = getVowelSequence(strings);

  console.log("length=", vowelsequencearray.length);
  console.log("vowelsequence");
  console.log(vowelsequencearray);

  // results = sortbasedonweight(strings, weightsarray);

  let maxarray = [];
  function getMaxnumber(vowelsequence) {
    vowelsequence.forEach((e) => {
      let max = Math.max(...vowelweights(e));
      maxarray.push(max);
    });
    return maxarray;
  }
  let weightsarray = getMaxnumber(vowelsequencearray);
  console.log("weights array");
  console.log(weightsarray);
  // results = sortbasedonweight(strings, weightsarray); old sort method
  results = sortonAppliedWeights(strings, weightsarray);
  console.log(results);
  return results;
}

// let strings = ["high","day","boot"];
let strings = ["how about now","a beautiful trio of"];

let grandresult = sortStringsByVowels(strings);
console.log("FINAL======");
console.log(grandresult);
