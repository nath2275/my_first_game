let touch = document.querySelectorAll('.button')
let indexs
let startGame = document.querySelector('.startGame')
let scoreNumber = document.querySelector('.scoreNumber')

/* bug ตัว 0 ซ้ำกัน */
function button_random() {
    indexs = []
    for(let i = 1;i < 5; i++){
        function getnumber() {
            const number = Math.floor(Math.random() * 19)

            const exist = indexs.find(item => item === number)
            /*
            const exist = indexs.find((item) => {
                return item === number
            })
            */
            if (exist) return getnumber()

            indexs.push(number)
        }
        getnumber()
    }
    console.log(indexs)
}

function touchs(){
    touch.forEach((toBlue) => {
        toBlue.style.background = '#1a237e'
    })
}

function startGames(){
    button_random()
    touch.forEach((bt,index) =>{
        if(index === indexs[0]){
            bt.style.background = '#ffd54f'
        }
        else if(index === indexs[1]){
            bt.style.background = '#ffd54f'
        }
        else if(index === indexs[2]){
            bt.style.background = '#ffd54f'
        }
        else if(index === indexs[3]){
            bt.style.background = '#ffd54f'
        }
    })
    setTimeout(touchs, 1000);
}
let numberIndex = 0 // ตอบถูก
let numberIndex0 = 0 // ตอบผิด
let score = 0 // คะแนน
touch.forEach((bt1,index1) => {
    bt1.addEventListener('click',(() => {
        
        // ตอบผิด 6 ข้อ
        if((numberIndex + numberIndex0) > 5){
            touch.forEach((toBlue) => {
                toBlue.style.background = '#1a237e'
            })
            numberIndex = 0
            numberIndex0 = 0
            indexs = []
            score = 0
            scoreNumber.innerHTML = score
            setTimeout(startGames,1000)
        } 
        else if(index1 === indexs[0]){
            bt1.style.background = '#ffd54f'
            numberIndex++
        }
        else if(index1 === indexs[1]){
            bt1.style.background = '#ffd54f'
            numberIndex++
        }
        else if(index1 === indexs[2]){
            bt1.style.background = '#ffd54f'
            numberIndex++
        }
        else if(index1 === indexs[3]){
            bt1.style.background = '#ffd54f'
            numberIndex++
        }
        else{
            bt1.style.background = 'black'
            numberIndex0++
        }
        
        // ตอบถูก 4 ข้อ
        if(numberIndex === 4){
            setTimeout(() => {
                numberIndex = 0
                score++
                scoreNumber.innerHTML = score
                touch.forEach((toBlue) => {
                    toBlue.style.background = '#1a237e'
                })
            setTimeout(startGames,1000)
            },300)
        }
    }))
})

startGame.addEventListener('click',startGames)