const dataMock = [
  { id: 1, parent: "root" },
  { id: 2, parent: 1, type: "test" },
  { id: 3, parent: 1, type: "test" },

  { id: 4, parent: 2, type: "test" },
  { id: 5, parent: 2, type: "test" },
  { id: 6, parent: 2, type: "test" },

  { id: 7, parent: 4, type: null },
  { id: 8, parent: 4, type: null },
];
const getChildrenMock = [
  { id: 4, parent: 2, type: "test" },
  { id: 5, parent: 2, type: "test" },
  { id: 6, parent: 2, type: "test" },
];
const getAllChildrenMock = [
  { id: 4, parent: 2, type: "test" },
  { id: 5, parent: 2, type: "test" },
  { id: 6, parent: 2, type: "test" },
  { id: 7, parent: 4, type: null },
  { id: 8, parent: 4, type: null },
];
const getAllParentsMock = [
  { id: 4, parent: 2, type: "test" },
  { id: 2, parent: 1, type: "test" },
  { id: 1, parent: "root" },
];

const uuidMock = [
  { id: "31402c1f-4640-4a39-a0be-93db4fca05c2", parent: "root" },
  {
    id: "848a7cac-5746-403f-846d-ef00cfe595be",
    parent: "31402c1f-4640-4a39-a0be-93db4fca05c2",
    type: "test",
  },
  {
    id: "2089bbdd-16d3-44e6-8312-83615e755665",
    parent: "31402c1f-4640-4a39-a0be-93db4fca05c2",
    type: "test",
  },

  {
    id: "66679984-a9e9-40cf-a8c3-762bf802c81c",
    parent: "848a7cac-5746-403f-846d-ef00cfe595be",
    type: "test",
  },
  {
    id: "633702e7-932a-429a-b66c-e5485818dc7f",
    parent: "848a7cac-5746-403f-846d-ef00cfe595be",
    type: "test",
  },
  {
    id: "a86e327f-5760-4dab-9ae7-05ddc1853b05",
    parent: "848a7cac-5746-403f-846d-ef00cfe595be",
    type: "test",
  },

  {
    id: "053cfbf9-7e9a-460b-baeb-20fc11834aa5",
    parent: "66679984-a9e9-40cf-a8c3-762bf802c81c",
    type: null,
  },
  {
    id: "9a8d79d5-e682-48ca-b8e4-20732b88838b",
    parent: "66679984-a9e9-40cf-a8c3-762bf802c81c",
    type: null,
  },
];
const getChildrenUuidMock = uuidMock.slice(3, 6);
const getAllChildrenUuidMock = [
  {
    id: "66679984-a9e9-40cf-a8c3-762bf802c81c",
    parent: "848a7cac-5746-403f-846d-ef00cfe595be",
    type: "test",
  },
  {
    id: "633702e7-932a-429a-b66c-e5485818dc7f",
    parent: "848a7cac-5746-403f-846d-ef00cfe595be",
    type: "test",
  },
  {
    id: "a86e327f-5760-4dab-9ae7-05ddc1853b05",
    parent: "848a7cac-5746-403f-846d-ef00cfe595be",
    type: "test",
  },

  {
    id: "053cfbf9-7e9a-460b-baeb-20fc11834aa5",
    parent: "66679984-a9e9-40cf-a8c3-762bf802c81c",
    type: null,
  },
  {
    id: "9a8d79d5-e682-48ca-b8e4-20732b88838b",
    parent: "66679984-a9e9-40cf-a8c3-762bf802c81c",
    type: null,
  },
];

const getAllParentsUuidMock = [
  {
    id: "66679984-a9e9-40cf-a8c3-762bf802c81c",
    parent: "848a7cac-5746-403f-846d-ef00cfe595be",
    type: "test",
  },
  {
    id: "848a7cac-5746-403f-846d-ef00cfe595be",
    parent: "31402c1f-4640-4a39-a0be-93db4fca05c2",
    type: "test",
  },
  { id: "31402c1f-4640-4a39-a0be-93db4fca05c2", parent: "root" },
];

export {
  dataMock,
  getChildrenMock,
  getAllChildrenMock,
  getAllParentsMock,
  uuidMock,
  getChildrenUuidMock,
  getAllChildrenUuidMock,
  getAllParentsUuidMock,
};
