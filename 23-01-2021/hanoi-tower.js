const hanoiTower = (numberDisk, source, destination, temp) => {
  if (numberDisk == 1) {
    console.log(`move from ${source} to ${destination}`);
    return;
  }

  hanoiTower(numberDisk - 1, source, temp, destination);

  console.log(`move disk ${numberDisk} from ${source} to ${destination}`);

  hanoiTower(numberDisk - 1, temp, destination, source);
};

hanoiTower(4, "A", "C", "B");
