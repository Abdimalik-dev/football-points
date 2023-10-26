function  calpoints (Wins , draw , losses) {
    let points =  (Wins * 3) + (draw * 1) + (losses * 0) ;
    console.log(`your Total points is ${points} `)
}

calpoints(8,3,2)