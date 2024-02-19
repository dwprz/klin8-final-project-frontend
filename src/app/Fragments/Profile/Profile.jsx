import { useState } from "react";

const initUser = {
  id: 1,
  userName: "Anonymous1",
  firstName: "Anonymous1",
  lastName: "Anonymous2",
  profile: "fa-solid fa-circle-user text-9xl",
  email: "Anonymous123@gmail.com",
  phone: "08123456789",
  address: "Goatan Street, Northen District, Pantura States",
  postalCode: "12345",
};

function ProfileFragment() {
  const [user, setUser] = useState(initUser);

  const handleChangeUser = (event, field) => {
    const { value } = event.target;
    setUser({ ...user, [field]: value });
  };


  return (
    <main className="flex flex-col lg:flex-row lg:justify-center lg:gap-24 px-5 sm:px-14 pt-28 sm:pt-32 lg:pt-40 pb-14 lg:h-screen bg-gray-800 text-neutral-100">
      <section>
        <figure className="text-center">
          <i className={user.profile}></i>
          <figcaption className="mt-5">
            <h1>{user.userName}</h1>
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

        <form method="post" className="mt-7 flex flex-col gap-5">
          <section className="flex gap-2">
            <div className="w-1/2">
              <label htmlFor="firstname">Firstname :</label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                value={user.firstName}
                onChange={(event) => handleChangeUser(event, "firstName")}
                className="text-gray-800 border outline-primary w-full px-3 py-1"
              />
            </div>

            <div className="w-1/2">
              <label htmlFor="lastname">Lastname :</label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                value={user.lastName}
                onChange={(event) => handleChangeUser(event, "lastName")}
                className="text-gray-800 border outline-primary w-full px-3 py-1"
              />
            </div>
          </section>

          <div>
            <label htmlFor="phone">Phone :</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={user.phone}
              onChange={(event) => handleChangeUser(event, "phone")}
              className="text-gray-800 border outline-primary w-full px-3 py-1"
            />
          </div>

          <div>
            <label htmlFor="password">Password :</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="********"
              onChange={(event) => handleChangeUser(event, "password")}
              className="text-gray-800 border outline-primary w-full px-3 py-1"
            />
          </div>

          <div>
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={(event) => handleChangeUser(event, "email")}
              className="text-gray-800 border outline-primary w-full px-3 py-1"
            />
          </div>

          <div>
            <label htmlFor="address">Address :</label>
            <input
              type="text"
              id="address"
              name="address"
              value={user.address}
              onChange={(event) => handleChangeUser(event, "address")}
              className="text-gray-800 border outline-primary w-full px-3 py-1"
            />
          </div>

          <div>
            <label htmlFor="postal">Postal Code :</label>
            <input
              type="number"
              id="postal"
              name="postal"
              value={user.postalCode}
              onChange={(event) => handleChangeUser(event, "postalCode")}
              className="text-gray-800 border outline-primary w-full px-3 py-1"
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
