// const result = records.find(records)
// function superbowlWin(record)
// {
//     if (record == "W")
//     {
//         return result.year
//     }
//     else if (record != "W" && record != "L")
//     {
//         return undefined
//     }
// }
function superbowlWin(record){
for(let item of record)
{
    if (item.result == "W")
    {
        return item.year;
    }
}
}
