import modelInfo from './modelInfo.json'


function createData(folder, name, fbxUrl, fbxUrlText,photosUrl, photoUrlText, coord, sketchfabUrl,introduction) {
  return {folder, name, fbxUrl, fbxUrlText, photosUrl, photoUrlText, coord, sketchfabUrl,introduction};
}

export const rows = modelInfo.map((entry) => {
  return(createData(entry.folder,
    entry.name,
    entry.fbxUrl,
    entry.fbxUrlText,
    entry.photosUrl,
    entry.photoUrlText,
    entry.coord,
    entry.sketchfabUrl,
    entry.introduction));
})
