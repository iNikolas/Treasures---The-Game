const width = 600, height = 600
let clicks = 0, clicksLimit = 50, target = {}, coordinates

function getRandomNumber(size) {return Math.floor(Math.random()*size)}
function getDistance(event, target) {
    let diffX = event.offsetX - target.x
    let diffY = event.offsetY - target.y
    return Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2))}
function distanceToTheTargetHint(distance) {
    $('#clicksAmountText').text(`Сделано кликов: ${clicks} из доступных ${clicksLimit}`)
    if (distance <10) {
        return 'Обожжешься'
    } else if (distance < 20) {
        return 'Горячее некуда'
    } else if (distance < 40) {
        return 'Горячо'
    } else if (distance < 80) {
        return 'Тепло, однако'
    } else if (distance < 160) {
        return 'Холодно, блин'
    } else if (distance < 320) {
        return 'Охренеть как холодно'
    } else {
        return 'Замерзнешь как собака!'}}
function generateTarget() {
        target =  {
        x: getRandomNumber(width),
        y: getRandomNumber(height)}}
function checkGameWinCondition(distance) {
    if (distance < 8) {
        generateTarget()
        alert(`Поздравляем, Вы нашли клад! Сделано кликов: ${clicks}. Начинаем игру заново =)`)
        clicks = 0}}
function checkGameLoseCondition() {
    if (clicks >= clicksLimit) {
        generateTarget()
        alert(`К сожалению, вы проиграли! Сделано максимальное количествокликов: ${clicksLimit}. На расстраивайтесь, начинаем игру заново =)`)
        clicks = 0}}

generateTarget()
$('#map').click(function (event) {
    clicks++
    let distance = getDistance(event, target)
    $('#distance').text(distanceToTheTargetHint(distance))
    checkGameWinCondition(distance)
    checkGameLoseCondition()
})