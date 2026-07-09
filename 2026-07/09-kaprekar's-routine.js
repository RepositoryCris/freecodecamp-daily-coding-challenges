function kaprekar(num) {
    let steps = 0;
    let current = String(num).padStart(4, '0');
    
    while (current !== '6174') {
        // Sort descending
        let desc = current.split('').sort((a, b) => b - a).join('');
        // Sort ascending  
        let asc = current.split('').sort((a, b) => a - b).join('');
        
        current = String(Number(desc) - Number(asc)).padStart(4, '0');
        steps++;
        
        if (current === '0000') break;
    }
    
    return steps;
}

// Test it
console.log(kaprekar(1234));  // 3
console.log(kaprekar(2025));  // 6
console.log(kaprekar(7173));  // 4
console.log(kaprekar(3164));  // 7
console.log(kaprekar(8082));  // 2