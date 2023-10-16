let from = false
let to = false
let fromUnit = "Meter"
let toUnit = "Meter"
let formNumber = 0

function changeUnit(number){
    const nav = document.querySelector(".nav")
    const buttons = nav.getElementsByClassName("btn")
    
    for(let i = 0; i < buttons.length; i++){
        if(i === number){
            buttons[i].classList.add("active")
        }
        else{
            buttons[i].classList.remove("active")
        }
    }

    const calculator = document.getElementById("calculator")
    const units = calculator.getElementsByClassName("units")

    for(let i = 0; i < units.length; i++){
        if(i === number){
            units[i].classList.add("active-unit")
        }
        else{
            units[i].classList.remove("active-unit")
        }
    }

    if(number === 0){
        fromUnit = "Meter"
        toUnit = "Meter"
        formNumber = number
    }else if(number === 1){
        fromUnit = "Celsius"
        toUnit = "Celsius"
        formNumber = number
    }else if(number === 2){
        fromUnit = "Square Meter"
        toUnit = "Square Meter"
        formNumber = number
    }else if(number === 3){
        fromUnit = "Cubic Meter"
        toUnit = "Cubic Meter"
        formNumber = number
    }else if(number === 4){
        fromUnit = "Kilogram"
        toUnit = "Kilogram"
        formNumber = number
    }else{
        fromUnit = "Second"
        toUnit = "Second"
        formNumber = number
    }
}
function chooseUnitFrom(type, unit){
    const choosenUnitEl = document.getElementById(type + "-from")
    choosenUnitEl.value = unit
    fromUnit = unit
    convertUnits(type, formNumber)
}
function chooseUnitTo(type, unit){
    const choosenUnitEl = document.getElementById(type + "-to")
    choosenUnitEl.value = unit
    toUnit = unit
    convertUnits(type, formNumber)
}

