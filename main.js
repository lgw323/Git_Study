const express=require('express'); //module import
const app=express() // express 실행

app.listen(3000, ()=>{ // 서버 생성, 포트번호:3000
    console.log('서버 시작');
}) 

app.get('/',(req,res)=>{
    console.log('루트에 대한 요청');
    res.send('루트페이지에 대한 요청');
})

app.get('/test',(req,res)=>{
    console.log('===> test에 대한 요청');
    res.send('test에 대한 요청');
})

app.get('/lgw323',(req,res)=>{
    console.log('===> lgw323에 대한 요청');
    res.send('lgw323에 대한 요청');
})
app.get('/login',(req,res)=>{
    console.log('===> 로그인 요청');
    res.send('로그인 페이지 예시');
})