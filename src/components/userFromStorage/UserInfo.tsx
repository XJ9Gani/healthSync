import { UserFromStorageType } from "../types/UserFromStorage";

function UserInfo({ user }: { user: UserFromStorageType }) {
  return (
    <div className="border-b h-20  w-full flex items-center gap-5">
      <div className="size-18 rounded-full bg-[#C8BCF6]  flex justify-center items-center shadow">
        <h1 className="text-[1.5rem] text-white uppercase">
          {user.firstName[0]}
        </h1>
      </div>
      <h1 className="text-sm font-medium text-center">{user.email}</h1>
    </div>
  );
}

export default UserInfo;
