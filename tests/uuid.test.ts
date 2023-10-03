import { TreeStore } from "..";
import {
  getAllChildrenUuidMock,
  getAllParentsUuidMock,
  getChildrenUuidMock,
  uuidMock,
} from "./MOCK_DATA";

describe("Проверка класса TreeStore с строками в виде id", () => {
  const ts = new TreeStore(uuidMock);
  test("Возвращает те же данные указанные при создании объекта", () => {
    expect(ts.getAll()).toBe(uuidMock);
  });
  test("Возвращает объект c указанным id", () => {
    expect(ts.getItem("633702e7-932a-429a-b66c-e5485818dc7f")).toBe(
      uuidMock[4]
    );
  });
  test("Возвращает дочерние объекты", () => {
    expect(ts.getChildren("848a7cac-5746-403f-846d-ef00cfe595be")).toEqual(
      getChildrenUuidMock
    );
  });
  test("Если нет дочерних объектов возвращает пустой массив", () => {
    expect(ts.getChildren("9a8d79d5-e682-48ca-b8e4-20732b88838b")).toEqual([]);
  });
  test("Возвращает все дочерние объекты", () => {
    expect(ts.getAllChildren("848a7cac-5746-403f-846d-ef00cfe595be")).toEqual(
      getAllChildrenUuidMock
    );
  });
  test("Возвращает все родительские объекты по порядку", () => {
    expect(ts.getAllParents("9a8d79d5-e682-48ca-b8e4-20732b88838b")).toEqual(
      getAllParentsUuidMock
    );
  });
});
