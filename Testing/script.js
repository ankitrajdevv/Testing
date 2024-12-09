const db = [
    'ankit.com',
    'anil.com',
    'ankush.com',
    'ankith.com'
]

const search=(input,db)=>{
    const match = db.filter(website =>{
        return website.includes(input);
    })
    return match;
}

// console.log(search('an',db));

module.exports = search;