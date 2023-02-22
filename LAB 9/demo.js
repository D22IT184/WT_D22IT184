let studentArr = [
    {
        name:"Ritesh",
        age:20,
        ID:"20it001",
        WT_Marks:58,
        COMI_Marks:78,
        CN_Marks:65
    },
    {
        name:"Mitesh",
        age:21,
        ID:"20it002",
        WT_Marks:68,
        COMI_Marks:58,
        CN_Marks:85
    },
    {
        name:"Hitesh",
        age:22,
        ID:"20it003",
        WT_Marks:88,
        COMI_Marks:88,
        CN_Marks:95
    },
    {
        name:"Pritesh",
        age:23,
        ID:"20it004",
        WT_Marks:98,
        COMI_Marks:88,
        CN_Marks:95
    },
]


let a  = studentArr.forEach(function(student,i){
    console.log(
        `at index ${i} we have ${student.name} and length is ${student.name.length}`
    )
})
