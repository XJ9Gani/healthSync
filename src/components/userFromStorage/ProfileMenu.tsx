import { UserFromStorageType } from "../types/UserFromStorage";
import ProfileNavigation from "./ProfileNavigation";
import UserInfo from "./UserInfo";
import ArrowRight from "../svg/ArrowRight";

function ProfileMenu({
  user,
  show,
  handleMenuShow,
}: {
  user: UserFromStorageType;
  show: boolean;
  handleMenuShow: () => void;
}) {
  return (
    <section
      className={`fixed top-0 left-0 h-screen overflow-hidden transition-all duration-200 z-50 bg-white shadow-2xl ${
        show ? "w-1/4 p-10 " : "w-0 pt-10 "
      }`}
    >
      <div
        className="absolute top-14  -right-3 rotate-180  shadow-[0px_0px_5px_1px_gray] p-3 rounded-lg"
        onClick={handleMenuShow}
      >
        <ArrowRight />
      </div>
      <div className="flex flex-col items-center justify-around ">
        <UserInfo user={user} />

        <ProfileNavigation />
      </div>
    </section>
  );
}

export default ProfileMenu;
