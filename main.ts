radio.onReceivedValue(function (name, value) {
    basic.showIcon(IconNames.Target)
    basic.showNumber(value)
    Temperatura = value
    Internet()
})
function Internet () {
    ESP8266_IoT.connectThingSpeak()
    basic.showNumber(Temperatura)
    ESP8266_IoT.setData(
    "HFZG7B0GK88SB1TE",
    Temperatura
    )
    ESP8266_IoT.uploadData()
}
let Temperatura = 0
basic.showIcon(IconNames.No)
ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
ESP8266_IoT.connectWifi("CentreAis", "CentreAis")
radio.setGroup(1)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    if (ESP8266_IoT.wifiState(true)) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
        ESP8266_IoT.connectWifi("CentreAis", "CentreAis")
    }
})
