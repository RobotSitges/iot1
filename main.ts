radio.onReceivedValue(function (name, value) {
    basic.showIcon(IconNames.Square)
    basic.showNumber(value)
    Temperatura = value
    basic.showIcon(IconNames.SmallSquare)
})
let Temperatura = 0
basic.showIcon(IconNames.No)
ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
ESP8266_IoT.connectWifi("CentreAis", "CentreAis")
radio.setGroup(1)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    basic.showIcon(IconNames.Diamond)
    ESP8266_IoT.connectThingSpeak()
    basic.showNumber(Temperatura)
    ESP8266_IoT.setData(
    "HFZG7B0GK88SB1TE",
    Temperatura
    )
    ESP8266_IoT.uploadData()
    basic.showIcon(IconNames.SmallDiamond)
    basic.pause(300000)
})
