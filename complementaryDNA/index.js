// function DNAStrand(dna){
//   var chars = {'A':'T', 'T':'A', 'C':'G', 'G':'C'};
//   var newDNA = dna.replace(/[ATCG]/g, function (rep) {
//     return chars[rep];
//   });
//   return newDNA;
// }

function DNAStrand(dna){
  var chars = {'A':'T', 'T':'A', 'C':'G', 'G':'C'};
  var newDNA = dna.replace(/[ATCG]/g, repl => chars[repl]);
  return newDNA;
}

console.log(DNAStrand("AAAA"),"TTTT","String AAAA is");
console.log(DNAStrand("ATTGC"),"TAACG","String ATTGC is");
console.log(DNAStrand("GTAT"),"CATA","String GTAT is");