function numberOfPhotos(photoSizeMb, hardDriveSizeGb) {
  const convertion = hardDriveSizeGb * 1000;

  const result = Math.floor(convertion / photoSizeMb);

  return result;
}

console.log(numberOfPhotos(1, 1)); // should return 1000.
console.log(numberOfPhotos(2, 1)); // should return 500.
console.log(numberOfPhotos(4, 256)); // should return 64000.
console.log(numberOfPhotos(3.5, 750)); // should return 214285.
console.log(numberOfPhotos(3.5, 5.5)); // should return 1571.

/*
Photo Storage
Given a photo size in megabytes (MB), and hard drive capacity in gigabytes (GB), return the number of photos the hard drive can store using the following constraints:

1 gigabyte equals 1000 megabytes.
Return the number of whole photos the drive can store.
*/
