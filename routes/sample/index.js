//이 router 에서 사용하는 npm 호출
const express = require('express');

//index->같은 폴더 내 다른 router 호출
const router = express.Router();
const exam = require('./exam');

//폴더 내 다른 router 주소 할당
router.use('/exam', exam);

//이 router 에서 동작 하는 기능
router.get('/', (req, res) => {
    console.log(req);
    res.json({msg:'please input your name!'});
});
router.post('/', (req, res) => {
    console.log(req);
    //res.status(401); //반환값의 상태값 결정 ex)20x:성공, 4xx:실패(성공시 별도로 표시 안해도 됨)
    res.json({
        id: req.body.id,
        name: req.body.name
    });
})
//지정된 주소외 다른 주소 입력시
router.get('/:exam', (req, res) => {
    console.log(req);
    res.json({msg:`your name is ${req.params.exam}`});
});

module.exports = router;