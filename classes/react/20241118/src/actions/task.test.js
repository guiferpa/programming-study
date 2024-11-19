import * as actions from "./task";

test("should check a task", () => {
  const id = 1;
  const tasks = [{ id: 1, name: "A", isChecked: false }];
  const [got] = actions.check(id, tasks);
  expect(got.isChecked).toBe(true);
});

test("should not check a not found task", () => {
  const id = 1;
  const tasks = [{ id: 2, name: "A", isChecked: false }];
  const [got] = actions.check(id, tasks);
  expect(got.isChecked).toBe(false);
});

test("should persist name given parameter equals A", () => {
  const task = actions.create("A");
  expect(task.name).toBe("A");
});

test("should persist name given parameter equals Z", () => {
  const task = actions.create("Z");
  expect(task.name).toBe("Z");
});

test("should always create with isChecked equals false", () => {
  const task = actions.create("Z");
  expect(task.isChecked).toBe(false);
});
