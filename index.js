
function superbowlWin(records){
for(let item of records)
{
    if (item.result == "W")
    {
        return item.year;
    }
}
}

record.find(superbowlWin)
