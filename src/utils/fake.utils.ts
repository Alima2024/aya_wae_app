import { Chance } from "chance";
import dayjs from "dayjs";

export default function generate_fake_data(
  sample: Record<string, string | number | boolean | Date>,
  size: number
) {
  const chance = new Chance(size);
  const base_schema: Record<string, () => any> = {
    firstname: () => chance.first(),
    lastname: () => chance.last(),
    age: () => chance.age({ type: "adult" }),
    birthdate: () =>
      dayjs(chance.birthday({ type: "adult" })).format("DD MMM YYYY"),
    updatedat: () => dayjs(chance.date()).format("DD MMM YYYY"),
    createdat: () => dayjs(chance.date()).format("DD MMM YYYY"),
    email: () => chance.email(),
    gender: () => chance.gender(),
    phonenumner: () => chance.phone(),
    string: () => chance.word(),
    number: () => chance.integer({ max: 10, min: 0 }),
    date: () => chance.date(),
    object: () => chance.word(),
    boolean: () => chance.bool(),
  };

  return Array.from({ length: size }, () => {
    const result: typeof sample = {};

    for (const key in sample) {
      if (base_schema?.[key.toLowerCase()]) {
        result[key] = base_schema[key.toLowerCase()]?.();
      } else {
        const type = typeof sample[key];
        result[key] = base_schema?.[type]?.() ?? "";
      }
    }
    return result as typeof sample;
  });
}
