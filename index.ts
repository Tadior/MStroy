type idType = string | number;
interface TreeStoreArg {
  id: idType;
  parent: idType;
  type?: any;
}
type TreeStoreDataType = { [key: string]: TreeStoreArg };
type TreeStoreChildrenType = { [id: string]: string[] };

export class TreeStore {
  private items: TreeStoreArg[];
  private data: TreeStoreDataType;
  private childrenData: TreeStoreChildrenType;

  constructor(arg: TreeStoreArg[]) {
    const info = this.setData(arg);
    this.items = arg;
    this.data = info.data;
    this.childrenData = info.childrenData;
  }

  getAll() {
    return this.items;
  }

  getItem(id: idType) {
    return this.data[id.toString()];
  }

  getChildren(id: idType) {
    const childrenIds = this.childrenData[id];
    if (!childrenIds) {
      return [];
    }
    return childrenIds.map((childrenId) => {
      return this.getItem(childrenId);
    });
  }

  getAllChildren(id: idType) {
    let out: TreeStoreArg[] = this.getChildren(id);
    let initial = out.map((item) => item.id);

    while (initial.length > 0) {
      let childrenId: idType[] = [];
      initial.map((itemId) => {
        const data = this.getChildren(itemId);
        out = out.concat(data);
        data.map((item) => childrenId.push(item.id));
      });
      initial = childrenId;
    }
    return out;
  }

  getAllParents(id: idType) {
    const out: TreeStoreArg[] = [];
    let parent = this.getItem(id).parent;
    while (parent !== "root") {
      const parentInfo = this.getItem(parent);
      out.push(parentInfo);
      parent = parentInfo.parent;
    }
    return out;
  }

  private setData(store: TreeStoreArg[]) {
    const data: TreeStoreDataType = {};
    const childrenData: TreeStoreChildrenType = {};
    store.map((item) => {
      if (item.id === "" || item.parent === "") {
        throw new TypeError("Поле id не должно быть пустым");
      }
      data[item.id] = item;
      if (!childrenData[`${item.parent}`]) {
        childrenData[`${item.parent}`] = [];
      }
      childrenData[`${item.parent}`].push(`${item.id}`);
    });
    return {
      data,
      childrenData,
    };
  }
}
