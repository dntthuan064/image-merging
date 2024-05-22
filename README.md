Install lib:
```
npm install sharp
```
Run code:
```
node main.js
```
Replace this code to change the position of `baseImage`
```
// baseImage to the right side
mergedImage = await mergedImage.composite([
    { input: await img.toBuffer(), left: 0, top: 0 },
    { input: await baseImage.toBuffer(), left: width, top: 0 }
]);
```
with this:
```
// baseImage to the left side
mergedImage = await mergedImage.composite([
    { input: await img.toBuffer(), left: width, top: 0 },
    { input: await baseImage.toBuffer(), left: 0, top: 0 }
]);
```
