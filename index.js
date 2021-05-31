// Your code here
function createEmployeeRecord(array = ['','','',0]){
        let obj = {
            firstName: array[0],
            familyName: array[1],
            title: array[2],
            payPerHour: array[3],
            timeInEvents: [],
            timeOutEvents: []
}
return obj
}

function createEmployeeRecords(arr){
    let newArray = arr.map(
        function(array){
            let employeeRecord = createEmployeeRecord(array)
            return employeeRecord}
    )
    return newArray
}

function createTimeInEvent(record, date){
    let time = date.split(' ')
    record.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(time[1]),
        date: time[0]
    })
    return record
}

function createTimeOutEvent(record, date){
    let time = date.split(' ')
    record.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(time[1]),
        date: time[0]
    })
    return record
}

function hoursWorkedOnDate(record, date){
    let timeInDate = record.timeInEvents.find(function(time){
        return time.date === date
    })
    let timeOutDate = record.timeOutEvents.find(function(time){
        return time.date === date
    })
    let hoursWorked = timeOutDate.hour - timeInDate.hour
    return hoursWorked
}

