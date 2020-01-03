import * as faceapi from 'face-api.js';

export async function loadModels() {
  const MODEL_URL = process.env.PUBLIC_URL + '/models';
  await faceapi.loadTinyFaceDetectorModel(MODEL_URL);
}

export async function getFullFaceDescription(blob, inputSize = 512) {
    let scoreThreshold = 0.5;
    const OPTION = new faceapi.TinyFaceDetectorOptions({
      inputSize,
      scoreThreshold
    });
  
    // fetch image to api
    let img = await faceapi.fetchImage(blob);
  
    // detect all faces and generate full description from image
    // including landmark and descriptor of each face
    let fullDesc = await faceapi
      .detectAllFaces(img, OPTION);
    return fullDesc;
}
  
  export function isFaceDetectionModelLoaded() {
    return !!faceapi.nets.tinyFaceDetector.params;
  }