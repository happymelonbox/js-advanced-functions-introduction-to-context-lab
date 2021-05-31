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
        timeIn: time[1],
        date: time[0]
    })
    return record
}
