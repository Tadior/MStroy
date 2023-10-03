import { TreeStore } from "..";

const errorMock = [
  { id: 1, parent: "root" },
  { id: "", parent: 1, type: "test" },
  { id: 3, parent: 1, type: "test" },

  { id: 4, parent: "", type: "test" },
  { id: 5, parent: "", type: "test" },
  { id: 6, parent: "", type: "test" },

  { id: 7, parent: 4, type: null },
  { id: 8, parent: 4, type: null },
];

describe("Проверка класса TreeStore", () => {
  test("Возвращает ошибку, так как id или parent пустые", () => {
    const ts = () => new TreeStore(errorMock);
    expect(ts).toThrow(TypeError);
  });
});
