function TempsEspera () {
    basic.clearScreen()
    X = 0
    Y = 0
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 5; index++) {
            led.plot(X, Y)
            basic.pause(2500)
            led.unplot(X, Y)
            X += 1
        }
        X = 0
        Y += 1
    }
}
radio.onReceivedValue(function (name, value) {
    T1 = 1
    Temperatura = value
})
function Internet () {
    ESP8266_IoT.connectThingSpeak()
    ESP8266_IoT.setData(
    "HFZG7B0GK88SB1TE",
    Temperatura
    )
    ESP8266_IoT.uploadData()
    T1 = 0
    TempsEspera()
}
let Temperatura = 0
let Y = 0
let X = 0
let T1 = 0
basic.showIcon(IconNames.No)
ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
ESP8266_IoT.connectWifi("CentreAis", "CentreAis")
T1 = 0
radio.setGroup(1)
basic.forever(function () {
    if (ESP8266_IoT.wifiState(true)) {
        if (T1 == 1) {
            basic.showIcon(IconNames.Yes)
            basic.pause(1000)
            Internet()
        } else {
            basic.showIcon(IconNames.Diamond)
        }
    } else {
        basic.showIcon(IconNames.No)
        ESP8266_IoT.connectWifi("CentreAis", "CentreAis")
    }
})
