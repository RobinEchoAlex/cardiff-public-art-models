function createData(folder, name, fbxUrl, photosUrl, photoUrlText, coord, sketchfabUrl) {
  return {folder, name, fbxUrl, photosUrl, photoUrlText, coord, sketchfabUrl};
}

export const rows = [
  createData('skeleton',
    "Memorial to Diverse Ethnic and Commonwealth People In War",
    "https://drive.google.com/file/d/1LNMuZXiT8NdX2J66xm80QdM64ZkXIm9_/view?usp=sharing",
    "https://dubox.com/s/1VnGIEdoklHLI7NNVEAWeJA ",
    '2hzm',
    [51.485999751019435, -3.1802259356889366],
    "https://sketchfab.com/models/ca05b951486840cda1a45e7a890128f9/embed"),
  createData('skeleton2',
    'Drinking Fountain',
    "https://drive.google.com/file/d/1v5fbbISKRjkV5ZrtvZSmvoDCnhAFP8Fr/view?usp=sharing",
    "https://dubox.com/s/1MASqbt5wlH7pJmiUOToYzw",
    '5vux',
    [51.48374634245954, -3.1782340219244305],
    "https://sketchfab.com/models/a24b2438e3674b3b8c334d136dc89126/embed"),
  createData('magistrates',
    'Magistrate Court',
    "https://drive.google.com/file/d/1-q6LwWB1VO4VjxMqtHlYMdinxTKZPByG/view?usp=sharing",
    "https://dubox.com/s/1DvC2F4VCx8Zj3cGj8XaQZQ",
    'xgrs',
    [51.48152690383384, -3.1663288597426518]),
  createData('girl',
    'Girl',
    '',
    'https://dubox.com/s/1CXHVuStqZRE8HWiU6ho2IA',
    'd439',
    [51.485165905517405, -3.1768937541292517])
];
