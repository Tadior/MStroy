import { TreeStore } from "..";
import {
  dataMock,
  getAllChildrenMock,
  getAllParentsMock,
  getChildrenMock,
} from "./MOCK_DATA";

describe("Проверка класса TreeStore", () => {
  const ts = new TreeStore(dataMock);
  test("Возвращает те же данные указанные при создании объекта", () => {
    expect(ts.getAll()).toBe(dataMock);
  });
  test("Возвращает объект c указанным id", () => {
    expect(ts.getItem(2)).toBe(dataMock[1]);
  });
  test("Возвращает дочерние объекты", () => {
    expect(ts.getChildren(2)).toEqual(getChildrenMock);
  });
  test("Возвращает все дочерние объекты", () => {
    expect(ts.getAllChildren(2)).toEqual(getAllChildrenMock);
  });
  test("Если нет дочерних объектов возвращает пустой массив", () => {
    expect(ts.getChildren(8)).toEqual([]);
  });
  test("Возвращает все родительские объекты по порядку", () => {
    expect(ts.getAllParents(8)).toEqual(getAllParentsMock);
  });
});
