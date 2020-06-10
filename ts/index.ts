let aa:string='22'


let bb:boolean=true
let cc:Array<string>=['11','22']
let dd:string[]=['22','33']
enum Sex{man=10,woman=20}
let sex:Sex = Sex.man
let ee:any = 'st'
function hh(x:boolean):void{
    console.log(x);
    
}

console.log(aa,bb,cc,dd,ee,sex)
hh(true)