const d=new Date('2026-08-01T16:00:00');
setInterval(()=>{
let t=d-new Date();
let days=Math.floor(t/86400000);
document.getElementById('timer').innerText='До свадьбы осталось '+days+' дней';
},1000);