function convertUnits(type, number){
    const value = document.getElementById("from" + number).value
    let convertedValue
    if(type === "length"){
        if(fromUnit === "Meter"){
            if(toUnit === "Meter"){
                convertedValue = value
            }else if(toUnit === "Kilometer"){
                convertedValue = value * 0.001
            }else if(toUnit === "Centimeter"){
                convertedValue = value * 100
            }else if(toUnit === "Milimeter"){
                convertedValue = value * 1000
            }else if(toUnit === "Micrometer"){
                convertedValue = value * 1000000
            }else if(toUnit === "Nanometer"){
                convertedValue = value * 1000000000
            }else if(toUnit === "Mile"){
                convertedValue = value * 0.0006213689
            }else if(toUnit === "Yard"){
                convertedValue = value * 1.0936132983
            }else if(toUnit === "Foot"){
                convertedValue = value * 3.280839895
            }else if(toUnit === "Inch"){
                convertedValue = value * 39.37007874
            }else{
                convertedValue = value * 1.057008707E-16
            }

        }else if(fromUnit === "Kilometer"){
            if(toUnit === "Meter"){
                convertedValue = value * 1000
            }else if(toUnit === "Kilometer"){
                convertedValue = value
            }else if(toUnit === "Centimeter"){
                convertedValue = value * 100000
            }else if(toUnit === "Milimeter"){
                convertedValue = value * 1000000
            }else if(toUnit === "Micrometer"){
                convertedValue = value * 1000000000
            }else if(toUnit === "Nanometer"){
                convertedValue = value * 1000000000000
            }else if(toUnit === "Mile"){
                convertedValue = value * 0.6213688756
            }else if(toUnit === "Yard"){
                convertedValue = value * 1093.6132983
            }else if(toUnit === "Foot"){
                convertedValue = value * 3280.839895
            }else if(toUnit === "Inch"){
                convertedValue = value * 39370.07874
            }else{
                convertedValue = value * 1.057008707E-13
            }
        }else if(fromUnit === "Centimeter"){
            if(toUnit === "Meter"){
                convertedValue = value * 0.01
            }else if(toUnit === "Kilometer"){
                convertedValue = value * 0.00001
            }else if(toUnit === "Centimeter"){
                convertedValue = value
            }else if(toUnit === "Milimeter"){
                convertedValue = value * 10
            }else if(toUnit === "Micrometer"){
                convertedValue = value * 10000
            }else if(toUnit === "Nanometer"){
                convertedValue = value * 10000000
            }else if(toUnit === "Mile"){
                convertedValue = value * 0.0000062137
            }else if(toUnit === "Yard"){
                convertedValue = value * 0.010936133
            }else if(toUnit === "Foot"){
                convertedValue = value * 0.032808399
            }else if(toUnit === "Inch"){
                convertedValue = value * 0.3937007874
            }else{
                convertedValue = value * 1.057008707E-18
            }
        }else if(fromUnit === "Milimeter"){
            if(toUnit === "Meter"){
                convertedValue = value * 0.001
            }else if(toUnit === "Kilometer"){
                convertedValue = value * 0.000001
            }else if(toUnit === "Centimeter"){
                convertedValue = value * 0.1
            }else if(toUnit === "Milimeter"){
                convertedValue = value
            }else if(toUnit === "Micrometer"){
                convertedValue = value * 1000
            }else if(toUnit === "Nanometer"){
                convertedValue = value * 1000000
            }else if(toUnit === "Mile"){
                convertedValue = value * 6.213688756E-7
            }else if(toUnit === "Yard"){
                convertedValue = value * 0.0010936133
            }else if(toUnit === "Foot"){
                convertedValue = value * 0.0032808399
            }else if(toUnit === "Inch"){
                convertedValue = value * 0.0393700787
            }else{
                convertedValue = value * 1.057008707E-19
            }

        }else if(fromUnit === "Micrometer"){
            if(toUnit === "Meter"){
                convertedValue = value * 0.000001
            }else if(toUnit === "Kilometer"){
                convertedValue = value * 9.999999999E-10
            }else if(toUnit === "Centimeter"){
                convertedValue = value * 0.0001
            }else if(toUnit === "Milimeter"){
                convertedValue = value * 0.001
            }else if(toUnit === "Micrometer"){
                convertedValue = value
            }else if(toUnit === "Nanometer"){
                convertedValue = value * 1000
            }else if(toUnit === "Mile"){
                convertedValue = value * 6.213688756E-10
            }else if(toUnit === "Yard"){
                convertedValue = value * 0.0000010936
            }else if(toUnit === "Foot"){
                convertedValue = value * 0.0000032808
            }else if(toUnit === "Inch"){
                convertedValue = value * 0.0000393701
            }else{
                convertedValue = value * 1.057008707E-22
            }
        }else if(fromUnit === "Nanometer"){
            if(toUnit === "Meter"){
                convertedValue = value * 1.E-9
            }else if(toUnit === "Kilometer"){
                convertedValue = value * 1.E-12
            }else if(toUnit === "Centimeter"){
                convertedValue = value * 1.E-7
            }else if(toUnit === "Milimeter"){
                convertedValue = value * 0.000001
            }else if(toUnit === "Micrometer"){
                convertedValue = value * 0.001
            }else if(toUnit === "Nanometer"){
                convertedValue = value
            }else if(toUnit === "Mile"){
                convertedValue = value * 6.213688756E-13
            }else if(toUnit === "Yard"){
                convertedValue = value * 1.093613298E-9
            }else if(toUnit === "Foot"){
                convertedValue = value * 3.280839895E-9
            }else if(toUnit === "Inch"){
                convertedValue = value * 3.937007874E-8
            }else{
                convertedValue = value * 1.057008707E-25
            }

        }else if(fromUnit === "Mile"){
            if(toUnit === "Meter"){
                convertedValue = value * 1609.35
            }else if(toUnit === "Kilometer"){
                convertedValue = value * 1.60935
            }else if(toUnit === "Centimeter"){
                convertedValue = value * 160935
            }else if(toUnit === "Milimeter"){
                convertedValue = value * 1609350
            }else if(toUnit === "Micrometer"){
                convertedValue = value * 1609350000
            }else if(toUnit === "Nanometer"){
                convertedValue = value * 1609350000000
            }else if(toUnit === "Mile"){
                convertedValue = value
            }else if(toUnit === "Yard"){
                convertedValue = value * 1760.0065617
            }else if(toUnit === "Foot"){
                convertedValue = value * 5280.019685
            }else if(toUnit === "Inch"){
                convertedValue = value * 63360.23622
            }else{
                convertedValue = value * 1.701096963E-13
            }

        }else if(fromUnit === "Yard"){
            if(toUnit === "Meter"){
                convertedValue = value * 0.9144
            }else if(toUnit === "Kilometer"){
                convertedValue = value * 0.0009144
            }else if(toUnit === "Centimeter"){
                convertedValue = value * 91.44
            }else if(toUnit === "Milimeter"){
                convertedValue = value * 914.4
            }else if(toUnit === "Micrometer"){
                convertedValue = value * 914400
            }else if(toUnit === "Nanometer"){
                convertedValue = value * 914400000
            }else if(toUnit === "Mile"){
                convertedValue = value * 0.0005681797
            }else if(toUnit === "Yard"){
                convertedValue = value
            }else if(toUnit === "Foot"){
                convertedValue = value * 3
            }else if(toUnit === "Inch"){
                convertedValue = value * 36
            }else{
                convertedValue = value * 9.665287622E-17
            }

        }else if(fromUnit === "Foot"){
            if(toUnit === "Meter"){
                convertedValue = value * 0.3048
            }else if(toUnit === "Kilometer"){
                convertedValue = value * 0.0003048
            }else if(toUnit === "Centimeter"){
                convertedValue = value * 30.48
            }else if(toUnit === "Milimeter"){
                convertedValue = value * 304.8
            }else if(toUnit === "Micrometer"){
                convertedValue = value * 304800
            }else if(toUnit === "Nanometer"){
                convertedValue = value * 304800000
            }else if(toUnit === "Mile"){
                convertedValue = value * 0.0001893932
            }else if(toUnit === "Yard"){
                convertedValue = value * 0.3333333333
            }else if(toUnit === "Foot"){
                convertedValue = value
            }else if(toUnit === "Inch"){
                convertedValue = value * 12
            }else{
                convertedValue = value * 3.22176254E-17
            }

        }else if(fromUnit === "Inch"){
            if(toUnit === "Meter"){
                convertedValue = value * 0.02548
            }else if(toUnit === "Kilometer"){
                convertedValue = value * 0.0000254
            }else if(toUnit === "Centimeter"){
                convertedValue = value * 2.54
            }else if(toUnit === "Milimeter"){
                convertedValue = value * 25.4
            }else if(toUnit === "Micrometer"){
                convertedValue = value * 25400
            }else if(toUnit === "Nanometer"){
                convertedValue = value * 25400000
            }else if(toUnit === "Mile"){
                convertedValue = value * 0.0000157828
            }else if(toUnit === "Yard"){
                convertedValue = value * 0.0277777778
            }else if(toUnit === "Foot"){
                convertedValue = value * 0.0833333333
            }else if(toUnit === "Inch"){
                convertedValue = value
            }else{
                convertedValue = value * 2.684802117E-18
            }

        }else{
            if(toUnit === "Meter"){
                convertedValue = value * 9460660000000000
            }else if(toUnit === "Kilometer"){
                convertedValue = value * 9460660000000
            }else if(toUnit === "Centimeter"){
                convertedValue = value * 946066000000000000
            }else if(toUnit === "Milimeter"){
                convertedValue = value * 9460660000000000000
            }else if(toUnit === "Micrometer"){
                convertedValue = value * 9.46066E+21
            }else if(toUnit === "Nanometer"){
                convertedValue = value * 9.460659999E+24
            }else if(toUnit === "Mile"){
                convertedValue = value * 5878559666946
            }else if(toUnit === "Yard"){
                convertedValue = value * 10346303587051618
            }else if(toUnit === "Foot"){
                convertedValue = value * 31038910761154856
            }else if(toUnit === "Inch"){
                convertedValue = value * 372466929133858300
            }else{
                convertedValue = value
            }
        }
    }else if(type === "temperature"){
        if(fromUnit === "Celsius"){
            if(toUnit === "Celsius"){
                convertedValue = value
            }else if(toUnit === "Kelvin"){
                convertedValue = (value * 1) + 273.15
            }else{
                convertedValue = (value * 1.8) + 32
            }
        }else if(fromUnit === "Kelvin"){
            if(toUnit === "Celsius"){
                convertedValue = (value * 1) - 273.15
            }else if(toUnit === "Kelvin"){
                convertedValue = value
            }else{
                convertedValue = (value * 1.83) - 459.67
            }
        }else{
            if(toUnit === "Celsius"){
                convertedValue = (value * 0.555555556) - 17.777777778
            }else if(toUnit === "Kelvin"){
                convertedValue = (value * 0.55555556) + 255.37222222
            }else{
                convertedValue = value
            }
        }
    }else if(type === "area"){
        if(fromUnit === "Square Meter"){
            if(toUnit === "Square Meter"){
                convertedValue = value
            }else if(toUnit === "Square Kilometer"){
                convertedValue = value * 0.000001
            }else if(toUnit === "Square Centimeter"){
                convertedValue = value * 10000
            }else if(toUnit === "Square Milimeter"){
                convertedValue = value * 1000000
            }else if(toUnit === "Square Micrometer"){
                convertedValue = value * 1000000000000
            }else if(toUnit === "Hectare"){
                convertedValue = value * 0.0001
            }else if(toUnit === "Square Mile"){
                convertedValue = value * 3.861018768E-7
            }else if(toUnit === "Square Yard"){
                convertedValue = value * 1.1959900463
            }else if(toUnit === "Square Foot"){
                convertedValue = value * 10.763910417
            }else if(toUnit === "Square Inch"){
                convertedValue = value * 1550.0031
            }else{
                convertedValue = value * 0.0002471054
            }

        }else if(fromUnit === "Square Kilometer"){
            if(toUnit === "Square Meter"){
                convertedValue = value * 1000000
            }else if(toUnit === "Square Kilometer"){
                convertedValue = value
            }else if(toUnit === "Square Centimeter"){
                convertedValue = value * 10000000000
            }else if(toUnit === "Square Milimeter"){
                convertedValue = value * 1000000000000
            }else if(toUnit === "Square Micrometer"){
                convertedValue = value * 1000000000000000000
            }else if(toUnit === "Hectare"){
                convertedValue = value * 100
            }else if(toUnit === "Square Mile"){
                convertedValue = value * 0.3861018768
            }else if(toUnit === "Square Yard"){
                convertedValue = value * 1195990.0463
            }else if(toUnit === "Square Foot"){
                convertedValue = value * 10763910.417
            }else if(toUnit === "Square Inch"){
                convertedValue = value * 1550003100
            }else{
                convertedValue = value * 247.10538147
            }
        }else if(fromUnit === "Square Centimeter"){
            if(toUnit === "Square Meter"){
                convertedValue = value * 0.0001
            }else if(toUnit === "Square Kilometer"){
                convertedValue = value * 1.E-10
            }else if(toUnit === "Square Centimeter"){
                convertedValue = value
            }else if(toUnit === "Square Milimeter"){
                convertedValue = value * 100
            }else if(toUnit === "Square Micrometer"){
                convertedValue = value * 100000000
            }else if(toUnit === "Hectare"){
                convertedValue = value * 1.E-8
            }else if(toUnit === "Square Mile"){
                convertedValue = value * 3.861018768E-11
            }else if(toUnit === "Square Yard"){
                convertedValue = value * 0.000119599
            }else if(toUnit === "Square Foot"){
                convertedValue = value * 0.001076391
            }else if(toUnit === "Square Inch"){
                convertedValue = value * 0.15500031
            }else{
                convertedValue = value * 2.471053814E-8
            }
        }else if(fromUnit === "Square Milimeter"){
            if(toUnit === "Square Meter"){
                convertedValue = value * 0.000001
            }else if(toUnit === "Square Kilometer"){
                convertedValue = value * 1.E-12
            }else if(toUnit === "Square Centimeter"){
                convertedValue = value * 0.01
            }else if(toUnit === "Square Milimeter"){
                convertedValue = value
            }else if(toUnit === "Square Micrometer"){
                convertedValue = value * 1000000
            }else if(toUnit === "Hectare"){
                convertedValue = value * 9.999999999E-11
            }else if(toUnit === "Square Mile"){
                convertedValue = value * 3.861018768E-13
            }else if(toUnit === "Square Yard"){
                convertedValue = value * 0.000001196
            }else if(toUnit === "Square Foot"){
                convertedValue = value * 0.0000107639
            }else if(toUnit === "Square Inch"){
                convertedValue = value * 0.0015500031
            }else{
                convertedValue = value * 2.471053814E-10
            }

        }else if(fromUnit === "Square Micrometer"){
            if(toUnit === "Square Meter"){
                convertedValue = value * 1.E-12
            }else if(toUnit === "Square Kilometer"){
                convertedValue = value * 1.E-18
            }else if(toUnit === "Square Centimeter"){
                convertedValue = value * 9.999999999E-9
            }else if(toUnit === "Square Milimeter"){
                convertedValue = value * 0.000001
            }else if(toUnit === "Square Micrometer"){
                convertedValue = value 
            }else if(toUnit === "Hectare"){
                convertedValue = value * 1.E-16
            }else if(toUnit === "Square Mile"){
                convertedValue = value * 3.861018768E-19
            }else if(toUnit === "Square Yard"){
                convertedValue = value * 1.195990046E-12
            }else if(toUnit === "Square Foot"){
                convertedValue = value * 1.076391041E-11
            }else if(toUnit === "Square Inch"){
                convertedValue = value * 1.5500031E-9
            }else{
                convertedValue = value * 2.471053814E-16
            }
        }else if(fromUnit === "Hectare"){
            if(toUnit === "Square Meter"){
                convertedValue = value * 10000
            }else if(toUnit === "Square Kilometer"){
                convertedValue = value * 0.01
            }else if(toUnit === "Square Centimeter"){
                convertedValue = value * 100000000
            }else if(toUnit === "Square Milimeter"){
                convertedValue = value * 10000000000
            }else if(toUnit === "Square Micrometer"){
                convertedValue = value * 10000000000000000
            }else if(toUnit === "Hectare"){
                convertedValue = value
            }else if(toUnit === "Square Mile"){
                convertedValue = value * 0.0038610188
            }else if(toUnit === "Square Yard"){
                convertedValue = value * 11959.900463
            }else if(toUnit === "Square Foot"){
                convertedValue = value * 107639.10417
            }else if(toUnit === "Square Inch"){
                convertedValue = value * 15500031
            }else{
                convertedValue = value * 2.4710538147
            }

        }else if(fromUnit === "Square Mile"){
            if(toUnit === "Square Meter"){
                convertedValue = value * 2589990
            }else if(toUnit === "Square Kilometer"){
                convertedValue = value * 2.58999
            }else if(toUnit === "Square Centimeter"){
                convertedValue = value * 25899900000
            }else if(toUnit === "Square Milimeter"){
                convertedValue = value * 2589990000000
            }else if(toUnit === "Square Micrometer"){
                convertedValue = value * 2589990000000000000
            }else if(toUnit === "Hectare"){
                convertedValue = value * 258.999
            }else if(toUnit === "Square Mile"){
                convertedValue = value
            }else if(toUnit === "Square Yard"){
                convertedValue = value * 3097602.26
            }else if(toUnit === "Square Foot"){
                convertedValue = value * 27878420.34
            }else if(toUnit === "Square Inch"){
                convertedValue = value * 4014492529
            }else{
                convertedValue = value * 640.00046695
            }

        }else if(fromUnit === "Square Yard"){
            if(toUnit === "Square Meter"){
                convertedValue = value * 0.83612736
            }else if(toUnit === "Square Kilometer"){
                convertedValue = value * 8.3612736E-7
            }else if(toUnit === "Square Centimeter"){
                convertedValue = value * 8361.2736
            }else if(toUnit === "Square Milimeter"){
                convertedValue = value * 836127.36
            }else if(toUnit === "Square Micrometer"){
                convertedValue = value * 836127360000
            }else if(toUnit === "Hectare"){
                convertedValue = value * 0.0000836127
            }else if(toUnit === "Square Mile"){
                convertedValue = value * 3.228303429E-7
            }else if(toUnit === "Square Yard"){
                convertedValue = value
            }else if(toUnit === "Square Foot"){
                convertedValue = value * 9
            }else if(toUnit === "Square Inch"){
                convertedValue = value * 1296
            }else{
                convertedValue = value * 0.0002066116
            }

        }else if(fromUnit === "Square Foot"){
            if(toUnit === "Square Meter"){
                convertedValue = value * 0.09290304
            }else if(toUnit === "Square Kilometer"){
                convertedValue = value * 9.290304E-8
            }else if(toUnit === "Square Centimeter"){
                convertedValue = value * 929.0304
            }else if(toUnit === "Square Milimeter"){
                convertedValue = value * 92903.04
            }else if(toUnit === "Square Micrometer"){
                convertedValue = value * 92903040000
            }else if(toUnit === "Hectare"){
                convertedValue = value * 0.0000092903
            }else if(toUnit === "Square Mile"){
                convertedValue = value * 3.58700381E-8
            }else if(toUnit === "Square Yard"){
                convertedValue = value * 0.1111111111
            }else if(toUnit === "Square Foot"){
                convertedValue = value
            }else if(toUnit === "Square Inch"){
                convertedValue = value * 144
            }else{
                convertedValue = value * 0.0000229568
            }

        }else if(fromUnit === "Square Inch"){
            if(toUnit === "Square Meter"){
                convertedValue = value * 0.00064516
            }else if(toUnit === "Square Kilometer"){
                convertedValue = value * 6.4516E-10
            }else if(toUnit === "Square Centimeter"){
                convertedValue = value * 6.4516
            }else if(toUnit === "Square Milimeter"){
                convertedValue = value * 645.16
            }else if(toUnit === "Square Micrometer"){
                convertedValue = value * 645160000
            }else if(toUnit === "Hectare"){
                convertedValue = value * 6.4516E-8
            }else if(toUnit === "Square Mile"){
                convertedValue = value * 2.490974868E-10
            }else if(toUnit === "Square Yard"){
                convertedValue = value * 0.0007716049
            }else if(toUnit === "Square Foot"){
                convertedValue = value * 0.0069444444
            }else if(toUnit === "Square Inch"){
                convertedValue = value 
            }else{
                convertedValue = value * 1.594225079E-7
            }

        }else{
            if(toUnit === "Square Meter"){
                convertedValue = value * 4046.8564224
            }else if(toUnit === "Square Kilometer"){
                convertedValue = value * 0.0040468564
            }else if(toUnit === "Square Centimeter"){
                convertedValue = value * 40468564.224
            }else if(toUnit === "Square Milimeter"){
                convertedValue = value * 4046856422.4
            }else if(toUnit === "Square Micrometer"){
                convertedValue = value * 4046856422400000
            }else if(toUnit === "Hectare"){
                convertedValue = value * 0.4046856422
            }else if(toUnit === "Square Mile"){
                convertedValue = value * 0.0015624989
            }else if(toUnit === "Square Yard"){
                convertedValue = value * 4840
            }else if(toUnit === "Square Foot"){
                convertedValue = value * 43560
            }else if(toUnit === "Square Inch"){
                convertedValue = value * 6272640
            }else{
                convertedValue = value
            }
        }

    }else if(type === "volume"){

    }else if(type === "weight"){
        if(fromUnit === "Kilogram"){
            if(toUnit === "Kilogram"){
                convertedValue = value
            }else if(toUnit === "Gram"){
                convertedValue = value * 1000
            }else if(toUnit === "Miligram"){
                convertedValue = value * 1000000
            }else if(toUnit === "Metric Ton"){
                convertedValue = value * 0.001
            }else if(toUnit === "Long Ton"){
                convertedValue = value * 0.0009842073
            }else if(toUnit === "Short Ton"){
                convertedValue = value * 0.0011023122
            }else if(toUnit === "Pound"){
                convertedValue = value * 2.2046244202
            }else if(toUnit === "Ounce"){
                convertedValue = value * 35.273990723
            }else if(toUnit === "Carrat"){
                convertedValue = value * 5000
            }else{
                convertedValue = value * 6.022136652E+26
            }

        }else if(fromUnit === "Gram"){
            if(toUnit === "Kilogram"){
                convertedValue = value * 0.001
            }else if(toUnit === "Gram"){
                convertedValue = value
            }else if(toUnit === "Miligram"){
                convertedValue = value * 1000
            }else if(toUnit === "Metric Ton"){
                convertedValue = value * 0.000001
            }else if(toUnit === "Long Ton"){
                convertedValue = value * 9.842073304E-7
            }else if(toUnit === "Short Ton"){
                convertedValue = value * 0.0000011023
            }else if(toUnit === "Pound"){
                convertedValue = value * 0.0022046244
            }else if(toUnit === "Ounce"){
                convertedValue = value * 0.0352739907
            }else if(toUnit === "Carrat"){
                convertedValue = value * 5
            }else{
                convertedValue = value * 6.022136652E+23
            }
        }else if(fromUnit === "Miligram"){
            if(toUnit === "Kilogram"){
                convertedValue = value * 0.000001
            }else if(toUnit === "Gram"){
                convertedValue = value * 0.001
            }else if(toUnit === "Miligram"){
                convertedValue = value
            }else if(toUnit === "Metric Ton"){
                convertedValue = value * 9.999999999E-10
            }else if(toUnit === "Long Ton"){
                convertedValue = value * 9.842073304E-10
            }else if(toUnit === "Short Ton"){
                convertedValue = value * 1.10231221E-9
            }else if(toUnit === "Pound"){
                convertedValue = value * 0.0000022046
            }else if(toUnit === "Ounce"){
                convertedValue = value * 0.000035274
            }else if(toUnit === "Carrat"){
                convertedValue = value * 0.005
            }else{
                convertedValue = value * 602213665200000000000
            }
        }else if(fromUnit === "Metric Ton"){
            if(toUnit === "Kilogram"){
                convertedValue = value * 1000
            }else if(toUnit === "Gram"){
                convertedValue = value * 1000000
            }else if(toUnit === "Miligram"){
                convertedValue = value * 1000000000
            }else if(toUnit === "Metric Ton"){
                convertedValue = value
            }else if(toUnit === "Long Ton"){
                convertedValue = value * 0.9842073304
            }else if(toUnit === "Short Ton"){
                convertedValue = value * 1.1023122101
            }else if(toUnit === "Pound"){
                convertedValue = value * 2204.6244202
            }else if(toUnit === "Ounce"){
                convertedValue = value * 35273.990723
            }else if(toUnit === "Carrat"){
                convertedValue = value * 5000000
            }else{
                convertedValue = value * 6.022136652E+29
            }

        }else if(fromUnit === "Long Ton"){
            if(toUnit === "Kilogram"){
                convertedValue = value * 1016.04608
            }else if(toUnit === "Gram"){
                convertedValue = value * 1016046.08
            }else if(toUnit === "Miligram"){
                convertedValue = value * 1016046080
            }else if(toUnit === "Metric Ton"){
                convertedValue = value * 1.01604608
            }else if(toUnit === "Long Ton"){
                convertedValue = value
            }else if(toUnit === "Short Ton"){
                convertedValue = value * 1.12
            }else if(toUnit === "Pound"){
                convertedValue = value * 2240
            }else if(toUnit === "Ounce"){
                convertedValue = value * 35840
            }else if(toUnit === "Carrat"){
                convertedValue = value * 5080230.4
            }else{
                convertedValue = value * 6.118768338E+29
            }
        }else if(fromUnit === "Short Ton"){
            if(toUnit === "Kilogram"){
                convertedValue = value * 907.184
            }else if(toUnit === "Gram"){
                convertedValue = value * 907184
            }else if(toUnit === "Miligram"){
                convertedValue = value * 907184000
            }else if(toUnit === "Metric Ton"){
                convertedValue = value * 0.907184
            }else if(toUnit === "Long Ton"){
                convertedValue = value * 0.8928571429
            }else if(toUnit === "Short Ton"){
                convertedValue = value
            }else if(toUnit === "Pound"){
                convertedValue = value * 2000
            }else if(toUnit === "Ounce"){
                convertedValue = value * 32000
            }else if(toUnit === "Carrat"){
                convertedValue = value * 4535920
            }else{
                convertedValue = value * 5.463186016E+29
            }

        }else if(fromUnit === "Pound"){
            if(toUnit === "Kilogram"){
                convertedValue = value * 0.453592
            }else if(toUnit === "Gram"){
                convertedValue = value * 453.592
            }else if(toUnit === "Miligram"){
                convertedValue = value * 453592
            }else if(toUnit === "Metric Ton"){
                convertedValue = value * 0.000453592
            }else if(toUnit === "Long Ton"){
                convertedValue = value * 0.0004464286
            }else if(toUnit === "Short Ton"){
                convertedValue = value * 0.0005
            }else if(toUnit === "Pound"){
                convertedValue = value
            }else if(toUnit === "Ounce"){
                convertedValue = value * 16
            }else if(toUnit === "Carrat"){
                convertedValue = value * 2267.96
            }else{
                convertedValue = value * 2.731593008E+26
            }

        }else if(fromUnit === "Ounce"){
            if(toUnit === "Kilogram"){
                convertedValue = value * 0.0283495
            }else if(toUnit === "Gram"){
                convertedValue = value * 28.3495
            }else if(toUnit === "Miligram"){
                convertedValue = value * 28349.5
            }else if(toUnit === "Metric Ton"){
                convertedValue = value * 0.0000283495
            }else if(toUnit === "Long Ton"){
                convertedValue = value * 0.0000279018
            }else if(toUnit === "Short Ton"){
                convertedValue = value * 0.00003125
            }else if(toUnit === "Pound"){
                convertedValue = value * 0.0625
            }else if(toUnit === "Ounce"){
                convertedValue = value
            }else if(toUnit === "Carrat"){
                convertedValue = value * 141.7475
            }else{
                convertedValue = value * 1.70724563E+25
            }

        }
        else if(fromUnit === "Carrat"){
            if(toUnit === "Kilogram"){
                convertedValue = value * 0.0002
            }else if(toUnit === "Gram"){
                convertedValue = value * 0.2
            }else if(toUnit === "Miligram"){
                convertedValue = value * 200
            }else if(toUnit === "Metric Ton"){
                convertedValue = value * 2.E-7
            }else if(toUnit === "Long Ton"){
                convertedValue = value * 1.96841466E-7
            }else if(toUnit === "Short Ton"){
                convertedValue = value * 2.20462442E-7
            }else if(toUnit === "Pound"){
                convertedValue = value * 0.0004409249
            }else if(toUnit === "Ounce"){
                convertedValue = value * 0.0070547981
            }else if(toUnit === "Carrat"){
                convertedValue = value
            }else{
                convertedValue = value * 1.20442733E+23
            }

        }else{
            if(toUnit === "Kilogram"){
                convertedValue = value * 1.660540199E-27
            }else if(toUnit === "Gram"){
                convertedValue = value * 1.660540199E-24
            }else if(toUnit === "Miligram"){
                convertedValue = value * 1.660540199E-21
            }else if(toUnit === "Metric Ton"){
                convertedValue = value * 1.660540199E-30
            }else if(toUnit === "Long Ton"){
                convertedValue = value * 1.634315837E-30
            }else if(toUnit === "Short Ton"){
                convertedValue = value * 1.830433737E-30
            }else if(toUnit === "Pound"){
                convertedValue = value * 3.660867475E-27
            }else if(toUnit === "Ounce"){
                convertedValue = value * 5.85738796E-26
            }else if(toUnit === "Carrat"){
                convertedValue = value * 8.302700999E-24
            }else{
                convertedValue = value
            }
        }
    }else{
        if(fromUnit === "Second"){
            if(toUnit === "Second"){
                convertedValue = value
            }else if(toUnit === "Milisecond"){
                convertedValue = value * 1000
            }else if(toUnit === "Microsecond"){
                convertedValue = value * 1000000
            }else if(toUnit === "Nanosecond"){
                convertedValue = value * 1000000000
            }else if(toUnit === "Picosecond"){
                convertedValue = value * 1000000000000
            }else if(toUnit === "Minute"){
                convertedValue = value * 0.0166666667
            }else if(toUnit === "Hour"){
                convertedValue = value * 0.0002777778
            }else if(toUnit === "Day"){
                convertedValue = value * 0.0000115741
            }else if(toUnit === "Week"){
                convertedValue = value * 0.0000016534
            }else if(toUnit === "Month"){
                convertedValue = value * 3.802570537E-7
            }else{
                convertedValue = value * 3.168808781E-8
            }

        }else if(fromUnit === "Milisecond"){
            if(toUnit === "Second"){
                convertedValue = value * 0.001
            }else if(toUnit === "Milisecond"){
                convertedValue = value 
            }else if(toUnit === "Microsecond"){
                convertedValue = value * 1000
            }else if(toUnit === "Nanosecond"){
                convertedValue = value * 1000000
            }else if(toUnit === "Picosecond"){
                convertedValue = value * 1000000000
            }else if(toUnit === "Minute"){
                convertedValue = value * 0.0000166667
            }else if(toUnit === "Hour"){
                convertedValue = value * 2.777777777E-7
            }else if(toUnit === "Day"){
                convertedValue = value * 1.157407407E-8
            }else if(toUnit === "Week"){
                convertedValue = value * 1.653439153E-9
            }else if(toUnit === "Month"){
                convertedValue = value * 3.802570537E-10
            }else{
                convertedValue = value * 3.168808781E-11
            }
        }else if(fromUnit === "Microsecond"){
            if(toUnit === "Second"){
                convertedValue = value * 0.000001
            }else if(toUnit === "Milisecond"){
                convertedValue = value * 0.001
            }else if(toUnit === "Microsecond"){
                convertedValue = value
            }else if(toUnit === "Nanosecond"){
                convertedValue = value * 1000
            }else if(toUnit === "Picosecond"){
                convertedValue = value * 1000000
            }else if(toUnit === "Minute"){
                convertedValue = value * 1.666666666E-8
            }else if(toUnit === "Hour"){
                convertedValue = value * 2.777777777E-10
            }else if(toUnit === "Day"){
                convertedValue = value * 1.157407407E-11
            }else if(toUnit === "Week"){
                convertedValue = value * 1.653439153E-12
            }else if(toUnit === "Month"){
                convertedValue = value * 3.802570537E-13
            }else{
                convertedValue = value * 3.168808781E-14
            }
        }else if(fromUnit === "Nanosecond"){
            if(toUnit === "Second"){
                convertedValue = value * 1.E-9
            }else if(toUnit === "Milisecond"){
                convertedValue = value * 0.000001
            }else if(toUnit === "Microsecond"){
                convertedValue = value * 0.001
            }else if(toUnit === "Nanosecond"){
                convertedValue = value
            }else if(toUnit === "Picosecond"){
                convertedValue = value * 1000
            }else if(toUnit === "Minute"){
                convertedValue = value * 1.666666666E-11
            }else if(toUnit === "Hour"){
                convertedValue = value * 2.777777777E-13
            }else if(toUnit === "Day"){
                convertedValue = value * 1.157407407E-14
            }else if(toUnit === "Week"){
                convertedValue = value * 1.653439153E-15
            }else if(toUnit === "Month"){
                convertedValue = value * 3.802570537E-16
            }else{
                convertedValue = value * 3.168808781E-17
            }

        }else if(fromUnit === "Picosecond"){
            if(toUnit === "Second"){
                convertedValue = value * 1.E-12
            }else if(toUnit === "Milisecond"){
                convertedValue = value * 1.E-9
            }else if(toUnit === "Microsecond"){
                convertedValue = value * 0.000001
            }else if(toUnit === "Nanosecond"){
                convertedValue = value * 0.001
            }else if(toUnit === "Picosecond"){
                convertedValue = value 
            }else if(toUnit === "Minute"){
                convertedValue = value * 1.666666666E-14
            }else if(toUnit === "Hour"){
                convertedValue = value * 2.777777777E-16
            }else if(toUnit === "Day"){
                convertedValue = value * 1.157407407E-17
            }else if(toUnit === "Week"){
                convertedValue = value * 1.653439153E-18
            }else if(toUnit === "Month"){
                convertedValue = value * 3.802570537E-19
            }else{
                convertedValue = value * 3.168808781E-20
            }
        }else if(fromUnit === "Minute"){
            if(toUnit === "Second"){
                convertedValue = value * 60
            }else if(toUnit === "Milisecond"){
                convertedValue = value * 60000
            }else if(toUnit === "Microsecond"){
                convertedValue = value * 60000000
            }else if(toUnit === "Nanosecond"){
                convertedValue = value * 60000000000
            }else if(toUnit === "Picosecond"){
                convertedValue = value * 60000000000000
            }else if(toUnit === "Minute"){
                convertedValue = value
            }else if(toUnit === "Hour"){
                convertedValue = value * 0.0166666667
            }else if(toUnit === "Day"){
                convertedValue = value * 0.0006944444
            }else if(toUnit === "Week"){
                convertedValue = value * 0.0000992063
            }else if(toUnit === "Month"){
                convertedValue = value * 0.0000228154
            }else{
                convertedValue = value * 0.0000019013
            }

        }else if(fromUnit === "Hour"){
            if(toUnit === "Second"){
                convertedValue = value * 3600
            }else if(toUnit === "Milisecond"){
                convertedValue = value * 3600000
            }else if(toUnit === "Microsecond"){
                convertedValue = value * 3600000000
            }else if(toUnit === "Nanosecond"){
                convertedValue = value * 3600000000000
            }else if(toUnit === "Picosecond"){
                convertedValue = value * 3600000000000000
            }else if(toUnit === "Minute"){
                convertedValue = value * 60
            }else if(toUnit === "Hour"){
                convertedValue = value
            }else if(toUnit === "Day"){
                convertedValue = value * 0.0416666667
            }else if(toUnit === "Week"){
                convertedValue = value * 0.005952381
            }else if(toUnit === "Month"){
                convertedValue = value * 0.0013689254
            }else{
                convertedValue = value * 0.0001140771
            }

        }else if(fromUnit === "Day"){
            if(toUnit === "Second"){
                convertedValue = value * 86400
            }else if(toUnit === "Milisecond"){
                convertedValue = value * 86400000
            }else if(toUnit === "Microsecond"){
                convertedValue = value * 86400000000
            }else if(toUnit === "Nanosecond"){
                convertedValue = value * 86400000000000
            }else if(toUnit === "Picosecond"){
                convertedValue = value * 86400000000000000
            }else if(toUnit === "Minute"){
                convertedValue = value * 1440
            }else if(toUnit === "Hour"){
                convertedValue = value * 24
            }else if(toUnit === "Day"){
                convertedValue = value
            }else if(toUnit === "Week"){
                convertedValue = value * 0.1428571429
            }else if(toUnit === "Month"){
                convertedValue = value * 0.0328542094
            }else{
                convertedValue = value * 0.0027378508
            }

        }
        else if(fromUnit === "Week"){
            if(toUnit === "Second"){
                convertedValue = value * 604800
            }else if(toUnit === "Milisecond"){
                convertedValue = value * 604800000
            }else if(toUnit === "Microsecond"){
                convertedValue = value * 604800000000
            }else if(toUnit === "Nanosecond"){
                convertedValue = value * 604800000000000
            }else if(toUnit === "Picosecond"){
                convertedValue = value * 604800000000000000
            }else if(toUnit === "Minute"){
                convertedValue = value * 10080
            }else if(toUnit === "Hour"){
                convertedValue = value * 168
            }else if(toUnit === "Day"){
                convertedValue = value * 7
            }else if(toUnit === "Week"){
                convertedValue = value
            }else if(toUnit === "Month"){
                convertedValue = value * 0.2299794661
            }else{
                convertedValue = value * 0.0191649555
            }

        }else if(fromUnit === "Month"){
            if(toUnit === "Second"){
                convertedValue = value * 2629800
            }else if(toUnit === "Milisecond"){
                convertedValue = value * 2629800000
            }else if(toUnit === "Microsecond"){
                convertedValue = value * 2629800000000
            }else if(toUnit === "Nanosecond"){
                convertedValue = value * 2629800000000000
            }else if(toUnit === "Picosecond"){
                convertedValue = value * 2629800000000000000
            }else if(toUnit === "Minute"){
                convertedValue = value * 43830
            }else if(toUnit === "Hour"){
                convertedValue = value * 730.5
            }else if(toUnit === "Day"){
                convertedValue = value * 30.4375
            }else if(toUnit === "Week"){
                convertedValue = value * 4.3482142857
            }else if(toUnit === "Month"){
                convertedValue = value
            }else{
                convertedValue = value * 0.0833333333
            }
        }
        else{
            if(toUnit === "Second"){
                convertedValue = value * 31557600
            }else if(toUnit === "Milisecond"){
                convertedValue = value * 31557600000
            }else if(toUnit === "Microsecond"){
                convertedValue = value * 31557600000000
            }else if(toUnit === "Nanosecond"){
                convertedValue = value * 31557600000000000
            }else if(toUnit === "Picosecond"){
                convertedValue = value * 31557600000000000000
            }else if(toUnit === "Minute"){
                convertedValue = value * 525960
            }else if(toUnit === "Hour"){
                convertedValue = value * 8766
            }else if(toUnit === "Day"){
                convertedValue = value * 365.25
            }else if(toUnit === "Week"){
                convertedValue = value * 52.178571429
            }else if(toUnit === "Month"){
                convertedValue = value * 12
            }else{
                convertedValue = value
            }
        }
    }
    render(convertedValue, number)
}
function render(converted, number){
    const convertedEl = document.getElementById("to" + number)
    convertedEl.value = converted
}