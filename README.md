Install lib:
```npm install sharp```
To run:
```node main.js```

If you want to change the position of the baseImage, set the `left` option from "0" to "width" for `img` and `baseImage`

```
    { input: await img.toBuffer(), left: 0, top: 0 },
    { input: await baseImage.toBuffer(), left: width, top: 0 }
```