import uuid from "./uuid";

describe("uuid...", () => {
  it("should generate 500,000 universally unique identifers.", () => {
    let hashTable = {};
    let testCases = 5e5;
    let totalUuidsCreated = 0;
    let hashTableVolume = 0;

    while (testCases-- > 0) {
      hashTable[uuid()] = "";
      totalUuidsCreated++;
    }

    hashTableVolume = Object.keys(hashTable).length;

    expect(hashTableVolume).toEqual(totalUuidsCreated);
  });
});
