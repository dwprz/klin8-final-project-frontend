import zod from "zod";

const pattern = /^[^<>/()#=|&!?:;]*$/;

const register = zod.object({
  username: zod.string().min(4).max(100).regex(pattern),
  email: zod.string().email().regex(pattern),
  password: zod.string().regex(pattern),
});

const login = zod.object({
  username: zod.string().min(4).max(100).regex(pattern),
  password: zod.string().regex(pattern),
});

const update = zod.object({
  username: zod.string().min(4).max(100).regex(pattern),
  password: zod.string().regex(pattern).optional(),
  address: zod.string().min(4).max(200).regex(pattern).optional(),
  postal_code: zod.string().min(4).max(10).regex(pattern).optional(),
});

const session = zod.string().min(4).max(100).regex(pattern);

export const userValidate = {
  register,
  login,
  update,
  session
};
