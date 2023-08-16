function stairway(stair) { 
    if(stair < 4) { 
        return stair
    }
    else { 
        return stairway(stair-1) + stairway(stair-2)
    }
}

console.log(stairway(2))
console.log(stairway(3))
console.log(stairway(4))
console.log(stairway(5))
console.log(stairway(6))
console.log(stairway(7))

/*
    1 => 1
    2 => 2
    3 => 3
    4 => 5
    5 => 8
    6 => 13
    7 => 21
    8 => 34
    9 => 55
    10 => 89
    11 => 144


*/