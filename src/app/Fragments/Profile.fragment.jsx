import { useSelector } from "react-redux";
import userService from "../../service/user.service";

function ProfileFragment() {
  const { user } = useSelector((state) => state.user);

  const handleUpdateUser = async (event) => {
    event.preventDefault();

    const data = {
      username: user.username,
      password: event.target.password.value,
      address: event.target.address.value,
      postal_code: event.target.postal_code.value,
    };

    await userService.update(data);
  };

  return (
    <main className="flex flex-col lg:flex-row lg:justify-center lg:gap-24 px-5 sm:px-14 pt-28 sm:pt-32 lg:pt-40 pb-24 lg:h-max bg-gray-800 text-neutral-100">
      <section>
        <figure className="text-center">
          {user.profile ? (
            <div className="flex justify-center">
              <img
                className="w-20 h-20 rounded-full object-cover"
                src={user.profile}
              ></img>
            </div>
          ) : (
            <i className="fa-solid fa-circle-user text-9xl"></i>
          )}
          <figcaption className="mt-5">
            <h1>{user.username}</h1>
            <p>{user.email}</p>
          </figcaption>
        </figure>
        <details className="mt-5 open:translate-y-2 duration-500">
          <summary className="list-none bg-primary hover:bg-secondary w-max mx-auto px-5 py-2 rounded-full">
            Update Profile Image
          </summary>
          <form method="post" className="mt-7 flex flex-col">
            <input
              type="file"
              name="profile"
              id="profile"
              accept="image/*"
              className="w-max mx-auto"
            />
            <button
              type="submit"
              className="bg-primary hover:bg-secondary w-max mx-auto px-2 py-1 rounded-lg"
            >
              Update
            </button>
          </form>
        </details>
      </section>

      <section className="mt-14 lg:mt-0">
        <h1 className="flex items-center gap-3 text-2xl">
          <hr className="w-14 border-t-2 border-primary" />
          Profile Settings
        </h1>

        <form onSubmit={handleUpdateUser} className="mt-7 flex flex-col gap-5">
          <div>
            <label htmlFor="password">Password :</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="********"
              className="text-gray-800 border outline-primary w-full px-3 py-1"
              required
            />
          </div>

          <div>
            <label htmlFor="address">Address :</label>
            <input
              type="text"
              id="address"
              name="address"
              defaultValue={user.address ? user.address : ""}
              className="text-gray-800 border outline-primary w-full px-3 py-1"
              required
            />
          </div>

          <div>
            <label htmlFor="postal_code">Postal Code :</label>
            <input
              type="text"
              id="postal_code"
              name="postal_code"
              defaultValue={user.postal_code ? user.postal_code : ""}
              className="text-gray-800 border outline-primary w-full px-3 py-1"
              required
            />
          </div>

          <button
            type="submit"
            className="w-max ml-auto lg:text-lg lg:mt-10 bg-primary hover:bg-secondary px-3 py-1 rounded-lg"
          >
            Save
          </button>
        </form>
      </section>
    </main>
  );
}

export default ProfileFragment;
