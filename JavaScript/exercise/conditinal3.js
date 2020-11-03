let temp = 70
let color = null

switch (true){
    case (temp < 0):
        color = '#00008B'
        break
    case (temp < 20):
        color = '#0000FF'
        break
        case (temp < 40):
        color = '#ADD8E6'
        break
        case (temp< 75):
        color = '#ccffff'
        break;
    case (temp< 80):
        color = '#ffccff'
        break;
    case (temp< 90):
        color = '#ff6699'
        break;
    default: 
    color = '#8B0000'
}

console.log (color)