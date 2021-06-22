const fs = require('fs');

const path = require('path')

const filePathGroup18 = path.join(__dirname, '1800');
const filePathGroup20 = path.join(__dirname, '2000');
const pathGirl = path.join(__dirname, 'girls');
const pathBoys = path.join(__dirname, 'boys');


// fs.mkdir(`${filePathGroup18, filePathGroup20}`, {recursive: true}, (err)=>{
//     if(err){
//         console.log('************');
//         console.log(err);
//         console.log('************');
//     }
// })


// fs.readdir(filePathGroup18, (err, files) => {
//     for (const file of files) {
//         fs.rename(path.join(filePathGroup18, file), path.join(filePathGroup20, file), () => { });
//     }
// });
//
// fs.readdir(filePathGroup20, (err, files) => {
//     for (const file of files) {
//         fs.rename(path.join(filePathGroup20, file), path.join(filePathGroup18, file), () => { });
//     }
// });

const mover = (path1, path2) => {
    fs.readdir(path1, (err, files) => {
        for (const file of files) {
            fs.rename(path.join(path1, file), path.join(path2, file), () => { });
        }
    });
};
//
// mover(filePathGroup18, filePathGroup20);
// mover(filePathGroup20, filePathGroup18);

const mover2 = (path1) => {
    fs.readdir(path1, (err, files) => {
        for (const file of files) {
            fs.readFile(path.join(path1, file), (err, data)=>{
                let user = JSON.parse(data);
                if(user.gender === 'male'){
                    mover(path1, pathBoys)
                    return
                }
                mover(path1, pathGirl)
            })
        }
    });
};

mover2(filePathGroup18);
mover2(filePathGroup20);






