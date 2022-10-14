// Create a function to complement each other in the DNA strings
// Will need to Assign DNAStringMap to be complemented with "A" and "T" along with "C" and "G"
// Return dna using regex and replace method to change the object of DNAStringMap and match

function DNAStrand(dna) {
    let DNAStringMap = {
        "A": "T",
        "T": "A",
        "C": "G",
        "G": "C"
    }
    return dna.replace(/A|T|C|G/g, function(matched) {
        return DNAStringMap[matched];
    })
}