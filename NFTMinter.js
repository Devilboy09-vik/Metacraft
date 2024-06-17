/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let NFTContainer = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name , age , dob, place, firstHit,viralHit ,totalAward) {
    let NFT = {
        name: name,
        age: age,
        dob: dob,
        place: place,
        firstHit :firstHit ,
        viralHit: viralHit ,
        totalAward: totalAward,
    }
    NFTContainer.push(NFT);

}
// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
     for (let i = 0; i < NFTContainer.length; i++) {
        console.log("\n\n_____________________ Singer Details   _________________________\n\n" );
        console.log("Name: " + NFTContainer[i].name);
        console.log("Age: " + NFTContainer[i].age);
        console.log("Dob: " + NFTContainer[i].dob);
        console.log("Place: " + NFTContainer[i].place);
        console.log("FirstHit : " + NFTContainer[i].firstHit);
        console.log("ViralHit : " + NFTContainer[i].viralHit);
        console.log("TotalAward: " + NFTContainer[i].totalAward);
        console.log("\n\n_____________________	🎵🎵🎵🎵🎵_________________________\n" );
    }
}
// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total NFTs  Minted do Far " + NFTContainer.length);
}

// call your functions below this line
mintNFT("Arjit Singh",37, "25 April 1987", "India", "Phir Mohabbat", "Tum hi ho", 107);
mintNFT("Justin Bieber",30, "1 March 1994", "USA", "Baby", "One Time",379);
mintNFT("Ellie Goulding",37,"30 December 1986","United Kindom","Starrey Eyed", "First Time",35);
mintNFT("Jubin Nautiyal",35, "14 June 1989", "India", "EK Mulaqat","EK Mulaqat",3);
listNFTs();
getTotalSupply();
