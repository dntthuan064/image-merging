const path = require('path');
const sharp = require('sharp');

// Define the paths to your folders
const baseFolderPath = 'non-edited-path';
const mergeFolderPath = 'edited-path';
const outputFolderPath = 'saved-folder-path';

async function mergeImages() {
    // Loop over the range of file names (901 - 1000 is file name)
    for (let i = 901; i <= 1000; i++) {
        // Open the base image
        let baseImage = sharp(`${baseFolderPath}/${i}.jpg`);
        let { width, height } = await baseImage.metadata();

        for (let j = 1; j <= 14; j++) {
            let imgPath = `${mergeFolderPath}/${i}_${j}.jpg`;
            let img = sharp(imgPath).resize(width, height);
            let mergedImage = sharp({
                create: {
                    width: width * 2,
                    height: height,
                    channels: 4,
                    background: { r: 0, g: 0, b: 0, alpha: 0 }
                }
            });

            // // Merge the images (baseImage is displayed on the right side)
            // mergedImage = await mergedImage.composite([
            //     { input: await img.toBuffer(), left: 0, top: 0 },
            //     { input: await baseImage.toBuffer(), left: width, top: 0 }
            // ]);

            // Merge the images (baseImage is displayed on the left side) - enable this if you want to put the baseImage to the left
            mergedImage = await mergedImage.composite([
                { input: await img.toBuffer(), left: width, top: 0 },
                { input: await baseImage.toBuffer(), left: 0, top: 0 },
            ]);
            let outputPath = path.join(outputFolderPath, `Merged_${i}_${j}.jpg`);
            await mergedImage.toFile(outputPath);
        }
    }
}
mergeImages().catch(console.error);
