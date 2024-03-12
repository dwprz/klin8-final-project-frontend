import zod from "zod";

const pattern = /^[^<>/()#=|&!?:;]*$/;

const add = zod.object({
  id: zod.string().uuid(),
  service: zod.string().min(4).max(10).regex(pattern),
  name: zod.string().min(4).max(50).regex(pattern),
  quantity: zod.number().min(1).max(100),
  price: zod.number().min(10000).max(100000),
  totalPrice: zod.number().min(10000),
});

export const cartValidate = {
  add,
};
