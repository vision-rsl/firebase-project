#!/usr/bin/env node

// Grab provided args
const [, , ...args] = process.argv

var fs = require('fs');
var root = './public/icons'

var filename;
args.forEach(function (val, index, array) {
    filename = `${root}/${val}.tsx`;
    const temp = `import React from 'react';
    import { IconProps, defaultIconProps } from './_interface';

    const IconTempalte = (props: IconProps) => {
        return (
            <svg
            xmlns="http://www.w3.org/2000/svg"        
            viewBox="0 0 468 468"
            width={props.width ? props.width: defaultIconProps.width}
            height={props.height ? props.height: defaultIconProps.height}
            {...props}
        >
            <path
            d="M450.1 187.5l-10.2-10.8-35.8-96.5C398 63.9 382.4 53.1 365 53H109.3c-17.4 0-33 10.9-39.1 27.2l-35.3 95.3-14.7 13.6C7.4 200 0 216 0 232.8v140.6c.1 23 18.8 41.6 41.8 41.6h26.4c23 0 41.7-18.6 41.8-41.6V353h248v20.4c.1 23 18.8 41.6 41.8 41.6h26.4c23 0 41.7-18.6 41.8-41.6V229.1c-.1-15.7-6.5-30.7-17.9-41.6zM89 87c3.2-8.5 11.3-14 20.3-14h255.8c9 0 17.1 5.6 20.3 14l31.2 84h-23.3c-5.5-37.5-40.4-63.4-77.9-57.8-29.9 4.4-53.4 27.9-57.8 57.8H57.8L89 87zm283.9 84h-95.1c5.5-26.3 31.3-43.1 57.6-37.6 18.8 4 33.5 18.7 37.5 37.6zM90 373.4c-.1 12-9.8 21.6-21.8 21.6H41.8c-12 0-21.7-9.6-21.8-21.6v-26.2c6 3.9 13.9 5.8 21.8 5.8H90v20.4zm358 0c-.1 12-9.8 21.6-21.8 21.6h-26.4c-12 0-21.7-9.7-21.8-21.6V353h48.2c7.9 0 15.8-1.9 21.8-5.8v26.2zM426.2 333H41.8c-11.9.1-21.7-9.4-21.8-21.4v-78.8c0-11 4.9-21.5 13.3-28.6l.4-.4L47.3 191H426l9.6 10.3c.1.2.4.3.5.5 7.5 7.1 11.8 17 11.8 27.3v82.5h.1c-.1 11.9-9.9 21.5-21.8 21.4z"
            fill={props.fill ? props.fill: defaultIconProps.fill}
            data-original="#000000"
            xmlns="http://www.w3.org/2000/svg"
            />
            <path
            d="M132 231H57c-5.5 0-10 4.5-10 10v52c0 5.5 4.5 10 10 10h75c5.5 0 10-4.5 10-10v-52c0-5.5-4.5-10-10-10zm-10 52H67v-32h55v32zM411 231h-75c-5.5 0-10 4.5-10 10v52c0 5.5 4.5 10 10 10h75c5.5 0 10-4.5 10-10v-52c0-5.5-4.5-10-10-10zm-10 52h-55v-32h55v32zM282.3 273h-96.6c-5.5 0-10 4.5-10 10s4.5 10 10 10h96.6c5.5 0 10-4.5 10-10s-4.5-10-10-10zM282.3 242h-96.6c-5.5 0-10 4.5-10 10s4.5 10 10 10h96.6c5.5 0 10-4.5 10-10s-4.5-10-10-10z"
            fill={props.fill ? props.fill: defaultIconProps.fill}
            data-original="#000000"
            xmlns="http://www.w3.org/2000/svg"
            />
        </svg>
        );
    };

    export default IconTempalte;`


    if (!fs.existsSync(filename)) {
        fs.writeFile(`${filename}`, temp, function (err, file) {
            if (err) throw err;
            console.log('Saved!');
        });
    } else {
        console.log('ERROR');
    }
});
// Print hello world provided args
// console.log(`Hello world === ${args}`);
// console.log(container);
// console.log(!fs.existsSync(container));

// if (!fs.existsSync(container)) {
//     fs.mkdirSync(container); // create folder
    
//     fs.open(`${container}/index.tsx`, '', function (err, file) {
//         if (err) throw err;
//         console.log('Saved!');
//     });

//     fs.open(`${container}/index.module.scss`, 'w', function (err, file) {
//         if (err) throw err;
//         console.log('Saved!');
//     });
    
// } else {
//     console.log(`${container} !!! FOLDER IS ALREADY PRESENT !!!`);
//     fs.open(`${container}/index.tsx`, '', function (err, file) {
//         if (err) throw err;
//         console.log('Saved!');
//     });
// }


// fs.readFile(`${pageRoute}/routers.ts`, 'utf8', (err, data) => {
//     if (err) {
//         console.error(err)
//         return
//     }
//     console.log(data)
// })
